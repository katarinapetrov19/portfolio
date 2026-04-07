import { getAllProjects, getProject } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Tag from "@/components/Tag";
import Link from "next/link";
import { notFound } from "next/navigation";
import FullImage from "@/components/mdx/FullImage";
import ImagePair from "@/components/mdx/ImagePair";
import Video from "@/components/mdx/Video";
import Placeholder from "@/components/mdx/Placeholder";

const components = { FullImage, ImagePair, Video, Placeholder };

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  let project;
  try {
    project = getProject(slug);
  } catch {
    notFound();
  }

  return (
    <div className="pb-24">
      {/* Header — padded */}
      <div className="px-[230px] pt-16 pb-12">
        <Link
          href="/"
          className="text-xs tracking-widest text-neutral-400 uppercase hover:text-black transition-colors mb-16 inline-block"
        >
          ← Work
        </Link>

        {/* Two-column title + meta */}
        <div className="flex gap-16">
          {/* Left — title, 50% */}
          <div className="w-1/2">
            <h1 className="text-3xl font-medium tracking-tight leading-tight mb-3">
              {project.title}
            </h1>
            <div className="flex items-center gap-4">
              <p className="text-xs text-neutral-300">{project.date}</p>
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
          </div>

          {/* Gap handled by gap-16 */}

          {/* Right — summary, tags, date */}
          <div className="w-1/2 flex flex-col justify-start">
            <p className="text-neutral-500 leading-relaxed mb-6">{project.summary}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="border-black/10 mb-12" />

      {/* Article body — text padded via CSS, media breaks out */}
      <article className="prose px-[230px]">
        <MDXRemote source={project.content} components={components} />
      </article>
    </div>
  );
}
