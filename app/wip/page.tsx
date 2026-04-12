import Link from "next/link";
import { getWipProjects } from "@/lib/mdx";
import Tag from "@/components/Tag";

export default function WipPage() {
  const projects = getWipProjects();

  return (
    <div className="px-[30px] py-20">
      <h1 className="text-3xl font-medium tracking-tight mb-3">Work in progress</h1>
      <p className="text-sm text-neutral-400 mb-12">These are still being written up. Come back later.</p>

      <ul className="divide-y divide-black/[0.06]">
        {projects.map((project) => (
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
    </div>
  );
}
