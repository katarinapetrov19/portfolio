import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/work");

export type ProjectMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  featured?: boolean;
  url?: string;
  wip?: boolean;
  role?: string;
  type?: string;
  output?: string;
};

export type Project = ProjectMeta & {
  content: string;
};

function readAllProjects(): ProjectMeta[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
      const { data } = matter(raw);
      return { slug, ...data } as ProjectMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllProjects(): ProjectMeta[] {
  return readAllProjects().filter((p) => !p.wip);
}

export function getWipProjects(): ProjectMeta[] {
  return readAllProjects().filter((p) => p.wip);
}

export function getProject(slug: string): Project {
  const file = path.join(contentDir, `${slug}.mdx`);
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { slug, content, ...data } as Project;
}

export function getAllTags(): string[] {
  const projects = getAllProjects();
  const tags = new Set(projects.flatMap((p) => p.tags));
  return Array.from(tags).sort();
}
