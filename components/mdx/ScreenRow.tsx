type Props = {
  title: string;
  description: string;
};

export default function ScreenRow({ title, description }: Props) {
  return (
    <div className="not-prose flex items-start gap-4 p-4 rounded-xl border border-black/[0.06] bg-neutral-50 my-6">
      <div className="w-8 h-8 shrink-0 rounded-lg border border-black/[0.08] bg-white flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
          <path d="M4 7h6M7 4v6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
        </svg>
      </div>
      <div>
        <p className="text-sm font-medium text-neutral-800 mb-1">{title}</p>
        <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
