"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import Image from "next/image";

import { CANADA_RINGS } from "@/lib/canada-outline";
import { useWebglSupported } from "@/lib/useWebglSupported";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type Chip = {
  id: string;
  name: string;
  from: string;
  to: string;
  detail: string;
  avatar: string;
  // Position on the square globe wrapper, as percentages of its own box.
  position: string;
};

const CHIPS: Chip[] = [
  {
    id: "ada",
    name: "Ada",
    from: "Lagos",
    to: "Calgary",
    detail: "Registered Nurse",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    position: "top-[10%] left-[4%]",
  },
  {
    id: "miguel",
    name: "Miguel",
    from: "Pakistan",
    to: "Ontario",
    detail: "Data Analyst",
    avatar: "https://randomuser.me/api/portraits/men/59.jpg",
    position: "top-[42%] right-[-1%] @sm:right-[-8%]",
  },
  {
    id: "camille",
    name: "Camille",
    from: "Sweden",
    to: "Toronto",
    detail: "Process Engineer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    position: "top-[80%] left-[4%]",
  },
];

// The angle the globe starts on. Rotation runs continuously from here.
const PHI = 5.4;
const THETA = 0.28;

// Radians per millisecond. One full turn lands around the 42 second mark,
// slow enough that the static chips stay the thing you read.
const SPIN_SPEED = 0.00015;

const PURPLE = "#5448f0";

// cobe draws the sphere at 80% of the canvas and converts lat/lng with exactly
// this formula (see `ee` and `U` in cobe's bundle), so the highlight sits on
// the same coastline the globe's own markers would.
const GLOBE_RADIUS = 0.8;

type Vec3 = [number, number, number];

function toVec3(lat: number, lng: number, r: number): Vec3 {
  const rad = (lat * Math.PI) / 180;
  const a = (lng * Math.PI) / 180 - Math.PI;
  const o = Math.cos(rad) * r;
  return [-o * Math.cos(a), Math.sin(rad) * r, o * Math.sin(a)];
}

// lat/lng only ever converts to the same vector, so the trig runs once at
// module load and every frame after that is six multiply-adds per point.
const CANADA_POINTS: Vec3[][] = CANADA_RINGS.map((ring) =>
  ring.map(([lng, lat]) => toVec3(lat, lng, GLOBE_RADIUS)),
);

// Central Nunavut. Drives both the label's position and the whole overlay's
// fade, so the highlight is gone before rotation squashes it into the limb.
const CANADA_CENTER = toVec3(64, -96, GLOBE_RADIUS);

