import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Cat } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center justify-center bg-background px-6 text-center py-24">
      <div className="relative mb-8">
         <h1 className="text-[10rem] md:text-[14rem] font-bold text-primary/5 select-none leading-none">404</h1>
         <div className="absolute inset-0 flex items-center justify-center">
            <Cat className="h-24 w-24 text-primary opacity-80" aria-hidden="true" />
         </div>
      </div>
      
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mt-[-2rem] z-10">
        Observation Failed
      </h2>
      <p className="mt-4 max-w-lg text-lg text-muted-foreground z-10">
        The page you are looking for seems to be in a undefined state. The wavefunction has collapsed, and the outcome is null.
      </p>
      
      <div className="mt-10 mb-12">
        <Link href="/">
            <Button size="lg" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Return to Ground State
            </Button>
        </Link>
      </div>
    </div>
  );
}
