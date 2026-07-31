// Shared tuning for every <Grainient /> usage across the site — a calmer, more
// tasteful stand-in for Aurora. Darkest stop matches the fixed-dark section bg
// (#0b0a12) exactly so the shader blends to nothing instead of graphic-cutting
// against it, the same rule that governed Aurora's fixed-dark sections.
export const GRAINIENT_PROPS = {
  color1: "#8f84ff",
  color2: "#5448f0",
  color3: "#0b0a12",
  timeSpeed: 0.15,
  warpStrength: 1.3,
  warpFrequency: 3.5,
  warpSpeed: 1.2,
  warpAmplitude: 30,
  blendSoftness: 0.15,
  rotationAmount: 220,
  noiseScale: 1.5,
  grainAmount: 0.06,
  grainScale: 2.5,
  contrast: 1.25,
  gamma: 1.0,
  saturation: 0.95,
  zoom: 1.1,
} as const;
