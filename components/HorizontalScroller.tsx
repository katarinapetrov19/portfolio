"use client";

import { useRef, useEffect, useState } from "react";

export default function HorizontalScroller({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [spacerHeight, setSpacerHeight] = useState(0);

  // Measure total panel width → set spacer tall enough to create scroll room
  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const measure = () => {
      const totalWidth = track.scrollWidth;
      const viewW = container.clientWidth;
      const viewH = window.innerHeight - 56;
      setSpacerHeight(totalWidth - viewW + viewH);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, []);

  // Translate track left as user scrolls down inside container
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const onScroll = () => {
      track.style.transform = `translateX(-${container.scrollTop}px)`;
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "calc(100vh - 56px)",
        overflowY: "scroll",
        overflowX: "hidden",
        overscrollBehavior: "none",
      }}
    >
      {/* Spacer creates vertical scroll distance */}
      <div style={{ height: spacerHeight || "calc(100vh - 56px)" }}>
        {/* Sticky so panels stay pinned to the top */}
        <div style={{ position: "sticky", top: 0, height: "calc(100vh - 56px)", overflow: "hidden" }}>
          <div
            ref={trackRef}
            style={{ display: "flex", height: "100%", willChange: "transform" }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
