import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { ProjectMetadata } from "@/lib/mdx";
import { TechBadge } from "./TechBadge";

interface ProjectCardProps {
  project: ProjectMetadata;
  from?: string;
}

export function ProjectCard({ project, from }: ProjectCardProps) {
  const href = `/projects/${project.slug}${from ? `?from=${from}` : ''}`;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground transition-all hover:border-primary/50 hover:shadow-lg">

      <div className="relative h-48 w-full overflow-hidden bg-muted/20 text-muted-foreground">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            [Image: {project.image}]
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
            <Link href={href} className="focus:outline-none">
              <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </Link>
          
          <div className="flex gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors z-20"
                aria-label="View Source Code"
              >
                <SiGithub className="h-5 w-5" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors z-20"
                aria-label="View Live Demo"
              >
                <ArrowUpRight className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border">
          {project.techStack && project.techStack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>
      
      {/* Full card clickable link layer */}
      <Link 
        href={href} 
        className="absolute inset-0 z-10"
        aria-hidden="true"
      />
    </div>
  );
}