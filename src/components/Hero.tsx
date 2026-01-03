"use client";

import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-4 md:px-12 relative overflow-hidden pt-20">
            <div className="max-w-7xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                        Hi, I'm Richard.
                    </h2>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-6 uppercase tracking-wider">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Open for Internships/Grad Roles (2026)
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-white mb-8 max-w-5xl">
                        Applying Technology and AI to <span className="text-zinc-500">Business & Finance Strategy.</span>
                    </h1>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8 md:items-end md:justify-between">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-xl"
                    >
                        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8">
                            Currently exploring the intersection of AI and Financial Markets.
                            I build systems that turn data into decision-making power.
                        </p>

                        <Link href="/about" className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors relative z-30">
                            <User className="w-4 h-4" />
                            More About Me
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
        </section>
    );
}
