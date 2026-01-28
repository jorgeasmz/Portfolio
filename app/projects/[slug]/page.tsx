import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ExternalLink } from "lucide-react";
import { SiGithub, SiStreamlit } from "react-icons/si";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { TechBadge } from "@/components/ui/TechBadge";
import { ProjectBackLink } from "@/components/ui/ProjectBackLink";

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {

  const { slug } = await params;
  
  const { metadata, content } = getProjectBySlug(slug);

  return (
    <article className="min-h-screen py-12 md:py-24 bg-background">
      <div className="mx-auto max-w-3xl px-6">
        {/* Back Link */}
        <ProjectBackLink />

        {/* Header Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {metadata.title}
          </h1>
          
          <div className="flex flex-wrap gap-3">
            {(metadata.techStack || []).map((tech) => (
              <TechBadge 
                key={tech} 
                name={tech} 
                className="text-sm px-3 py-1 bg-primary/10 text-primary ring-primary/20" 
              />
            ))}
          </div>

          <p className="text-xl leading-relaxed text-muted-foreground">
            {metadata.summary}
          </p>

          <div className="flex gap-4 pt-4">
            {metadata.demoUrl && (
              <a
                href={metadata.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {metadata.demoUrl.includes('streamlit') ? (
                  <>Live Demo <SiStreamlit className="h-4 w-4" /></>
                ) : (
                  <>Live Demo <ExternalLink className="h-4 w-4" /></>
                )}
              </a>
            )}
            {metadata.repoUrl && (
              <a
                href={metadata.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <SiGithub className="h-4 w-4" />
                View Code
              </a>
            )}
          </div>
        </div>

        {/* The Markdown Content */}
        <div className="prose prose-lg dark:prose-invert mt-16 max-w-none prose-strong:text-primary">
           <MDXRemote source={content} />
        </div>
      </div>
    </article>
  );
}