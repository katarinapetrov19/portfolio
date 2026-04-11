type Stat = {
  value: string;
  label: string;
};

type Props = {
  stats: Stat[];
};

export default function StatGrid({ stats }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4 my-8">
      {stats.map((s, i) => (
        <div key={i} className="border border-black/10 rounded-xl p-5">
          <p className="text-4xl font-bold tracking-tight mb-2">{s.value}</p>
          <p className="text-sm text-neutral-500 leading-relaxed">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
