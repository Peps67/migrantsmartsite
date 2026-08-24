"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { gsap } from "gsap";
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
    lat: 29.7604,
    lng: -95.3698,
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

// The angle the loop opens and closes on. Rotation runs a full turn from here
// and lands back on it, so intro and exit always play against this same frame.
const PHI = 5.4;
const THETA = 0.28;

const GLOBE_RADIUS = 0.8;
const MARKER_ELEVATION = 0.02;
const ARC_HEIGHT = 0.32;
const ARC_SAMPLES = 72;
const SILHOUETTE_SQ = 0.64;

const SETTLE_MS = 2500;

// Matches the old dash pattern this replaces: strokeWidth 12 gave a ~12-unit
// round dot, strokeDasharray "0.5 15" repeated every 15.5 units.
const DOT_SPACING = 15.5;
const DOT_RADIUS = 6;

const AVATARS_IN = 0.55;
const LINE_DRAW = 0.9;
const DOT_POP = 0.3;
const HUB_DROP = 0.9;

// How long the assembled state (dots + hub) holds before it tears down again.
const HOLD_ASSEMBLED = 1.4;

const HUB_EXIT = 0.5;
const LINE_RETRACT = 0.7;
const DOT_FADE = 0.25;

const ROTATE_HOLD = 0.3;
const ROTATE_DURATION = 21;
const POST_ROTATE_PAUSE = 0.25;

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

type Dot = { x: number; y: number };

// Screen positions for one line's dots, spaced evenly by arc length.
// Resampling by distance rather than by bezier parameter matters: even
// t-steps bunch up where the curve foreshortens near the globe's edge, which
// would make spacing visibly uneven. Dots only ever render while the globe is
// parked at PHI, so a single solve at that angle is all that's needed.
function arcDots(node: Node, phi: number, theta: number): Dot[] {
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

  const samples: Array<Dot & { visible: boolean }> = [];
  for (let i = 0; i <= ARC_SAMPLES; i++) {
    const t = i / ARC_SAMPLES;
    const u = 1 - t;
    const point: Vec3 = [
      u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0],
      u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1],
      u * u * p0[2] + 2 * u * t * p1[2] + t * t * p2[2],
    ];

    const { x, y, visible } = project(point, phi, theta);
    samples.push({ x: x * 1000, y: y * 1000, visible });
  }

  const dots: Dot[] = [];
  let untilNext = 0;

  for (let i = 0; i < samples.length - 1; i++) {
    const a = samples[i];
    const b = samples[i + 1];
    if (!a.visible || !b.visible) continue;

    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const segment = Math.hypot(dx, dy);
    if (segment === 0) continue;

    let pos = untilNext;
    while (pos <= segment) {
      const r = pos / segment;
      dots.push({ x: a.x + dx * r, y: a.y + dy * r });
      pos += DOT_SPACING;
    }
    untilNext = pos - segment;
  }

  return dots;
}

// Solved once at module load and never recomputed: the dots are only ever on
// screen while the globe is parked at PHI. Safe to evaluate during SSR.
const ARC_DOTS: Record<string, Dot[]> = Object.fromEntries(
  NODES.map((node) => [node.id, arcDots(node, PHI, THETA)]),
);

