"use client";

type Props = {
  src: string;
  height?: number;
};

export default function FigmaEmbed({ src, height = 600 }: Props) {
  return (
    <figure className="my-12">
      <iframe
        src={src}
        width="100%"
        height={height}
        className="block"
        style={{ border: "1px solid rgba(0,0,0,0.1)", borderRadius: "4px" }}
        allowFullScreen
      />
    </figure>
  );
}
