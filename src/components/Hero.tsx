"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-4 md:px-12 relative overflow-hidden pt-20">
            <div className="max-w-7xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-6"
                >
                    <p className="text-brand-500 font-medium tracking-wide text-sm md:text-base mb-4 uppercase">
                        Portfolio
                    </p>
                    <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] text-white mb-8">
                        RICHARD <br />
                        <span className="text-zinc-500">AROWOLO</span>
                    </h1>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8 md:items-end md:justify-between">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-xl"
                    >
                        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                            Crafting high-performance digital experiences with a blend of technical precision
                            and creative vision. As a Computer Science student at RGU, I specialize in full-stack
                            development and data analysis, translating complex problems into elegant solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-center gap-4"
                    >
                        <div className="h-16 w-16 md:h-24 md:w-24 rounded-full border border-zinc-800 flex items-center justify-center animate-spin-slow">
                            <ArrowDownRight className="w-6 h-6 md:w-8 md:h-8 text-brand-500" />
                        </div>
                        <span className="text-sm text-zinc-500 uppercase tracking-widest hidden md:block">
                            Scroll to explore
                        </span>
                    </motion.div>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
        </section>
    );
}
