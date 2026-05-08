import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    setEnabled(media.matches);
    const handler = (e: MediaQueryListEvent) => setEnabled(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.body.style.cursor = "none";

    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      const size = isHovering.current ? 50 : 32;
      cursorRef.current.style.transform = `translate(${e.clientX - size / 2}px, ${e.clientY - size / 2}px)`;
    };

    const checkHover = (e: MouseEvent, state: boolean) => {
      const t = e.target as HTMLElement;
      if (!t.closest("a, button, [data-hover='true']")) return;
      if (isHovering.current === state) return;
      isHovering.current = state;
      if (!cursorRef.current) return;
      const size = state ? 50 : 32;
      cursorRef.current.style.width = `${size}px`;
      cursorRef.current.style.height = `${size}px`;
      cursorRef.current.style.background = state ? "rgba(234,0,0,0.15)" : "rgba(234,0,0,0.08)";
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", (e) => checkHover(e, true));
    document.addEventListener("mouseout", (e) => checkHover(e, false));

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.style.cursor = "auto";
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        border: "1.5px solid #ea0000",
        background: "rgba(234,0,0,0.08)",
        willChange: "transform",
        transition: "width 0.15s ease, height 0.15s ease, background 0.15s ease",
      }}
    />
  );
}