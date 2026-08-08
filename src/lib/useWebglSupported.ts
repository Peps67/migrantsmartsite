"use client";

import { useEffect, useState } from "react";

// Some WebGL libraries (react-three-fiber, cobe) construct their context
// inside their own effects, so a failed context creation (WebGL disabled or
// sandboxed) throws before any try/catch in the calling component could
// catch it. Feature-detect on a throwaway canvas first and only mount the
// real WebGL component once we know context creation actually works.
export function useWebglSupported() {
  const [supported, setSupported] = useState(false);
  useEffect(() => {
    let ok = false;
    try {
      const canvas = document.createElement("canvas");
      ok = !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
    } catch {
      ok = false;
    }
    setSupported(ok);
  }, []);
  return supported;
}
