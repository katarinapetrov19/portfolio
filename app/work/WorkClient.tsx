"use client";

import Link from "next/link";
import { useState } from "react";
import Tag from "@/components/Tag";
import type { ProjectMeta } from "@/lib/mdx";

type Props = {
  projects: ProjectMeta[];
  allTags: string[];
};

export default function WorkClient({ projects, allTags }: Props) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <div className="px-[30px] py-20">
      <h1 className="text-3xl font-medium tracking-tight mb-12">Work</h1>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        <Tag
          label="All"
          active={activeTag === null}
          onClick={() => setActiveTag(null)}
        />
        {allTags.map((tag) => (
          <Tag
            key={tag}
            label={tag}
            active={activeTag === tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
          />
        ))}
      </div>

      {/* Project list */}
      <ul className="divide-y divide-black/[0.06]">
        {filtered.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              className="group flex items-start justify-between py-6 gap-6"
            >
              <div>
                <p className="font-medium tracking-tight group-hover:opacity-60 transition-opacity mb-2">
                  {project.title}
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed mb-3 max-w-lg">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </div>
              <span className="text-neutral-300 text-sm shrink-0 mt-0.5">
                {project.date}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="text-neutral-400 text-sm py-12">
          No projects with this tag yet.
        </p>
      )}
    </div>
  );
}
