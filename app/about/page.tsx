
import { TechBadge } from "@/components/ui/TechBadge";
import { SkillRadar } from "@/components/ui/visualizations/SkillRadar";
import { ActivityGraph } from "@/components/ui/visualizations/ActivityGraph";

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-3xl py-24 px-6 min-h-[80vh]">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">
        About Me
      </h1>
      
      <div className="prose prose-lg dark:prose-invert text-muted-foreground">
        <p>
          My journey into technology hasn't been a straight line, but rather a superposition of two passions: 
          <strong> Physics</strong> and <strong>Computer Science</strong>.
        </p>
        <p>
          I graduated as a Systems Engineer in November 2025. However, I've been also pursuing a second degree in Physics since January 2023, driven by a desire to understand the way the universe works at its most fundamental level.
        </p>
        <p>
          My main goal is to merge these two fields either theoretically or experimentally through research in areas like <strong>Quantum Computing</strong> and <strong>Quantum Information</strong>. Nonetheless, I also enjoy applying my skills in building scalable software solutions, whether it's web applications or data pipelines.
        </p>
        
        <div className="flex justify-center w-full md:w-4/5 mx-auto">
           <SkillRadar />
        </div>

        <h2 className="text-foreground mt-12 mb-6">Experience & Education</h2>
        <ul className="list-none pl-0 space-y-8">
            <li className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" />
                <h3 className="text-lg font-semibold text-foreground">Globalink Research Intern</h3>
                <p className="text-muted-foreground font-medium">Mitacs, University of Lethbridge</p>
                <div className="text-sm text-muted-foreground mb-3 flex flex-wrap gap-x-4">
                    <span>Jun 2025 - Sep 2025</span>
                    <span>•</span>
                    <span>Lethbridge, Canada</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
                    <li>Research work entitled "Quantum Accelerated Approximation Algorithms".</li>
                    <li>Understanding and implementation of quantum algorithms such as SWAP Test and VQLS.</li>
                    <li>Simulation of quantum algorithms on local devices to solve computational problems.</li>
                    <li>Use of noise models to simulate quantum algorithms under realistic conditions.</li>
                    <li>Implementation of Machine Learning models such as Neural Networks and Support Vector Machines to denoise data.</li>
                </ul>
            </li>

            <li className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" />
                <h3 className="text-lg font-semibold text-foreground">Research Assistant</h3>
                <p className="text-muted-foreground font-medium">CIBioFI, Universidad del Valle</p>
                <div className="text-sm text-muted-foreground mb-3 flex flex-wrap gap-x-4">
                    <span>Aug 2023 - May 2025</span>
                    <span>•</span>
                    <span>Cali, Colombia</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
                    <li>Research work entitled "Use of Decoy States for Increasing Security in a Quantum Key Distribution Protocol".</li>
                    <li>Programming an FPGA as an electronic device for photon counting in an optical setup.</li>
                    <li>Development of a computational simulation of the BB84 QKD protocol.</li>
                    <li>Development of a computational simulation of the Decoy States BB84 QKD protocol.</li>
                    <li>Implementation of the optical setup for a QKD system in the Optics and Quantum Information Laboratory.</li>
                </ul>
            </li>

            <li className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" />
                <h3 className="text-lg font-semibold text-foreground">B.Sc. Systems Engineering</h3>
                <p className="text-sm text-muted-foreground">Graduated Nov 2025</p>
            </li>
            
             <li className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" />
                <h3 className="text-lg font-semibold text-foreground">B.Sc. Physics</h3>
                <p className="text-sm text-muted-foreground">In Progress</p>
            </li>
        </ul>

        <div className="mt-12">
            <ActivityGraph />
        </div>

        <h2 className="text-foreground mt-12 mb-6">Interests</h2>
        <p>
            Beyond the IDE and the Lab, I am deeply interested in:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none pl-0 mt-4">
             <li className="flex items-center gap-2">
                ⚛️ <span>Quantum Computing</span>
            </li>
             <li className="flex items-center gap-2">
                🔭 <span>Algorithms Analysis & Design</span>
            </li>
             <li className="flex items-center gap-2">
                🧠 <span>Neural Network Interpretability</span>
            </li>
             <li className="flex items-center gap-2">
                📚 <span>Technical Research</span>
            </li>
        </ul>

        <h2 className="text-foreground mt-12 mb-6">Technical Skills</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge name="PHP" />
              <TechBadge name="JavaScript" />
              <TechBadge name="C/C++" />
              <TechBadge name="C#" />
              <TechBadge name="Java" />
              <TechBadge name="Python" />
              <TechBadge name="Racket" />
              <TechBadge name="MiniZinc" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Web Development</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge name="AngularJS" />
              <TechBadge name="React" />
              <TechBadge name="Express" />
              <TechBadge name="Django" />
              <TechBadge name="FastAPI" />
              <TechBadge name=".NET" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Databases</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge name="MySQL" />
              <TechBadge name="PostgreSQL" />
              <TechBadge name="SQLite" />
              <TechBadge name="MariaDB" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Desktop GUI</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge name="OpenGL" />
              <TechBadge name="GTK" />
              <TechBadge name="QT" />
              <TechBadge name="Swing" />
              <TechBadge name="Tkinter" />
              <TechBadge name="Pygame" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Data Science</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge name="Numpy" />
              <TechBadge name="Scipy" />
              <TechBadge name="Pandas" />
              <TechBadge name="Matplotlib" />
              <TechBadge name="Seaborn" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Machine Learning & NLP</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge name="scikit-learn" />
              <TechBadge name="TensorFlow" />
              <TechBadge name="Pytorch" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Quantum Computing</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge name="Qiskit" />
              <TechBadge name="IBM Quantum" />
              <TechBadge name="Cirq" />
              <TechBadge name="PennyLane" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Tools</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge name="git" />
              <TechBadge name="Docker" />
              <TechBadge name="kubernetes" />
              <TechBadge name="Jira" />
              <TechBadge name="Linux" />
            </div>
          </div>
        </div>

        <h2 className="text-foreground mt-12 mb-6">Methodologies</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Software Development</h3>
            <div className="flex flex-wrap gap-2">
               <TechBadge name="CI/CD" />
               <TechBadge name="Agile" />
               <TechBadge name="Scrum" />
               <TechBadge name="DevOps" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
