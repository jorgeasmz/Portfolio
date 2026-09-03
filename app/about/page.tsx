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
    title: "B.S. Systems Engineering",
    organisation: "Universidad del Valle",
    period: "Aug 2020 - Nov 2025",
    place: "GPA 4.5 / 5.0",
  },
  {
    title: "B.S. Physics",
    organisation: "Universidad del Valle",
    period: "Feb 2023 - expected 2027",
    place: "GPA 4.1 / 5.0",
  },
];

const FOCUS = [
  {
    title: "Machine learning systems in production",
    body: "Most of what decides whether a model is useful happens after it is trained. I work on the parts that carry that weight: what a service costs in memory once it is actually serving, and whether the number it reports still holds months later.",
  },
  {
    title: "Retrieval and grounded generation",
    body: "A language model is only as good as what it was handed, so the interesting work sits in the retrieval and in tying every claim back to the paragraph it came from. Whether that works is a question for a benchmark with relevance judgements, not for a few examples that happen to read well.",
  },
  {
    title: "Quantum key distribution",
    body: "BB84 with vacuum and weak decoy states, which is the subject of my thesis. The protocol is simple enough to write in an afternoon and hard enough to break the moment real hardware is involved, which is where the decoy states earn their place.",
  },
  {
    title: "Model interpretability",
    body: "When a decision costs someone something, scoring well is not enough on its own. What matters then is whether the reasons behind it can be put in front of the person it was made about, which is a different requirement and often a harder one.",
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
    items: ["CI/CD", "Agile", "Scrum", "TDD", "Jira"],
  },
];

const LANGUAGES = "Spanish (native), English (advanced).";

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-3xl py-24 px-6 min-h-[80vh]">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">
        About
      </h1>

      <div className="prose prose-lg prose-invert text-muted-foreground">
        <p>
          I am a software engineer in Cali, Colombia. I finished a degree in Systems
          Engineering at Universidad del Valle in November 2025, having started a second one in
          Physics there two years before finishing the first, which I expect to complete in
          2027.
        </p>
        <p>
          My work is in machine learning systems, and more in what surrounds a model than in
          the model itself: the service that has to hold a memory budget, the features that
          must come out identical whether a pipeline or a live stream computed them, the
          threshold that stops meaning what it meant a few months after it was set. Each
          project here is written up with the measurements behind it.
        </p>
        <p>
          The physics is not a separate track. Two years at CIBioFI went into quantum key
          distribution, from the simulation down to the optical bench and the FPGA that counted
          the photons, and a summer at the University of Lethbridge went into quantum
          algorithms under realistic noise, where cleaning up the results turned into a machine
          learning problem again.
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

        <h2 className="text-foreground mt-12 mb-6">Languages</h2>
        <p className="not-prose text-muted-foreground">{LANGUAGES}</p>
      </div>
    </main>
  );
}
