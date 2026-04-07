type Props = {
  type?: "image" | "video";
  height?: number;
  caption?: string;
};

export default function Placeholder({ type = "image", height = 600, caption }: Props) {
  return (
    <figure className="my-12">
      <div
        className="w-full bg-neutral-100 flex items-center justify-center text-neutral-300 text-sm tracking-wide"
        style={{ height: `${height}px` }}
      >
        {type === "video" ? "[ video ]" : "[ image ]"}
      </div>
      {caption && (
        <figcaption className="mt-3 text-xs text-neutral-400 leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
