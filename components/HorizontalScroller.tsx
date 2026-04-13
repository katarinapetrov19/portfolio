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

  // Convert horizontal wheel (trackpad swipe) to vertical scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        container.scrollTop += e.deltaX;
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  // Convert touch swipe to vertical scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startX = 0;
    let startScrollTop = 0;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startScrollTop = container.scrollTop;
    };

    const onTouchMove = (e: TouchEvent) => {
      const deltaX = startX - e.touches[0].clientX;
      container.scrollTop = startScrollTop + deltaX;
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div
      id="horizontal-scroll-container"
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
