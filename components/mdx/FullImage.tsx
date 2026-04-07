"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  contained?: boolean;
};

export default function FullImage({ src, alt, caption, contained }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure className="my-12" style={contained ? {} : { width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
        <img
          src={src}
          alt={alt}
          onClick={() => setOpen(true)}
          className="w-full h-auto block"
          style={{ cursor: "zoom-in" }}
        />
        {caption && (
          <figcaption className="mt-3 text-xs text-neutral-400 leading-relaxed" style={{ width: "70%", margin: "0.75rem auto 0" }}>
            {caption}
          </figcaption>
        )}
      </figure>
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}
