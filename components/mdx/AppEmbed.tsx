"use client";

import { useState } from "react";

type Props = {
  src: string;
  label?: string;
  height?: number;
};

export default function AppEmbed({ src, label = "Live app", height = 900 }: Props) {
  const [active, setActive] = useState(false);
  const cardHeight = Math.round(height * 0.8);

  return (
    <figure className="my-12" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
      <div
        className="w-full flex items-center justify-center"
        style={{ height, backgroundColor: "#ffffff" }}
      >
        <div
          style={{
            width: 390,
            height: cardHeight,
            borderRadius: "3rem",
            boxShadow: "0 32px 80px rgba(0,0,0,0.25)",
            overflow: "hidden",
            border: "1px solid rgba(161,161,170,0.3)",
            position: "relative",
            cursor: active ? "default" : "pointer",
          }}
          onClick={() => setActive(true)}
        >
          <iframe
            src={src}
            title={label}
            width={390}
            height={cardHeight}
            className="border-0 block"
            scrolling="no"
            sandbox="allow-scripts allow-same-origin allow-forms"
            style={{ pointerEvents: active ? "auto" : "none" }}
          />

          {/* Hover hint — hidden once clicked */}
          {!active && (
            <div
              className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 hover:opacity-100 transition-opacity duration-200"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.06) 0%, transparent 50%)" }}
            >
              <span className="text-xs text-neutral-500 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neutral-200">
                Click to interact
              </span>
            </div>
          )}
        </div>
      </div>
      <figcaption
        className="mt-3 text-xs text-neutral-400 leading-relaxed"
        style={{ width: "70%", margin: "0.75rem auto 0" }}
      >
        {label} —{" "}
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-black transition-colors"
        >
          open in new tab →
        </a>
      </figcaption>
    </figure>
  );
}
