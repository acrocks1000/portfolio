"use client";
import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      el.style.display = "none";
      return;
    }
    let raf = 0;
    let tx = -1000;
    let ty = -1000;
    let x = tx;
    let y = ty;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const loop = () => {
      raf = requestAnimationFrame(loop);
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
