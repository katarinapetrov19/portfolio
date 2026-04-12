import Link from "next/link";
import { getAllProjects } from "@/lib/mdx";
import Tag from "@/components/Tag";
import HorizontalScroller from "@/components/HorizontalScroller";

export default function Home() {
  const projects = getAllProjects();
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.slug !== featured?.slug);

  return (
    <HorizontalScroller>

      {/* Hero panel */}
      <section className="shrink-0 w-screen h-full px-[30px] pb-16 flex flex-col snap-start" style={{ paddingTop: "104px" }}>
        <h1 className="font-medium tracking-tight mb-6" style={{ color: "#ff453c", fontSize: "250px", lineHeight: "0.624" }}>
          Good design beats bad{" "}
          <span className="inline-flex items-center gap-6 flex-wrap">
            pizza.
            <Link
              href="/work"
              className="inline-flex items-center gap-3 bg-transparent text-[#ff453c] border-[3px] border-[#ff453c] rounded-full font-medium transition-opacity hover:opacity-70"
              style={{ fontSize: "40px", padding: "28px 96px", lineHeight: "1", letterSpacing: "0.08em" }}
            >
              This way <span style={{ fontSize: "44px", lineHeight: "1" }}>→</span>
            </Link>
          </span>
        </h1>
      </section>

      {/* Featured project panel */}
      {featured && (
        <section className="shrink-0 w-[300px] h-full px-[30px] py-16 flex flex-col snap-start border-l border-black/[0.06]">
          {/* Top — aligned to top */}
          <div>
            <Link href={`/work/${featured.slug}`} className="group inline-block mb-2">
              <h2 className="text-2xl font-medium tracking-tight group-hover:opacity-60 transition-opacity">
                {featured.title}
              </h2>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed mb-4">
              {featured.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </div>

          {/* Bottom — pushed to bottom */}
          <div className="mt-auto">
            <div className="flex gap-4 mb-6">
              <Link
                href={`/work/${featured.slug}`}
                className="text-xs tracking-wide underline underline-offset-2 text-neutral-400 hover:text-black transition-colors"
              >
                Read more →
              </Link>
              {featured.url && (
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-wide underline underline-offset-2 text-neutral-400 hover:text-black transition-colors"
                >
                  View live →
                </a>
              )}
            </div>
            <span className="text-neutral-300 text-xs">{featured.date}</span>
          </div>
        </section>
      )}

      {/* One panel per additional project */}
      {rest.map((project) => (
        <section
          key={project.slug}
          className="shrink-0 w-[300px] h-full px-[30px] py-16 flex flex-col snap-start border-l border-black/[0.06]"
        >
          {/* Top — aligned to top */}
          <div>
            <Link href={`/work/${project.slug}`} className="group inline-block mb-2">
              <h2 className="text-2xl font-medium tracking-tight group-hover:opacity-60 transition-opacity">
                {project.title}
              </h2>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed mb-4">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </div>

          {/* Bottom — pushed to bottom */}
          <div className="mt-auto">
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
            <span className="text-neutral-300 text-xs">{project.date}</span>
          </div>
        </section>
      ))}

    </HorizontalScroller>
  );
}
