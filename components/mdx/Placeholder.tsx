type Props = {
  type?: "image" | "video";
  width?: number;
  height?: number;
  caption?: string;
};

export default function Placeholder({ type = "image", width, height = 600, caption }: Props) {
  return (
    <div className="my-12" style={width ? { width, margin: "3rem auto" } : {}}>
      <div
        className="bg-neutral-100 flex items-center justify-center text-neutral-300 text-sm tracking-wide"
        style={{ width: width ? width : "100%", height: `${height}px` }}
      >
        {type === "video" ? "[ video ]" : "[ image ]"}
      </div>
      {caption && (
        <figcaption className="mt-3 text-xs text-neutral-400 leading-relaxed">
          {caption}
        </figcaption>
      )}
    </div>
  );
}
