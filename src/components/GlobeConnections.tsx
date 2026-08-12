"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import Image from "next/image";

import { useWebglSupported } from "@/lib/useWebglSupported";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type Node = {
  id: string;
  lat: number;
  lng: number;
  country: string;
  code: string;
  avatar: string;
  flagSide?: "left" | "right";
};

const NODES: Node[] = [
  {
    id: "canada",
    lat: 43.6532,
    lng: -79.3832,
    country: "Canada",
    code: "ca",
    avatar: "https://randomuser.me/api/portraits/men/70.jpg",
    flagSide: "left",
  },
  {
    id: "uk",
    lat: 51.5072,
    lng: -0.1276,
    country: "United Kingdom",
    code: "gb",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    flagSide: "right",
  },
  {
    id: "us",
    lat: -6,
    lng: -85,
    country: "United States",
    code: "us",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    flagSide: "left",
  },
  {
    id: "nigeria",
    lat: 6.5244,
    lng: 3.3792,
    country: "Nigeria",
    code: "ng",
    avatar: "https://randomuser.me/api/portraits/men/59.jpg",
    flagSide: "right",
  },
];

const HUB = { id: "hub", lat: 13, lng: -38 };

const INITIAL_PHI = 5.4;
const THETA = 0.28;

const GLOBE_RADIUS = 0.8;
const MARKER_ELEVATION = 0.02;
const ARC_HEIGHT = 0.32;
const ARC_SAMPLES = 72;
const SILHOUETTE_SQ = 0.64;

const SETTLE_MS = 2500;

type Vec3 = [number, number, number];

function toVec3(lat: number, lng: number): Vec3 {
  const r = (lat * Math.PI) / 180;
  const a = (lng * Math.PI) / 180 - Math.PI;
  const o = Math.cos(r);
  return [-o * Math.cos(a), Math.sin(r), o * Math.sin(a)];
}

function project(v: Vec3, phi: number, theta: number) {
  const cosT = Math.cos(theta);
  const sinT = Math.sin(theta);
  const cosP = Math.cos(phi);
  const sinP = Math.sin(phi);

  const c = cosP * v[0] + sinP * v[2];
  const s = sinP * sinT * v[0] + cosT * v[1] - cosP * sinT * v[2];
  const depth = -sinP * cosT * v[0] + sinT * v[1] + cosP * cosT * v[2];

  return {
    x: (c + 1) / 2,
    y: (-s + 1) / 2,
    visible: depth >= 0 || c * c + s * s >= SILHOUETTE_SQ,
  };
}

function arcPath(node: Node, phi: number, theta: number): string {
  const from = toVec3(node.lat, node.lng);
  const to = toVec3(HUB.lat, HUB.lng);

  const elev = GLOBE_RADIUS + MARKER_ELEVATION;
  const p0: Vec3 = [from[0] * elev, from[1] * elev, from[2] * elev];
  const p2: Vec3 = [to[0] * elev, to[1] * elev, to[2] * elev];

  const sum: Vec3 = [from[0] + to[0], from[1] + to[1], from[2] + to[2]];
  const len = Math.hypot(sum[0], sum[1], sum[2]) || 1;
  const ctrlScale = GLOBE_RADIUS + ARC_HEIGHT + MARKER_ELEVATION;
  const p1: Vec3 = [
    (sum[0] / len) * ctrlScale,
    (sum[1] / len) * ctrlScale,
    (sum[2] / len) * ctrlScale,
  ];

  let d = "";
  let drawing = false;

  for (let i = 0; i <= ARC_SAMPLES; i++) {
    const t = i / ARC_SAMPLES;
    const u = 1 - t;
    const point: Vec3 = [
      u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0],
      u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1],
      u * u * p0[2] + 2 * u * t * p1[2] + t * t * p2[2],
    ];

    const { x, y, visible } = project(point, phi, theta);
    if (!visible) {
      drawing = false;
      continue;
    }

    const px = (x * 1000).toFixed(2);
    const py = (y * 1000).toFixed(2);
    d += `${drawing ? "L" : "M"}${px} ${py}`;
    drawing = true;
  }

  return d;
}

