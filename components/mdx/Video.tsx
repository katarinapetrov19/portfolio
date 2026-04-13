"use client";

type Props = {
  src: string;
  caption?: string;
  contained?: boolean;
  controls?: boolean;
  phone?: boolean;
};

export default function Video({ src, caption, contained, controls = false, phone = false }: Props) {
  return (
    <figure
      className="my-12 flex flex-col items-center"
      style={contained ? {} : { width: "100vw", marginLeft: "calc(-50vw + 50%)", background: "white" }}
    >
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        {...(controls ? { controls: true } : {})}
        className="block outline-none border-0"
        style={{ width: "100%", display: "block" }}
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