export function GlobeConnections({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
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
    const overlay = overlayRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !overlay || !wrap) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = wrap.offsetWidth;
    let pixels = Math.round(width * dpr);
    let raf = 0;
    let stopped = false;
    let phi = PHI;
    let last = performance.now();

    const overlayCtx = overlay.getContext("2d");
    overlay.width = pixels;
    overlay.height = pixels;

    let globe: ReturnType<typeof createGlobe>;
    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: pixels,
        height: pixels,
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
    } catch {
      return;
    }

    // Runs in the same frame as globe.update(), off the same phi, onto a canvas
    // stacked on cobe's own. Nothing here touches the DOM, so the highlight
    // cannot lag a frame behind the globe it is painted on.
    const drawCanada = () => {
      if (!overlayCtx) return;
      overlayCtx.clearRect(0, 0, pixels, pixels);

      const cosT = Math.cos(THETA);
      const sinT = Math.sin(THETA);
      const cosP = Math.cos(phi);
      const sinP = Math.sin(phi);

      const centerDepth =
        -sinP * cosT * CANADA_CENTER[0] +
        sinT * CANADA_CENTER[1] +
        cosP * cosT * CANADA_CENTER[2];
      const alpha = Math.max(0, Math.min(1, centerDepth * 4));
      if (alpha <= 0.002) return;

      overlayCtx.globalAlpha = alpha;
      overlayCtx.beginPath();

      // Points on the far side are dropped and each surviving run is closed on
      // its own, so a country crossing the horizon fills the part still facing
      // us instead of smearing a chord across the globe.
      for (const ring of CANADA_POINTS) {
        let open = false;
        for (const v of ring) {
          const depth = -sinP * cosT * v[0] + sinT * v[1] + cosP * cosT * v[2];
          if (depth < 0) {
            if (open) overlayCtx.closePath();
            open = false;
            continue;
          }
          const c = cosP * v[0] + sinP * v[2];
          const s = sinP * sinT * v[0] + cosT * v[1] - cosP * sinT * v[2];
          const x = ((c + 1) / 2) * pixels;
          const y = ((-s + 1) / 2) * pixels;
          if (open) overlayCtx.lineTo(x, y);
          else overlayCtx.moveTo(x, y);
          open = true;
        }
        if (open) overlayCtx.closePath();
      }

      overlayCtx.fillStyle = PURPLE;
      overlayCtx.fill();
      overlayCtx.lineJoin = "round";
      overlayCtx.lineWidth = Math.max(1, pixels * 0.003);
      overlayCtx.strokeStyle = PURPLE;
      overlayCtx.stroke();

      const lx =
        ((cosP * CANADA_CENTER[0] + sinP * CANADA_CENTER[2] + 1) / 2) * pixels;
      const ly =
        ((-(
          sinP * sinT * CANADA_CENTER[0] +
          cosT * CANADA_CENTER[1] -
          cosP * sinT * CANADA_CENTER[2]
        ) +
          1) /
          2) *
        pixels;

      const dot = pixels * 0.009;
      const font = pixels * 0.03;

      overlayCtx.beginPath();
      overlayCtx.arc(lx, ly, dot, 0, Math.PI * 2);
      overlayCtx.fillStyle = "#ffffff";
      overlayCtx.fill();
      overlayCtx.lineWidth = Math.max(1, pixels * 0.004);
      overlayCtx.strokeStyle = PURPLE;
      overlayCtx.stroke();

      overlayCtx.font = `700 ${font}px "Hanken Grotesk", ui-sans-serif, system-ui, sans-serif`;
      overlayCtx.textAlign = "center";
      overlayCtx.textBaseline = "bottom";
      overlayCtx.lineWidth = font * 0.32;
      overlayCtx.lineJoin = "round";
      overlayCtx.strokeStyle = "#ffffff";
      overlayCtx.strokeText("Canada", lx, ly - dot * 2);
      overlayCtx.fillStyle = PURPLE;
      overlayCtx.fillText("Canada", lx, ly - dot * 2);
    };

    // cobe only paints inside update(), so the spin loop doubles as the thing
    // that gets the first frame on screen once its map texture decodes.
    const tick = (now: number) => {
      if (stopped) return;
      const delta = now - last;
      last = now;
      if (!reduceMotion) phi += delta * SPIN_SPEED;
      globe.update({ phi, theta: THETA });
      drawCanada();
      raf = requestAnimationFrame(tick);
    };

    drawCanada();
    raf = requestAnimationFrame(tick);

    const resizeObserver = new ResizeObserver(() => {
      const next = wrap.offsetWidth;
      if (next && next !== width) {
        width = next;
        pixels = Math.round(width * dpr);
        overlay.width = pixels;
        overlay.height = pixels;
        globe.update({ width: pixels, height: pixels });
        drawCanada();
      }
    });
    resizeObserver.observe(wrap);

    // Nothing to animate off screen, so park the spin loop when it scrolls away.
    const visibility = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!raf) {
            last = performance.now();
            raf = requestAnimationFrame(tick);
          }
        } else {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0 },
    );
    visibility.observe(wrap);

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      visibility.disconnect();
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
      <canvas
        ref={overlayRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full"
      />

      {CHIPS.map((chip) => (
        <div
          key={chip.id}
          // Deliberately not animated. HeroReveal already fades the whole
          // column in, and an entrance of their own only ever gave these a way
          // to end up stuck invisible.
          className={cx(
            "pointer-events-none absolute flex items-center gap-2.5 rounded-full border border-[#17171f]/70 bg-white/90 py-1.5 pr-4 pl-1.5 shadow-[0_18px_40px_-16px_rgba(23,23,31,0.35)] backdrop-blur-xl @sm:gap-3 @sm:py-2 @sm:pr-5 @sm:pl-2",
            chip.position,
          )}
        >
          <span className="size-8 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/25 @sm:size-10">
            <Image
              src={chip.avatar}
              alt=""
              width={96}
              height={96}
              className="size-full object-cover"
            />
          </span>
          <span className="block whitespace-nowrap">
            <span className="block text-[11.5px] font-bold text-[#17171f] @sm:text-[13px]">
              {chip.name} - {chip.from}{" "}
              <span className="text-primary">&rarr;</span> {chip.to}
            </span>
            <span className="mt-0.5 block text-[11.5px] text-[#17171f]/60 @sm:text-[12.5px]">
              {chip.detail}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}