export function GlobeConnections({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRefs = useRef<Record<string, SVGPathElement | null>>({});
  const phiRef = useRef(INITIAL_PHI);
  const pointerInteracting = useRef<number | null>(null);
  const webglSupported = useWebglSupported();

  useEffect(() => {
    if (!webglSupported) return;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    let width = wrap.offsetWidth;
    let raf = 0;
    let stopped = false;
    let lastPhi = Number.NaN;
    const start = performance.now();

    const drawArcs = (phi: number) => {
      for (const node of NODES) {
        pathRefs.current[node.id]?.setAttribute("d", arcPath(node, phi, THETA));
      }
    };

    let globe: ReturnType<typeof createGlobe>;
    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: width * 2,
        height: width * 2,
        phi: phiRef.current,
        theta: THETA,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 44000,
        mapBrightness: 6,
        mapBaseBrightness: 0,
        baseColor: [1, 1, 1],
        markerColor: [1, 0.36, 0.64],
        glowColor: [0.78, 0.7, 1],
        markerElevation: MARKER_ELEVATION,
        opacity: 1,
        scale: 1,
        markers: [
          { location: [HUB.lat, HUB.lng], size: 0.012, id: HUB.id },
          ...NODES.map((n) => ({
            location: [n.lat, n.lng] as [number, number],
            size: 0.04,
            id: n.id,
          })),
        ],
      });
    } catch {
      return;
    }

    const tick = () => {
      if (stopped) return;
      const settling = performance.now() - start < SETTLE_MS;
      if (settling || phiRef.current !== lastPhi) {
        lastPhi = phiRef.current;
        globe.update({ phi: phiRef.current, theta: THETA });
        drawArcs(phiRef.current);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    drawArcs(phiRef.current);

    const resizeObserver = new ResizeObserver(() => {
      const next = wrap.offsetWidth;
      if (next && next !== width) {
        width = next;
        globe.update({ width: width * 2, height: width * 2 });
      }
    });
    resizeObserver.observe(wrap);

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      globe.destroy();
    };
  }, [webglSupported]);

  if (!webglSupported) return null;

  return (
    <div
      ref={wrapRef}
      className={cx("relative aspect-square w-full", className)}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          e.currentTarget.style.cursor = "grabbing";
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerUp={(e) => {
          pointerInteracting.current = null;
          e.currentTarget.style.cursor = "grab";
        }}
        onPointerCancel={(e) => {
          pointerInteracting.current = null;
          e.currentTarget.style.cursor = "grab";
        }}
        onPointerMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteracting.current = e.clientX;
            phiRef.current += delta / 200;
          }
        }}
        className="size-full cursor-grab touch-pan-y select-none"
      />

      <svg
        aria-hidden
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 size-full"
      >
        {NODES.map((node) => (
          <path
            key={node.id}
            ref={(el) => {
              pathRefs.current[node.id] = el;
            }}
            fill="none"
            stroke="var(--bright-violet, #6a4bff)"
            strokeWidth={7}
            strokeLinecap="round"
            strokeDasharray="0.5 15"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      <div
        style={
          {
            position: "absolute",
            positionAnchor: "--cobe-hub",
            top: "anchor(center)",
            left: "anchor(center)",
            opacity: "var(--cobe-visible-hub, 0)",
          } as React.CSSProperties
        }
        className="pointer-events-none z-10 size-14 -translate-x-[48.5%] -translate-y-full transition-[opacity] duration-300 sm:size-[68px]"
      >
        <Image
          src="/logo-icon.png"
          alt="Migrant Smart"
          width={72}
          height={92}
          className="size-full object-contain drop-shadow-[0_3px_10px_rgba(46,26,120,0.45)]"
        />
      </div>

      {NODES.map((node) => (
        <div
          key={node.id}
          style={
            {
              position: "absolute",
              positionAnchor: `--cobe-${node.id}`,
              top: "anchor(center)",
              left: "anchor(center)",
              opacity: `var(--cobe-visible-${node.id}, 0)`,
              filter: `blur(calc((1 - var(--cobe-visible-${node.id}, 0)) * 6px))`,
            } as React.CSSProperties
          }
          className="pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[opacity,filter] duration-300"
        >
          <div className="relative">
            <div className="size-14 overflow-hidden rounded-full shadow-[0_14px_32px_-8px_rgba(23,23,31,0.45)] ring-4 ring-white sm:size-[68px]">
              <Image
                src={node.avatar}
                alt=""
                width={96}
                height={96}
                className="size-full object-cover"
              />
            </div>
            <span
              className={cx(
                "absolute -bottom-1 block h-5 w-[27px] overflow-hidden rounded-[4px] shadow-[0_4px_12px_-2px_rgba(23,23,31,0.45)] ring-2 ring-white sm:h-6 sm:w-[33px]",
                node.flagSide === "left" ? "-left-3" : "-right-3",
              )}
            >
              <Image
                src={`https://flagcdn.com/w80/${node.code}.png`}
                alt={node.country}
                width={80}
                height={60}
                className="size-full object-cover"
              />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
