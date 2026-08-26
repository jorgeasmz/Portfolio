import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ProjectCard } from "@/components/ui/ProjectCard";
import type { ProjectMetadata } from "@/lib/mdx";

// next/image needs the framework runtime; the card only cares that it renders.
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img {...(props as { src: string; alt: string })} />
  ),
}));

const project: ProjectMetadata = {
  title: "BB84 Quantum Key Distribution Simulator",
  summary: "An interactive simulation of the BB84 protocol.",
  image: "/images/projects/bb84-bg.png",
  techStack: ["Python", "Qiskit"],
  demoUrl: "https://example.com/demo",
  repoUrl: "https://example.com/repo",
  date: "2025-06-01",
  featured: true,
  order: 1,
  slug: "bb84-simulation",
};

describe("ProjectCard", () => {
  it("shows the title, summary and stack", () => {
    render(<ProjectCard project={project} />);

    expect(screen.getByText(project.title)).toBeInTheDocument();
    expect(screen.getByText(project.summary)).toBeInTheDocument();
    expect(screen.getByText("Qiskit")).toBeInTheDocument();
  });

  it("links to the project page", () => {
    render(<ProjectCard project={project} />);

    const links = screen.getAllByRole("link", { hidden: true });
    expect(
      links.some((link) => link.getAttribute("href")?.includes("/projects/bb84-simulation"))
    ).toBe(true);
  });

  it("keeps the origin out of external links", () => {
    render(<ProjectCard project={project} />);

    const demo = screen.getByLabelText("View Live Demo");
    expect(demo).toHaveAttribute("target", "_blank");
    expect(demo).toHaveAttribute("rel", "noreferrer");
  });

  it("carries the from parameter when given one", () => {
    render(<ProjectCard project={project} from="all" />);

    const links = screen.getAllByRole("link", { hidden: true });
    expect(links.some((link) => link.getAttribute("href")?.includes("?from=all"))).toBe(true);
  });

  it("omits the demo icon when a project has no demo", () => {
    render(<ProjectCard project={{ ...project, demoUrl: undefined }} />);

    expect(screen.queryByLabelText("View Live Demo")).toBeNull();
  });
});
