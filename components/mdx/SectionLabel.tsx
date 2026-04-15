type Props = { text: string };

export default function SectionLabel({ text }: Props) {
  return (
    <p className="text-xs tracking-widest text-neutral-400 uppercase mb-3 mt-12 not-prose">{text}</p>
  );
}
