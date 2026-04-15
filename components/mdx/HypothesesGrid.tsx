function BoldText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1
          ? <strong key={i} className="font-medium text-neutral-800">{part}</strong>
          : part
      )}
    </>
  );
}

type Props = {
  sectionLabel?: string;
  title: string;
  description?: string;
  i1l: string; i1t: string;
  i2l: string; i2t: string;
  i3l?: string; i3t?: string;
  i4l?: string; i4t?: string;
  i5l?: string; i5t?: string;
  i6l?: string; i6t?: string;
  i7l?: string; i7t?: string;
  i8l?: string; i8t?: string;
};

export default function HypothesesGrid({
  sectionLabel, title, description,
  i1l, i1t, i2l, i2t,
  i3l, i3t, i4l, i4t,
  i5l, i5t, i6l, i6t,
  i7l, i7t, i8l, i8t,
}: Props) {
  const items = [
    { label: i1l, text: i1t },
    { label: i2l, text: i2t },
    ...(i3l && i3t ? [{ label: i3l, text: i3t }] : []),
    ...(i4l && i4t ? [{ label: i4l, text: i4t }] : []),
    ...(i5l && i5t ? [{ label: i5l, text: i5t }] : []),
    ...(i6l && i6t ? [{ label: i6l, text: i6t }] : []),
    ...(i7l && i7t ? [{ label: i7l, text: i7t }] : []),
    ...(i8l && i8t ? [{ label: i8l, text: i8t }] : []),
  ];

  return (
    <div className="not-prose max-w-[70%] mx-auto my-10">
      {sectionLabel && (
        <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 mb-4">{sectionLabel}</p>
      )}
      <h2 className="text-2xl font-medium tracking-tight leading-tight mb-3">{title}</h2>
      {description && (
        <p className="text-sm text-neutral-500 leading-relaxed mb-8">{description}</p>
      )}
      <div className="grid grid-cols-2 gap-3">
        {items.map(({ label, text }) => (
          <div key={label} className="border border-black/10 rounded-xl p-4 bg-neutral-50">
            <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 mb-2">{label}</p>
            <p className="text-sm text-neutral-600 leading-relaxed"><BoldText text={text} /></p>
          </div>
        ))}
      </div>
    </div>
  );
}
