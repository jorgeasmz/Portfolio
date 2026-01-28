"use client";

import { useState, useRef, useEffect } from "react";
import { Badge } from "./Badge";
import { ExternalLink, FileText, Award, Atom, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ResearchItem {
    title: string;
    type: "Thesis" | "Certification" | "Paper" | "Research";
    description: string;
    date: string;
    tech?: string[];
    link?: string;
    links?: { label: string; url: string }[];
    institution?: string;
}

export function ResearchCard({ item }: { item: ResearchItem }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTruncated, setIsTruncated] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);
    const Icon = item.type === "Certification" ? Award : item.title.includes("Quantum") ? Atom : FileText;

    useEffect(() => {
        if (textRef.current) {
            // Check if actual content height exceeds the visible height
            setIsTruncated(textRef.current.scrollHeight > textRef.current.clientHeight);
        }
    }, [item.description]);

    return (
        <div className="flex flex-col h-[450px] rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md relative">
            <div className="flex items-start justify-between mb-4 flex-shrink-0">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icon size={24} />
                </div>
                <div className="text-right">
                    <span className="block text-xs font-medium text-primary">{item.type}</span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-1 line-clamp-2 h-[3.5rem] flex-shrink-0">{item.title}</h3>
            <div className="h-6 mb-3 flex-shrink-0">
                 {item.institution && <p className="text-xs font-medium text-muted-foreground truncate">{item.institution}</p>}
            </div>
            
            <div className="flex-grow overflow-hidden relative mb-4">
                 <p 
                    ref={textRef}
                    className={cn(
                    "text-muted-foreground text-sm leading-relaxed transition-all",
                    isExpanded ? "overflow-y-auto h-full pr-2 pb-6 absolute inset-0 bg-card z-10" : "line-clamp-4"
                 )}>
                    {item.description}
                 </p>
                 {isExpanded && (
                     <button 
                        onClick={() => setIsExpanded(false)}
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card to-transparent pt-4 pb-0 text-xs text-primary font-medium flex items-center justify-center z-20 hover:underline"
                     >
                        Show Less <ChevronUp size={12} className="ml-1"/>
                     </button>
                 )}
                 {!isExpanded && isTruncated && (
                     <button 
                        onClick={() => setIsExpanded(true)}
                        className="mt-1 text-xs text-primary font-medium flex items-center gap-1 hover:underline"
                     >
                        Show More <ChevronDown size={12} />
                     </button>
                 )}
            </div>
            
            <div className="mt-auto flex-shrink-0 pt-2 border-t border-border/50">
                 <div className="flex flex-wrap gap-2 mb-4 h-[22px] overflow-hidden">
                    {item.tech?.map(t => (
                        <Badge key={t} className="text-[10px] px-2 py-0 h-5 bg-secondary text-secondary-foreground hover:bg-secondary/80 whitespace-nowrap">
                            {t}
                        </Badge>
                    ))}
                </div>
                
                 {item.links && item.links.length > 0 ? (
                    <div className="flex flex-col gap-1">
                        {item.links.slice(0, 2).map((link, idx) => (
                             <a 
                                key={idx}
                                href={link.url} 
                                target="_blank" 
                                rel="noreferrer"
                                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1 group truncate"
                            >
                                {link.label}
                                <ExternalLink size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 flex-shrink-0"/>
                            </a>
                        ))}
                    </div>
                 ) : item.link && (
                    <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1 group"
                    >
                        View Credentials 
                        <ExternalLink size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
                    </a>
                )}
            </div>
        </div>
    )
}
