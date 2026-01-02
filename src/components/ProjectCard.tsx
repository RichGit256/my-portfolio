"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    className?: string; // For bento grid spans
    gradient: string;
}

export default function ProjectCard({
    title,
    description,
    tech,
    link,
    github,
    className,
    gradient,
}: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={cn(
                "group relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-between h-full",
                className
            )}
        >
            {/* Background Gradient */}
            <div
                className={cn(
                    "absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500",
                    gradient
                )}
            />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-3">
                        {tech.map((t) => (
                            <span key={t} className="text-xs font-mono uppercase text-zinc-500 border border-zinc-700 px-2 py-1 rounded-full bg-zinc-950/50">
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        {github && (
                            <Link href={github} target="_blank" className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors text-white">
                                <Github className="w-4 h-4" />
                            </Link>
                        )}
                        {link && (
                            <Link href={link} target="_blank" className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors text-white">
                                <ExternalLink className="w-4 h-4" />
                            </Link>
                        )}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-500 transition-colors">
                    {title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                    {description}
                </p>
            </div>

            <div className="relative z-10 mt-8">
                {(link || github) ? (
                    <Link
                        href={link || github || "#"}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 rounded-full font-bold text-sm hover:bg-zinc-200 transition-colors"
                    >
                        View Project <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                ) : (
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 text-zinc-500 rounded-full font-bold text-sm cursor-not-allowed">
                        Coming Soon
                    </span>
                )}
            </div>
        </motion.div>
    );
}
