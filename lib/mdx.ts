import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";

/**
 * Front matter contract for content/projects/*.mdx.
 *
 * Parsing rather than casting: a missing or misspelled field used to surface as
 * `undefined` rendered into the page, which is a defect you only notice by
 * looking. Now it fails the build and names the file.
 */
const projectSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  image: z.string().min(1),
  techStack: z.array(z.string()).min(1),
  demoUrl: z.url().optional(),
  repoUrl: z.url().optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "expected YYYY-MM-DD"),
  /** Shown on the landing page. */
  featured: z.boolean().default(false),
  /** Explicit position; lower comes first. Falls back to date when absent. */
  order: z.number().int().positive().optional(),
});

export type ProjectMetadata = z.infer<typeof projectSchema> & { slug: string };

const postsDirectory = path.join(process.cwd(), "content/projects");

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));

  const parsed = projectSchema.safeParse(data);
  if (!parsed.success) {
    const details = parsed.error.issues
      .map((issue) => `  ${issue.path.join(".") || "(root)"}: ${issue.message}`)
      .join("\n");
    throw new Error(
      `Invalid front matter in content/projects/${realSlug}.mdx\n${details}`
    );
  }

  return { metadata: { ...parsed.data, slug: realSlug }, content };
}

/** Explicit `order` wins; ties and unordered entries fall back to newest first. */
export function compareProjects(a: ProjectMetadata, b: ProjectMetadata): number {
  const left = a.order ?? Number.MAX_SAFE_INTEGER;
  const right = b.order ?? Number.MAX_SAFE_INTEGER;
  if (left !== right) return left - right;
  return b.date.localeCompare(a.date);
}

export function getAllProjects(): ProjectMetadata[] {
  return getProjectSlugs()
    .map((slug) => getProjectBySlug(slug).metadata)
    .sort(compareProjects);
}

export function getFeaturedProjects(limit = 2): ProjectMetadata[] {
  return getAllProjects()
    .filter((project) => project.featured)
    .slice(0, limit);
}
