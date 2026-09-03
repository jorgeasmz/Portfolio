import { TechBadge } from "@/components/ui/TechBadge";

type Role = {
  title: string;
  organisation?: string;
  period?: string;
  place?: string;
  points?: string[];
};

const HISTORY: Role[] = [
  {
    title: "Globalink Research Intern",
    organisation: "Mitacs, University of Lethbridge",
    period: "Jun 2025 - Sep 2025",
    place: "Lethbridge, Canada",
    points: [
      "Research work entitled “Quantum Accelerated Approximation Algorithms”.",
      "Implementation and simulation of quantum algorithms including the SWAP Test and VQLS.",
      "Noise models to run those algorithms under realistic hardware conditions.",
      "Neural networks and support vector machines applied to denoising the resulting data.",
    ],
  },
  {
    title: "Research Assistant",
    organisation: "CIBioFI, Universidad del Valle",
    period: "Aug 2023 - May 2025",
    place: "Cali, Colombia",
    points: [
      "Research work entitled “Use of Decoy States for Increasing Security in a Quantum Key Distribution Protocol”.",
      "FPGA programmed as the photon counting electronics of an optical setup.",
      "Simulation of the BB84 protocol, and of BB84 with vacuum and weak decoy states.",
      "Implementation of the optical setup in the Optics and Quantum Information Laboratory.",
    ],
  },
  {
    title: "B.Sc. Systems Engineering",
    organisation: "Universidad del Valle",
    period: "Graduated Nov 2025",
  },
  {
    title: "B.Sc. Physics",
    organisation: "Universidad del Valle",
    period: "In progress since Jan 2023",
  },
];

const FOCUS = [
  {
    title: "Machine learning systems in production",
    body: "Quantisation and memory budgets, feature computation that has to agree between a batch pipeline and a live one, and what becomes of an operating point months after it was calibrated.",
  },
  {
    title: "Retrieval and grounded generation",
    body: "Hybrid retrieval with cross-encoder reranking, citations resolved back to the paragraph they came from, and evaluation against relevance judgements rather than against examples that happen to work.",
  },
  {
    title: "Quantum key distribution",
    body: "BB84 with vacuum and weak decoy states, simulated in Qiskit and implemented on an optical bench, which is the subject of my thesis.",
  },
  {
    title: "Model interpretability",
    body: "Per-feature attribution on decisions that carry a cost, and the distance between a model that scores well and one whose reasons can be shown to the person it decided about.",
  },
];

const SKILLS: { heading: string; items: string[] }[] = [
  {
    heading: "Machine learning and data",
    items: ["Python", "scikit-learn", "PyTorch", "Transformers", "pandas", "NumPy", "SciPy", "SQL"],
  },
  {
    heading: "Services and infrastructure",
    items: ["FastAPI", "PostgreSQL", "Redis", "Docker", "ONNX Runtime", "MLflow", "GitHub", "Linux"],
  },
  {
    heading: "Web",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Django", "Express"],
  },
  {
    heading: "Quantum computing",
    items: ["Qiskit", "PennyLane", "Cirq", "IBM Quantum"],
  },
  {
    heading: "Academic exposure",
    items: ["C/C++", "C#", "Java", "Racket", "MiniZinc", "OpenGL", "QT", "Pygame"],
  },
  {
    heading: "Practices",
    items: ["CI/CD", "Agile", "Scrum", "Jira"],
  },
];

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-3xl py-24 px-6 min-h-[80vh]">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">
        About
      </h1>

      <div className="prose prose-lg prose-invert text-muted-foreground">
        <p>
          I graduated as a Systems Engineer in November 2025 and have been reading Physics
          since January 2023. The two degrees run in parallel rather than in sequence, and
          most of what I build sits where they meet.
        </p>
        <p>
          On the engineering side I build machine learning systems and operate them: retrieval
          pipelines evaluated against judged benchmarks, streaming detectors that hold a fixed
          memory budget, and the services that put both in front of a reader. On the physics
          side I work on quantum key distribution, in simulation and on an optical bench.
        </p>
        <p>
          Every project listed here states how it was measured, including the figures that are
          worse than the headline suggests.
        </p>

        <h2 className="text-foreground mt-12 mb-6">Experience and education</h2>
        <ul className="list-none pl-0 space-y-8">
          {HISTORY.map((role) => (
            <li key={role.title} className="relative pl-6 border-l-2 border-primary/30">
              <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" />
              <h3 className="text-lg font-semibold text-foreground">{role.title}</h3>
              {role.organisation && (
                <p className="text-muted-foreground font-medium">{role.organisation}</p>
              )}
              <div className="text-sm text-muted-foreground mb-3 flex flex-wrap gap-x-4">
                {role.period && <span>{role.period}</span>}
                {role.place && <span>&bull;</span>}
                {role.place && <span>{role.place}</span>}
              </div>
              {role.points && (
                <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <h2 className="text-foreground mt-12 mb-6">Current focus</h2>
        <div className="space-y-6 not-prose">
          {FOCUS.map((item) => (
            <div key={item.title} className="border-l-2 border-border pl-5">
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>

        <h2 className="text-foreground mt-12 mb-6">Technical skills</h2>
        <div className="space-y-6 not-prose">
          {SKILLS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-3">
                {group.heading}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TechBadge key={item} name={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm">
          The last group is coursework rather than delivered work, and is listed as such.
        </p>
      </div>
    </main>
  );
}
