"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Suspense } from "react";

function BackLinkContent() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  
  const href = from === "all" ? "/projects" : "/#projects";
  const label = from === "all" ? "Back to All Projects" : "Back to Projects";

  return (
    <Link 
      href={href} 
      className="group mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
    >
      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
      {label}
    </Link>
  );
}

export function ProjectBackLink() {
  return (
    <Suspense fallback={
       <div className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
       </div>
    }>
      <BackLinkContent />
    </Suspense>
  );
}
