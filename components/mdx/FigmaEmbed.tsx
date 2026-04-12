"use client";

type Props = {
  src: string;
  height?: number;
  fullWidth?: boolean;
};

export default function FigmaEmbed({ src, height = 600, fullWidth }: Props) {
  return (
    <figure className="my-12" style={fullWidth ? { width: "100vw", marginLeft: "calc(-50vw + 50%)" } : {}}>
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
