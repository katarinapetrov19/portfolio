type Props = {
  v1: string; l1: string;
  v2: string; l2: string;
  v3: string; l3: string;
};

export default function StatGrid({ v1, l1, v2, l2, v3, l3 }: Props) {
  const stats = [{ value: v1, label: l1 }, { value: v2, label: l2 }, { value: v3, label: l3 }];
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
