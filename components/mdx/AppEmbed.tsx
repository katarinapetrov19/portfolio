"use client";

type Props = {
  src: string;
  label?: string;
  height?: number;
};

export default function AppEmbed({ src, label = "Live app", height = 900 }: Props) {
  return (
    <figure className="my-12" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
      {/* Zinc background matching the app's own bg-zinc-300 body */}
      <div
        className="w-full flex items-center justify-center"
        style={{ height, backgroundColor: "#d4d4d8" }}
      >
        {/* Card wrapper — shadow lives here, outside the iframe */}
        <div
          style={{
            width: 390,
            height: Math.round(height * 0.8),
            borderRadius: "3rem",
            boxShadow: "0 32px 80px rgba(0,0,0,0.25)",
            overflow: "hidden",
            border: "1px solid rgba(161,161,170,0.3)",
          }}
        >
          <iframe
            src={src}
            title={label}
            width={390}
            height={Math.round(height * 0.8)}
            className="border-0 block"
            scrolling="no"
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </div>
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
