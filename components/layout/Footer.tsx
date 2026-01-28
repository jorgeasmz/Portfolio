import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-6">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <Link
              href="/"
              className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
            >
              Jorge
            </Link>
            . The source code is available on{" "}
            <Link
              href="https://github.com/jorgeasmz/Portfolio"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-4">
           {/* Reusing icons for consistency */}
           <Link href="https://github.com/jorgeasmz" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              <SiGithub className="h-5 w-5" />
           </Link>
           <Link href="https://www.linkedin.com/in/jorgeasmz/" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              <SiLinkedin className="h-5 w-5" />
           </Link>
        </div>
      </div>
    </footer>
  );
}
