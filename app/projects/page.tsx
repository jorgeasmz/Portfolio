import { getAllProjects } from "@/lib/mdx";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/animations/Reveal";

export const metadata = {
  title: "Projects | Jorge.dev",
  description: "A comprehensive list of my software engineering and data science projects.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="container mx-auto max-w-5xl py-24 px-6 min-h-screen">
       <Reveal>
        <div className="mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            All Projects
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
                To showcase what I can do, I make available here projects that I have completed.
            </p>
        </div>
      </Reveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1} className="h-full" width="100%">
            <ProjectCard project={project} from="all" />
            </Reveal>
        ))}
      </div>
    </main>
  );
}
