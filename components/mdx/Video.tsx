"use client";

type Props = {
  src: string;
  caption?: string;
  contained?: boolean;
  controls?: boolean;
  width?: number;
  height?: number;
};

export default function Video({ src, caption, contained, controls = false, width, height }: Props) {
  const hasDimensions = width && height;

  const figureStyle = hasDimensions
    ? { width, height, margin: "3rem auto" }
    : contained
    ? {}
    : { width: "100vw", marginLeft: "calc(-50vw + 50%)" };

  const videoStyle = hasDimensions
    ? { width, height, display: "block" as const }
    : { width: "100%", display: "block" as const };

  return (
    <figure className="flex flex-col" style={figureStyle}>
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        {...(controls ? { controls: true } : {})}
        style={videoStyle}
      />
      {caption && (
        <figcaption className="mt-3 text-xs text-neutral-400 leading-relaxed">
          {caption.replace(/https?:\/\/\S+/, "").trim()}{" "}
          {caption.match(/https?:\/\/\S+/) && (
            <a
              href={caption.match(/https?:\/\/\S+/)![0]}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-black transition-colors"
            >
              {caption.match(/https?:\/\/\S+/)![0]}
            </a>
          )}
        </figcaption>
      )}
    </figure>
  );
}
