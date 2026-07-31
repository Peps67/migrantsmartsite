// Shared tuning for every <LineWaves /> usage across the site's CTA-band
// sections (the dark rounded card right before each page's footer).
export const LINEWAVES_PROPS = {
  color1: "#A855F7",
  color2: "#7C3AED",
  color3: "#6366F1",
  speed: 0.35,
  innerLineCount: 30,
  outerLineCount: 34,
  warpIntensity: 1.1,
  rotation: -45,
  brightness: 0.35,
  colorCycleSpeed: 0.8,
  enableMouseInteraction: true,
  mouseInfluence: 1.6,
} as const;
