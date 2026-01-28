"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight">
              Jorge<span className="text-primary">.dev</span>
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === item.href ? "text-foreground" : "text-foreground/60"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
             {/* Desktop Socials */}
            <div className="hidden md:flex items-center gap-4 border-r border-border/40 pr-6">
                 <ThemeToggle />
                <Link
                href="https://github.com/jorgeasmz"
                target="_blank"
                rel="noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                >
                <SiGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
                </Link>
                <Link
                href="https://www.linkedin.com/in/jorgeasmz/" 
                target="_blank"
                rel="noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                >
                <SiLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                href="mailto:jorgeeasmz@gmail.com" 
                className="text-foreground/60 hover:text-foreground transition-colors"
                >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Contact</span>
                </Link>
            </div>
            
            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-4">
               <ThemeToggle />
               <button
                  className="p-2 text-foreground/60 hover:text-foreground"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
              >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border/40 bg-background"
          >
            <div className="flex flex-col space-y-4 px-6 py-6">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                     pathname === item.href ? "text-foreground" : "text-foreground/60"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex gap-4 pt-4 border-t border-border/40">
                  <Link
                    href="https://github.com/jorgeasmz"
                    target="_blank"
                    className="text-foreground/60 hover:text-foreground transition-colors"
                    >
                    <SiGithub className="h-5 w-5" />
                    </Link>
                    <Link
                    href="https://www.linkedin.com/in/jorgeasmz/" 
                    target="_blank"
                    className="text-foreground/60 hover:text-foreground transition-colors"
                    >
                    <SiLinkedin className="h-5 w-5" />
                    </Link>
                    <Link
                    href="mailto:jorgeeasmz@gmail.com" 
                    className="text-foreground/60 hover:text-foreground transition-colors"
                    >
                    <Mail className="h-5 w-5" />
                    </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
