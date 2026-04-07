"use client";

type Props = {
  src: string;
  caption?: string;
};

export default function Video({ src, caption }: Props) {
  return (
    <figure className="my-12" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto block"
      />
      {caption && (
        <figcaption className="mt-3 text-xs text-neutral-400 leading-relaxed" style={{ width: "70%", margin: "0.75rem auto 0" }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
