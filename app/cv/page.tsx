const experience = [
  {
    role: "Staff UX Designer",
    company: "HelloFresh",
    period: "2022 — present",
    description:
      "Led UX strategy on the Product Catalogue redesign using OOUX, and the CUI campaign creation tool. Focused on systems thinking, reducing cognitive load, and designing for scale across multiple markets.",
  },
  {
    role: "Product Design Lead",
    company: "Delivery Hero SE",
    period: "2020 — 2022",
    description:
      "Built the UX function for the Vendor Portal from scratch. Hired and grew a design team, established process, led a full design system migration, and drove alignment across product, engineering, and operations.",
  },
  {
    role: "Senior Product Designer",
    company: "Delivery Hero SE",
    period: "2016 — 2020",
    description:
      "Senior product design across multiple verticals. Shaped interaction patterns and visual systems at scale.",
  },
  {
    role: "Senior Web & Mobile UI Designer",
    company: "LUNA TBWA",
    period: "2012 — 2016",
    description:
      "Led UI design for web and mobile products at one of the region's leading agencies. Worked across notable clients including Nissan, Mastercard, BMW, and Krka pharmaceuticals.",
  },
];

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/katarinapetrov" },
  { label: "Email", href: "mailto:katarinapetrov@gmail.com" },
];

export default function CVPage() {
  return (
    <div className="px-[30px] py-20 max-w-xl">
      <div className="flex items-start justify-between mb-16">
        <div>
          <h1 className="text-3xl font-medium tracking-tight mb-1">
            Katarina Petrov
          </h1>
          <p className="text-neutral-500 text-sm">
            Staff UX Designer & Design Lead — Berlin
          </p>
        </div>
        <div className="flex flex-col items-end gap-2 text-sm">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-neutral-500 hover:text-black transition-colors"
            >
              {l.label} →
            </a>
          ))}
        </div>
      </div>

      {/* Experience */}
      <section className="mb-16">
        <p className="text-xs tracking-widest text-neutral-400 uppercase mb-8">
          Experience
        </p>
        <ul className="space-y-8">
          {experience.map((e) => (
            <li key={e.company} className="flex gap-8">
              <span className="text-neutral-300 text-sm shrink-0 w-32 mt-0.5">
                {e.period}
              </span>
              <div>
                <p className="font-medium tracking-tight mb-0.5">{e.role}</p>
                <p className="text-sm text-neutral-500 mb-2">{e.company}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {e.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Download */}
      <section>
        <p className="text-xs tracking-widest text-neutral-400 uppercase mb-4">
          Full CV
        </p>
        <a
          href="/KatarinaPetrov_Resume.pdf"
          download
          className="text-neutral-500 hover:text-black transition-colors text-sm"
        >
          Download PDF →
        </a>
      </section>
    </div>
  );
}
