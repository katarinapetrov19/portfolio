type Props = {
  f1l: string; f1t: string;
  f2l: string; f2t: string;
  f3l: string; f3t: string;
  f4l: string; f4t: string;
};

export default function FindingsGrid({ f1l, f1t, f2l, f2t, f3l, f3t, f4l, f4t }: Props) {
  const findings = [
    { label: f1l, text: f1t },
    { label: f2l, text: f2t },
    { label: f3l, text: f3t },
    { label: f4l, text: f4t },
  ];

  return (
    <div className="not-prose max-w-[70%] mx-auto grid grid-cols-2 gap-3 my-6">
      {findings.map(({ label, text }) => (
        <div key={label} className="border border-black/10 rounded-xl p-4 bg-neutral-50">
          <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 mb-2">{label}</p>
          <p className="text-sm text-neutral-600 leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
  );
}
