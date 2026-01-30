"use client";

import { useState } from "react";
import { ResearchCard, ResearchItem } from "./ResearchCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ResearchCarouselProps {
  items: ResearchItem[];
}

export function ResearchCarousel({ items }: ResearchCarouselProps) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const maxIndex = Math.ceil(items.length / itemsPerPage) - 1;
  const currentPage = Math.floor(currentIndex / itemsPerPage);

  const next = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerPage >= items.length ? 0 : prev + itemsPerPage
    );
  };

  const prev = () => {
    setCurrentIndex((prev) => 
      prev - itemsPerPage < 0 ? (maxIndex * itemsPerPage) : prev - itemsPerPage
    );
  };

  // Handlers for swipe
  const onDragEnd = (event: any, info: any) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      next();
    } else if (info.offset.x > threshold) {
      prev();
    }
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);
  
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden px-1">
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={onDragEnd}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleItems.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full"
              >
                <ResearchCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Controls */}
      {items.length > itemsPerPage && (
        <div className="flex justify-center gap-4 mt-8">
            <button
                onClick={prev}
                className="p-2 rounded-full border border-border bg-background hover:bg-muted transition-colors"
                aria-label="Previous"
            >
                <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
                {[...Array(maxIndex + 1)].map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx * itemsPerPage)}
                        className={cn(
                            "h-2 w-2 rounded-full transition-colors",
                            idx === currentPage ? "bg-primary" : "bg-muted-foreground/30"
                        )}
                        aria-label={`Go to page ${idx + 1}`}
                    />
                ))}
            </div>
            <button
                onClick={next}
                className="p-2 rounded-full border border-border bg-background hover:bg-muted transition-colors"
                aria-label="Next"
            >
                <ChevronRight className="h-5 w-5" />
            </button>
        </div>
      )}
    </div>
  );
}
