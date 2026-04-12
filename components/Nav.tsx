import Link from "next/link";

const links = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
];

const wipLink = { href: "/wip", label: "WIP" };

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="px-[30px] h-14 flex items-start justify-between pt-[20px]">
        <div>
          <Link href="/" className="hover:opacity-60 transition-opacity">
            <span className="block text-[18px] font-medium tracking-tight">Katarina Petrov</span>
            <span className="block text-[14px] font-normal">Staff UX Designer & Design Manager — Berlin</span>
          </Link>
        </div>

        <ul className="flex items-center gap-6">
          <li>
            <Link
              href={wipLink.href}
              className="text-xs text-neutral-300 hover:text-neutral-500 transition-colors"
            >
              {wipLink.label}
            </Link>
          </li>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-neutral-500 hover:text-black transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
