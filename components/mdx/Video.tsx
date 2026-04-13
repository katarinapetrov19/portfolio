"use client";

type Props = {
  src: string;
  caption?: string;
  contained?: boolean;
  controls?: boolean;
  phone?: boolean;
  width?: number;
  height?: number;
};

export default function Video({ src, caption, contained, controls = false, phone = false, width, height }: Props) {
  return (
    <figure
      className="my-12 flex flex-col items-center"
      style={contained
        ? { ...(width ? { width } : {}), ...(height ? { height } : {}) }
        : { width: "100vw", marginLeft: "calc(-50vw + 50%)", background: "white", ...(height ? { height } : {}) }
      }
    >
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        {...(controls ? { controls: true } : {})}
        className="block outline-none border-0"
        style={{ display: "block", maxWidth: "100%", ...(width ? { width } : {}) }}
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
