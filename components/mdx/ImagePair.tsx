"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";

type Props = {
  src1: string;
  alt1: string;
  src2: string;
  alt2: string;
  caption?: string;
};

export default function ImagePair({ src1, alt1, src2, alt2, caption }: Props) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <figure className="my-12">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          <img src={src1} alt={alt1} onClick={() => setLightbox({ src: src1, alt: alt1 })}
            className="w-full h-auto block rounded" style={{ cursor: "zoom-in", border: "1px solid rgba(0,0,0,0.08)" }} />
          <img src={src2} alt={alt2} onClick={() => setLightbox({ src: src2, alt: alt2 })}
            className="w-full h-auto block rounded" style={{ cursor: "zoom-in", border: "1px solid rgba(0,0,0,0.08)" }} />
        </div>
        {caption && (
          <figcaption className="mt-3 text-xs text-neutral-400 leading-relaxed">
            {caption}
          </figcaption>
        )}
      </figure>
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </>
  );
}
