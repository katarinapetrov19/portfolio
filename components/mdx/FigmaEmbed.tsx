"use client";

type Props = {
  src: string;
  height?: number;
};

export default function FigmaEmbed({ src, height = 450 }: Props) {
  return (
    <figure className="my-12" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
      <iframe
        src={src}
        width="100%"
        height={height}
        className="border-0 block"
        style={{ border: "1px solid rgba(0,0,0,0.1)" }}
        allowFullScreen
      />
    </figure>
  );
}
