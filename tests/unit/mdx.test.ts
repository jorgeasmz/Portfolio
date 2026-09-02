import { describe, expect, it } from "vitest";

import {
  compareProjects,
  getAllProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getProjectSlugs,
  type ProjectMetadata,
} from "@/lib/mdx";

function project(overrides: Partial<ProjectMetadata>): ProjectMetadata {
  return {
    title: "t",
    summary: "s",
    image: "/i.png",
    techStack: ["Python"],
    date: "2024-01-01",
    featured: false,
    slug: "slug",
    ...overrides,
  };
}

describe("compareProjects", () => {
  it("puts a lower order first", () => {
    const first = project({ order: 1, slug: "a" });
    const second = project({ order: 2, slug: "b" });

    expect([second, first].sort(compareProjects).map((p) => p.slug)).toEqual([
      "a",
      "b",
    ]);
  });

  it("ranks ordered entries above unordered ones", () => {
    const ordered = project({ order: 9, slug: "ordered", date: "2000-01-01" });
    const undated = project({ slug: "unordered", date: "2030-01-01" });

    expect([undated, ordered].sort(compareProjects).map((p) => p.slug)).toEqual([
      "ordered",
      "unordered",
    ]);
  });

  it("falls back to newest first when order ties", () => {
    const older = project({ order: 1, slug: "older", date: "2023-01-01" });
    const newer = project({ order: 1, slug: "newer", date: "2025-01-01" });

    expect([older, newer].sort(compareProjects).map((p) => p.slug)).toEqual([
      "newer",
      "older",
    ]);
  });
});

describe("the project content directory", () => {
  it("exposes slugs without the extension", () => {
    const slugs = getProjectSlugs();

    expect(slugs.length).toBeGreaterThan(0);
    expect(slugs.every((slug) => !slug.endsWith(".mdx"))).toBe(true);
  });

  it("parses every file, so malformed front matter fails the build", () => {
    // getProjectBySlug throws on an invalid schema; reaching the end is the assertion.
    for (const slug of getProjectSlugs()) {
      const { metadata, content } = getProjectBySlug(slug);

      expect(metadata.slug).toBe(slug);
      expect(metadata.title.length).toBeGreaterThan(0);
      expect(content.trim().length).toBeGreaterThan(0);
    }
  });

  it("rejects a slug that does not exist", () => {
    expect(() => getProjectBySlug("no-such-project")).toThrow();
  });

  it("leads with the retrieval work", () => {
    expect(getAllProjects()[0].slug).toBe("research-copilot");
  });

  it("returns only featured projects, capped", () => {
    const featured = getFeaturedProjects(2);

    expect(featured).toHaveLength(2);
    expect(featured.every((p) => p.featured)).toBe(true);
  });

  it("gives every project a working demo or repository link", () => {
    for (const p of getAllProjects()) {
      expect(p.demoUrl ?? p.repoUrl).toBeDefined();
    }
  });
});
