import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectMetadata {
  title: string;
  summary: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  date: string;
  slug: string;
}

const postsDirectory = path.join(process.cwd(), "content/projects");

export function getProjectSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  
  const { data, content } = matter(fileContents);

  return {
    metadata: { ...data, slug: realSlug } as ProjectMetadata,
    content,
  };
}

export function getAllProjects(): ProjectMetadata[] {
  const slugs = getProjectSlugs();
  const projects = slugs.map((slug) => getProjectBySlug(slug).metadata);
  
  // Sort projects by date (newest first)
  return projects.sort((a, b) => (a.date > b.date ? -1 : 1));
}