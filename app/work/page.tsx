import { getAllProjects, getAllTags } from "@/lib/mdx";
import WorkClient from "./WorkClient";

export default function WorkPage() {
  const projects = getAllProjects();
  const allTags = getAllTags();
  return <WorkClient projects={projects} allTags={allTags} />;
}