export function GlobeConnections({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const avatarRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const dotGroupRefs = useRef<Record<string, SVGGElement | null>>({});
  const hubRef = useRef<HTMLDivElement>(null);
  const webglSupported = useWebglSupported();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!webglSupported) return;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    let width = wrap.offsetWidth;
    let raf = 0;
    let stopped = false;
    const start = performance.now();

    let globe: ReturnType<typeof createGlobe>;
    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: width * 2,
        height: width * 2,
        phi: PHI,
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

    // cobe decodes its map texture asynchronously and only paints inside
    // update(). Nothing drives a frame while the globe is parked, so this
    // keeps calling update() long enough for the frame after the texture
    // decodes to actually get painted, then stops.
    const tick = () => {
      if (stopped) return;
      globe.update({ phi: PHI, theta: THETA });
      if (performance.now() - start < SETTLE_MS) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);

    const resizeObserver = new ResizeObserver(() => {
      const next = wrap.offsetWidth;
      if (next && next !== width) {
        width = next;
        globe.update({ width: width * 2, height: width * 2 });
      }
    });
    resizeObserver.observe(wrap);

    const avatarEls = NODES.map((n) => avatarRefs.current[n.id]).filter(
      (el): el is HTMLDivElement => el !== null,
    );
    const dotSets = NODES.map((n) => {
      const group = dotGroupRefs.current[n.id];
      return group ? Array.from(group.children) : [];
    });
    const hubEl = hubRef.current;

    let ctx: gsap.Context | undefined;
    let visibility: IntersectionObserver | undefined;

    if (hubEl && avatarEls.length === NODES.length) {
      ctx = gsap.context(() => {
        const allDots = dotSets.flat();

        if (reduceMotion) {
          gsap.set(avatarEls, { opacity: 1, scale: 1 });
          gsap.set(allDots, { opacity: 1, scale: 1 });
          gsap.set(hubEl, { opacity: 1, yPercent: 0 });
          return;
        }

        // Avatars and flags are the one layer that never leaves — they fade
        // in once and then ride the globe for good, so they sit outside the
        // repeating timeline.
        gsap.fromTo(
          avatarEls,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: AVATARS_IN, ease: "power3.out" },
        );

        const spin = { phi: PHI };
        const tl = gsap.timeline({
          repeat: -1,
          delay: AVATARS_IN,
          repeatDelay: POST_ROTATE_PAUSE,
        });

        // One tween per line, all starting together. `amount` spreads a fixed
        // total across however many dots that line has, so lines of different
        // lengths still land on the hub at the same moment — which is what
        // reads as "converging". `each` would not.
        dotSets.forEach((dots, i) => {
          if (!dots.length) return;
          tl.fromTo(
            dots,
            { opacity: 0, scale: 0 },
            {
              opacity: 1,
              scale: 1,
              duration: DOT_POP,
              ease: "back.out(1.7)",
              stagger: { amount: LINE_DRAW },
            },
            i === 0 ? 0 : "<",
          );
        });

        tl.fromTo(
          hubEl,
          { opacity: 0, yPercent: -60 },
          {
            opacity: 1,
            yPercent: 0,
            duration: HUB_DROP,
            ease: "elastic.out(1, 0.8)",
          },
          "-=0.1",
        );

        // Teardown mirrors the intro: hub leaves the way it arrived, then the
        // dots retract from the hub back toward each flag.
        tl.to(
          hubEl,
          {
            opacity: 0,
            yPercent: -60,
            duration: HUB_EXIT,
            ease: "back.in(1.6)",
          },
          `+=${HOLD_ASSEMBLED}`,
        );

        dotSets.forEach((dots, i) => {
          if (!dots.length) return;
          tl.to(
            dots,
            {
              opacity: 0,
              scale: 0,
              duration: DOT_FADE,
              ease: "power2.in",
              stagger: { amount: LINE_RETRACT, from: "end" },
            },
            i === 0 ? "-=0.15" : "<",
          );
        });

        // A full turn with only the avatars aboard, landing back on PHI so the
        // next assembly plays against the exact frame this one did. Nothing
        // but cobe needs a frame here — the dots are hidden and never move.
        tl.fromTo(
          spin,
          { phi: PHI },
          {
            phi: PHI + Math.PI * 2,
            duration: ROTATE_DURATION,
            ease: "none",
            onUpdate: () => globe.update({ phi: spin.phi, theta: THETA }),
          },
          `+=${ROTATE_HOLD}`,
        );

        visibility = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) tl.play();
            else tl.pause();
          },
          { threshold: 0 },
        );
        visibility.observe(wrap);
      }, wrapRef);
    }

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      visibility?.disconnect();
      ctx?.revert();
      globe.destroy();
    };
  }, [webglSupported, reduceMotion]);

  if (!webglSupported) return null;

  return (
    <div
      ref={wrapRef}
      className={cx("@container relative aspect-square w-full", className)}
    >
      <canvas ref={canvasRef} className="pointer-events-none size-full" />

      <svg
        aria-hidden
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 size-full"
      >
        {NODES.map((node) => (
          <g
            key={node.id}
            ref={(el) => {
              dotGroupRefs.current[node.id] = el;
            }}
            fill="var(--bright-violet, #6a4bff)"
          >
            {ARC_DOTS[node.id].map((dot, i) => (
              <circle
                key={i}
                cx={dot.x}
                cy={dot.y}
                r={DOT_RADIUS}
                opacity={0}
              />
            ))}
          </g>
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
        className="pointer-events-none z-10 size-9 -translate-x-[48.5%] -translate-y-full transition-opacity duration-300 @sm:size-12 @md:size-14 @xl:size-[68px]"
      >
        <div ref={hubRef} className="size-full opacity-0">
          <Image
            src="/logo-icon.png"
            alt="Migrant Smart"
            width={72}
            height={92}
            className="size-full object-contain drop-shadow-[0_3px_10px_rgba(46,26,120,0.45)]"
          />
        </div>
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
          <div
            ref={(el) => {
              avatarRefs.current[node.id] = el;
            }}
            className="relative opacity-0"
          >
            <div className="size-7 overflow-hidden rounded-full shadow-[0_14px_32px_-8px_rgba(23,23,31,0.45)] ring-2 ring-white @sm:size-9 @sm:ring-[3px] @md:size-11 @xl:size-14">
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
                "absolute -bottom-0.5 block h-2.5 w-[13px] overflow-hidden rounded-[3px] shadow-[0_4px_12px_-2px_rgba(23,23,31,0.45)] ring-1 ring-white @sm:h-3 @sm:w-[16px] @md:h-4 @md:w-[21px] @md:ring-2 @xl:h-5 @xl:w-[27px]",
                node.flagSide === "left"
                  ? "-left-1.5 @md:-left-2.5"
                  : "-right-1.5 @md:-right-2.5",
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
