type Props = {
  s1: string; n1?: string;
  s2: string; n2?: string;
  s3: string; n3?: string;
  s4: string; n4?: string;
  s5: string; badge?: string;
  s6: string; n6?: string;
  s7: string; n7?: string;
  s8: string; n8?: string;
};

export default function FlowSteps({ s1, n1, s2, n2, s3, n3, s4, n4, s5, badge, s6, n6, s7, n7, s8, n8 }: Props) {
  const steps = [
    { num: "01", name: s1, note: n1 },
    { num: "02", name: s2, note: n2 },
    { num: "03", name: s3, note: n3 },
    { num: "04", name: s4, note: n4 },
    { num: "05", name: s5, badge },
    { num: "06", name: s6, note: n6 },
    { num: "07", name: s7, note: n7 },
    { num: "08", name: s8, note: n8 },
  ];

  return (
    <div className="not-prose border border-black/10 rounded-xl overflow-hidden my-6">
      {steps.map(({ num, name, note, badge }, i) => (
        <div
          key={num}
          className="flex items-center gap-4 px-4 py-3 border-b border-black/[0.06] last:border-b-0"
          style={{ background: i % 2 === 0 ? "#ffffff" : "#fafafa" }}
        >
          <span className="text-xs text-neutral-300 w-6 shrink-0 text-right">{num}</span>
          <span className="text-sm text-neutral-800 flex-1">{name}</span>
          {badge && (
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{ background: "rgba(255,69,60,0.08)", color: "#ff453c", border: "1px solid rgba(255,69,60,0.2)" }}
            >
              {badge}
            </span>
          )}
          {note && <span className="text-xs text-neutral-400">{note}</span>}
        </div>
      ))}
    </div>
  );
}
