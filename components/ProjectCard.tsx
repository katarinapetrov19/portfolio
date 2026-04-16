"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Tag from "@/components/Tag";
import type { ProjectMeta } from "@/lib/mdx";

const PASSWORD = "Pizzaneverwins";
const STORAGE_KEY = "portfolio_unlocked";

export default function ProjectCard({ project }: { project: ProjectMeta }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      setUnlocked(true);
    }
  }, []);

  const attempt = () => {
    if (input === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
    } else {
      setShake(true);
      setInput("");
      setTimeout(() => setShake(false), 400);
    }
  };

  const isLocked = project.locked && !unlocked;

  return (
    <section className="shrink-0 w-[300px] h-full px-[30px] py-16 flex flex-col snap-start border-l border-black/[0.06]">
      <div>
        {isLocked ? (
          <h2 className="text-2xl font-medium tracking-tight mb-2 opacity-40 cursor-default">
            {project.title}
          </h2>
        ) : (
          <Link href={`/work/${project.slug}`} className="group inline-block mb-2">
            <h2 className="text-2xl font-medium tracking-tight group-hover:opacity-60 transition-opacity">
              {project.title}
            </h2>
          </Link>
        )}
        <p className="text-neutral-500 text-sm leading-relaxed mb-4">{project.summary}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        {project.locked && !unlocked && (
          <div className={shake ? "animate-shake" : ""}>
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && attempt()}
              placeholder="Password"
              className="text-xs border-b border-black/20 focus:border-black outline-none py-1 w-32 bg-transparent placeholder-neutral-300 transition-colors"
            />
          </div>
        )}
      </div>

      <div className="mt-auto">
        {!isLocked && (
          <div className="flex gap-4 mb-6">
            <Link
              href={`/work/${project.slug}`}
              className="text-xs tracking-wide underline underline-offset-2 text-neutral-400 hover:text-black transition-colors"
            >
              Read more →
            </Link>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wide underline underline-offset-2 text-neutral-400 hover:text-black transition-colors"
              >
                View live →
              </a>
            )}
          </div>
        )}
        <span className="text-neutral-300 text-xs">{project.date}</span>
      </div>
    </section>
  );
}
