import { getAllProjects } from "@/lib/mdx";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ResearchItem } from "@/components/ui/ResearchCard";
import { ResearchCarousel } from "@/components/ui/ResearchCarousel";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { FadeIn } from "@/components/animations/FadeIn";
import { QuantumBackground } from "@/components/animations/QuantumBackground";
import Image from "next/image";

export default function Home() {
  const projects = getAllProjects().slice(0, 2); // Only show 2 featured projects

  const researchItems: ResearchItem[] = [
    {
      title: "Qiskit Fall Fest 2025: Hackathon Winner & Participation",
      type: "Certification",
      institution: "IBM Quantum",
      date: "Nov 2025",
      description: "Secured First Place in the Hackathon by developing a quantum simulation of two-qubit Ising dynamics in Qiskit, implementing exact and Trotterized time evolution and analyzing amplitudes, fidelity, and entanglement.",
      tech: ["Python", "Qiskit", "Quantum Computing", "Problem Solving"],
      links: [
        { label: "Winner Certificate", url: "/qiskit-winner.pdf" },
        { label: "Participation Certificate", url: "/qiskit-participation.pdf" }
      ]
    },
    {
      title: "Mitacs GRI Internship: Quantum Accelerated Approximation Algorithms",
      type: "Research",
      institution: "University of Lethbridge",
      date: "Sep 2025",
      description: "Research internship focused on the implementation and simulation of quantum algorithms like SWAP Test and VQLS. Developed noise models to test algorithms under realistic conditions and applied Neural Networks for data denoising.",
      tech: ["Python", "Quantum Computing", "Machine Learning", "Simulation"],
      link: "/mitacs-completion.pdf"
    },
    {
      title: "Use of Decoy States as a Method for Increasing Security in a Quantum Key Distribution Protocol.",
      type: "Thesis",
      institution: "Universidad del Valle",
      date: "Jun 2025",
      description: "Implemented the BB84 QKD protocol with Vacuum+Weak decoy states using Qiskit simulations and a physical optical experiment. Analyzed photon-number yields to detect eavesdropping attacks and established a reference for implementing secure quantum communications under resource-constrained hardware conditions.",
      tech: ["Python", "Qiskit", "Streamlit", "Simulation", "Experimental Physics"],
      link: "/thesis.pdf"
    },
    {
      title: "QTECNOS: Special Mention for Outstanding Oral Presentation",
      type: "Certification",
      institution: "2nd International Nano & Quantum Workshop",
      date: "November 2024",
      description: "Awarded Special Mention for Outstanding Oral Presentation for a presentation on enhancing BB84 Quantum Key Distribution security using decoy states, supported by computational simulation.",
      tech: ["Quantum Key Distribution", "Quantum Cryptography", "Research Presentation", "Scientific Communication"],
      link: "/qtecnos-award.pdf"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col justify-center border-b border-border/40 py-20 lg:py-0 overflow-hidden">
        <QuantumBackground />
        <div className="mx-auto max-w-6xl px-6 lg:px-8 z-10">
           <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:justify-between">
            {/* Text Content */}
            <div className="max-w-2xl lg:w-1/2">
                <Reveal>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                    Software Engineer & <span className="text-primary">Researcher</span>
                    </h1>
                </Reveal>
                <Reveal delay={0.4}>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    A multidisciplinary engineer with a dual background in Computer Science and Physics. I focus on designing scalable software architectures and data-driven solutions, applying engineering expertise to challenges in both industry and scientific research.
                    </p>
                </Reveal>
                <Reveal delay={0.6}>
                    <div className="mt-10 flex items-center gap-x-6">
                    <Link
                        href="#projects"
                        className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                    >
                        View Work
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                        About me <ArrowRight className="h-4 w-4" />
                    </Link>
                    </div>
                </Reveal>
            </div>
            
            {/* Avatar Section */}
             <div className="flex justify-center lg:w-1/2 lg:justify-end">
                <FadeIn delay={0.5}>
                    <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 flex items-center justify-center">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-[80px] opacity-50 animate-pulse" />
                        
                        {/* Image Container */}
                        <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-background shadow-2xl z-10">
                            <Image 
                                src="/images/avatar.jpg" 
                                alt="Jorge's Avatar"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </FadeIn>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
             <ChevronDown className="h-6 w-6" />
        </div>
      </section>

      {/* Projects Section - Needs scrolling to reach */}
      <section id="projects" className="mx-auto max-w-5xl space-y-16 py-32 px-6 lg:px-8">
        <Reveal>
            <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Featured Projects
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
                A selection of implementations showcasing end-to-end Machine Learning pipelines.
            </p>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
             <Reveal key={project.slug} delay={index * 0.1} className="h-full" width="100%">
                <ProjectCard project={project} />
             </Reveal>
          ))}
        </div>

        <Reveal>
             <div className="flex justify-center mt-12">
                <Link
                    href="/projects"
                    className="group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10 hover:shadow-md transition-all"
                >
                    View All Projects 
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
             </div>
        </Reveal>
      </section>

      {/* Research & Science Section */}
      <section className="mx-auto max-w-5xl space-y-16 py-24 px-6 lg:px-8 bg-muted/20">
         <Reveal>
            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Research & Academia
                </h2>
                <p className="max-w-2xl text-lg text-muted-foreground">
                    My path toward the convergence of Physics and Computer Science through Quantum Information and Technologies.
                </p>
            </div>
         </Reveal>

         <Reveal>
            <ResearchCarousel items={researchItems} />
         </Reveal>
      </section>
    </main>
  );
}