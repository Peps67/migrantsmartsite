"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import Image from "next/image";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type Node = {
  id: string;
  x: number;
  y: number;
  country: string;
  code: string;
  avatar: string;
  flagSide?: "left" | "right";
};

const NODES: Node[] = [
  {
    id: "canada",
    x: 0.24,
    y: 0.21,
    country: "Canada",
    code: "ca",
    avatar: "https://randomuser.me/api/portraits/men/70.jpg",
    flagSide: "right",
  },
  {
    id: "uk",
    x: 0.77,
    y: 0.2,
    country: "United Kingdom",
    code: "gb",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    flagSide: "right",
  },
  {
    id: "us",
    x: 0.16,
    y: 0.68,
    country: "United States",
    code: "us",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    flagSide: "left",
  },
  {
    id: "nigeria",
    x: 0.86,
    y: 0.67,
    country: "Nigeria",
    code: "ng",
    avatar: "https://randomuser.me/api/portraits/men/59.jpg",
    flagSide: "right",
  },
];

const CENTER = { x: 0.5, y: 0.5 };
const ARC_BOW = 0.16;

const PHI = 5.4;
const THETA = 0.28;

// cobe decodes its map texture asynchronously and only paints inside update().
// A parked globe would otherwise keep the first, textureless frame forever.
const SETTLE_MS = 2500;

function arcPath(node: Node) {
  const ax = node.x * 1000;
  const ay = node.y * 1000;
  const cxp = CENTER.x * 1000;
  const cyp = CENTER.y * 1000;

  const vx = cxp - ax;
  const vy = cyp - ay;
  const len = Math.hypot(vx, vy) || 1;

  const mx = (ax + cxp) / 2;
  const my = (ay + cyp) / 2;
  const ctrlX = mx + (-vy / len) * len * ARC_BOW;
  const ctrlY = my + (vx / len) * len * ARC_BOW;

  return `M${ax} ${ay}Q${ctrlX.toFixed(2)} ${ctrlY.toFixed(2)} ${cxp} ${cyp}`;
}

export function GlobeConnections({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    let width = wrap.offsetWidth;
    let raf = 0;
    let stopped = false;
    const start = performance.now();

    const globe = createGlobe(canvas, {
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
      opacity: 1,
      scale: 1,
      markers: [],
    });

    const draw = () => {
      if (stopped) return;
      globe.update({ phi: PHI, theta: THETA });
      if (performance.now() - start < SETTLE_MS) {
        raf = requestAnimationFrame(draw);
      }
    };
    raf = requestAnimationFrame(draw);

    const resizeObserver = new ResizeObserver(() => {
      const next = wrap.offsetWidth;
      if (next && next !== width) {
        width = next;
        globe.update({
          width: width * 2,
          height: width * 2,
          phi: PHI,
          theta: THETA,
        });
      }
    });
    resizeObserver.observe(wrap);

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      globe.destroy();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={cx("relative aspect-square w-full", className)}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none size-full select-none"
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
            d={arcPath(node)}
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
        className="pointer-events-none absolute z-10 size-14 -translate-x-[48.5%] -translate-y-full sm:size-[68px]"
        style={{ left: `${CENTER.x * 100}%`, top: `${CENTER.y * 100}%` }}
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
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x * 100}%`, top: `${node.y * 100}%` }}
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
