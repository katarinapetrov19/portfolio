type TagProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export default function Tag({ label, active = false, onClick }: TagProps) {
  const base =
    "inline-block px-2.5 py-0.5 text-xs tracking-wide border rounded-full transition-colors";
  const style = active
    ? "border-black bg-black text-white"
    : "border-black/20 text-neutral-500 hover:border-black hover:text-black";

  if (onClick) {
    return (
      <button className={`${base} ${style} cursor-pointer`} onClick={onClick}>
        {label}
      </button>
    );
  }

  return <span className={`${base} ${style}`}>{label}</span>;
}
