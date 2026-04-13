"use client";

type Props = {
  src: string;
  caption?: string;
  contained?: boolean;
  controls?: boolean;
};

export default function Video({ src, caption, contained, controls = false }: Props) {
  return (
    <figure
      className="my-12"
      style={contained ? {} : { width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        {...(controls ? { controls: true } : {})}
        className="w-full block outline-none border-0"
        style={{ maxHeight: "90vh", objectFit: "contain", display: "block" }}
      />
      {caption && (
        <figcaption className="mt-3 text-xs text-neutral-400 leading-relaxed" style={{ width: "70%", margin: "0.75rem auto 0" }}>
          {caption.replace(/https?:\/\/\S+/, '').trim()}{' '}
          {caption.match(/https?:\/\/\S+/) && (
            <a href={caption.match(/https?:\/\/\S+/)![0]} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">
              {caption.match(/https?:\/\/\S+/)![0]}
            </a>
          )}
        </figcaption>
      )}
    </figure>
  );
}
