type Props = {
  s1: string; d1: string;
  s2: string; d2: string;
  s3: string; d3: string;
  s4: string; d4: string;
};

export default function StageGrid({ s1, d1, s2, d2, s3, d3, s4, d4 }: Props) {
  const stages = [
    { label: s1, desc: d1 },
    { label: s2, desc: d2 },
    { label: s3, desc: d3 },
    { label: s4, desc: d4 },
  ];

  return (
    <div className="not-prose grid grid-cols-4 gap-4 my-10">
      {stages.map(({ label, desc }) => (
        <div
          key={label}
          className="rounded-2xl border border-black/10 p-5 flex flex-col gap-3"
        >
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "#ff453c" }}
          >
            {label}
          </span>
          <p className="text-sm text-neutral-600 leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  );
}
