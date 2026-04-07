"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
];

const bio = "Staff UX Designer and Design Manager. Curious by default, never intimidated by a hard problem, and genuinely excited about new tools and ways of working. Boredom is my biggest enemy — which means I tend to stay sharp.";

export default function Nav() {
  const [hovered, setHovered] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <nav className="px-[30px] h-14 flex items-start justify-between pt-[20px]">
        <div
          className="relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Link href="/" className="hover:opacity-60 transition-opacity">
            <span className="block text-[18px] font-medium tracking-tight">Katarina Petrov</span>
            <span className="block text-[14px] font-normal">Staff UX Designer & Design Manager — Berlin</span>
          </Link>

          {/* Bio tooltip */}
          <div
            className={`absolute top-full left-0 mt-3 max-w-sm text-[13px] text-neutral-500 leading-relaxed transition-all duration-200 ${
              hovered ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
            }`}
          >
            {bio}
          </div>
        </div>

        <ul className="flex items-center gap-6">
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
