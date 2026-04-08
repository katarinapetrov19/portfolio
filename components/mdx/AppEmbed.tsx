"use client";

type Props = {
  src: string;
  label?: string;
  height?: number;
};

export default function AppEmbed({ src, label = "Live app", height = 700 }: Props) {
  return (
    <figure className="my-12" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
      <div className="relative w-full overflow-hidden bg-neutral-50" style={{ height }}>
        <iframe
          src={src}
          title={label}
          className="w-full h-full border-0"
          allow="fullscreen"
        />
      </div>
      <figcaption
        className="mt-3 text-xs text-neutral-400 leading-relaxed"
        style={{ width: "70%", margin: "0.75rem auto 0" }}
      >
        {label} —{" "}
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-black transition-colors"
        >
          open in new tab →
        </a>
      </figcaption>
    </figure>
  );
}
