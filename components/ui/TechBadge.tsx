import { Badge } from "./Badge";
import { 
  SiPython, 
  SiScikitlearn, 
  SiStreamlit, 
  SiPandas, 
  SiNumpy,
  SiTensorflow,
  SiPytorch,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiKubernetes,
  SiHuggingface,
  SiFastapi,
  SiPhp,
  SiCplusplus,
  SiAngular,
  SiExpress,
  SiDjango,
  SiDotnet,
  SiMysql,
  SiSqlite,
  SiMariadb,
  SiOpengl,
  SiQt,
  SiScipy,
  SiQiskit,
  SiLinux,
  SiJira
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { IconType } from "react-icons";
import { LucideIcon, Code2 } from "lucide-react";

// Normalize keys to lowercase for easier matching
const iconMap: Record<string, IconType | LucideIcon> = {
  
  // Languages
  "python": SiPython,
  "php": SiPhp,
  "javascript": SiJavascript,
  "c/c++": SiCplusplus,
  "c++": SiCplusplus,
  "c": SiCplusplus, // Fallback
  "c#": TbBrandCSharp,
  "java": FaJava,
  "racket": Code2, // No specific icon
  "minizinc": Code2, // No specific icon

  // Web
  "angularjs": SiAngular,
  "angular": SiAngular,
  "react": SiReact,
  "express": SiExpress,
  "django": SiDjango,
  "fastapi": SiFastapi,
  ".net": SiDotnet,
  "dotnet": SiDotnet,

  // Databases
  "mysql": SiMysql,
  "postgresql": SiPostgresql,
  "sqlite": SiSqlite,
  "mariadb": SiMariadb,
  "mongodb": SiMongodb,

  // Desktop GUI
  "opengl": SiOpengl,
  "gtk": SiCplusplus, // C/C++ library fallback
  "qt": SiQt,
  "swing": FaJava, // Java library fallback
  "tkinter": SiPython, // Python library fallback
  "pygame": SiPython, // Python library fallback

  // Data Science
  "numpy": SiNumpy,
  "scipy": SiScipy,
  "pandas": SiPandas,
  "matplotlib": SiPython, // Python library fallback
  "seaborn": SiPython, // Python library fallback

  // ML
  "scikit-learn": SiScikitlearn,
  "sklearn": SiScikitlearn,
  "tensorflow": SiTensorflow,
  "pytorch": SiPytorch,
  "huggingface": SiHuggingface,
  
  // Quantum
  "qiskit": SiQiskit,
  "ibm quantum": SiQiskit, // Fallback to Qiskit as there is no IBM icon
  "cirq": SiPython, // Python library
  "pennylane": SiPython, // Python library

  // Tools
  "git": SiGit,
  "github": SiGithub,
  "docker": SiDocker,
  "kubernetes": SiKubernetes,
  "jira": SiJira,
  "linux": SiLinux,
  
  // Other mapping from previous file
  "streamlit": SiStreamlit,
  "next.js": SiNextdotjs,
  "nextjs": SiNextdotjs,
  "tailwind": SiTailwindcss,
  "tailwindcss": SiTailwindcss,
  "typescript": SiTypescript,
  "transformers": SiHuggingface,
  "joblib": SiPython,
  "prophet": SiPython,
  "plotly": SiPython,
};

interface TechBadgeProps {
  name: string;
  className?: string;
}

export function TechBadge({ name, className }: TechBadgeProps) {
  const normalized = name.toLowerCase();
  
  // Direct match or fallback to generic Code icon
  const Icon = iconMap[normalized] || iconMap[normalized.replace(/\s+/g, '')];
  
  return (
    <Badge className={className}>
      {Icon && (
        <span className="mr-1.5 flex items-center">
          <Icon className="h-3.5 w-3.5" />
        </span>
      )}
      {name}
    </Badge>
  );
}
