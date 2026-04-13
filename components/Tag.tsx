type TagProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const newsreader = { fontFamily: "var(--font-newsreader)", fontStyle: "italic" };

export default function Tag({ label, active = false, onClick }: TagProps) {
  const base =
    "inline-block px-2.5 py-0.5 text-xs tracking-wide border rounded-full transition-colors";
  const variant = active
    ? "border-black bg-black text-white"
    : "border-black/20 text-neutral-500 hover:border-black hover:text-black";

  if (onClick) {
    return (
      <button className={`${base} ${variant} cursor-pointer`} style={newsreader} onClick={onClick}>
        {label}
      </button>
    );
  }

  return <span className={`${base} ${variant}`} style={newsreader}>{label}</span>;
}
