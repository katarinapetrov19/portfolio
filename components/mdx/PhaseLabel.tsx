type Props = { text: string };

export default function PhaseLabel({ text }: Props) {
  return (
    <div className="not-prose mb-3 mt-8">
      <span
        className="inline-block text-xs font-medium tracking-wide px-3 py-1 rounded-full"
        style={{ backgroundColor: "#ff453c", color: "#ffffff" }}
      >
        {text}
      </span>
    </div>
  );
}
