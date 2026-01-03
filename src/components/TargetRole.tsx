"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const ROLE_DATA = {
    headline: "Applying Machine Learning to Business & Finance Strategy",
    sub_headline: "I bridge the gap between technical AI implementation and commercial value. Passionate about how Large Language Models and Predictive Analytics can transform consulting and financial workflows.",
    availability: {
        status: "Open to Work",
        type: "Seeking Summer 2026 Internships or Graduate Roles",
        timeline: "Available from June 2026"
    },
    target_sectors: ["FinTech", "Technical Consulting", "Business Intelligence"]
};

export default function TargetRole() {
    return (
        <section className="px-4 md:px-12 py-12 relative z-20 -mt-12 md:-mt-20 mb-20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl overflow-hidden relative group"
                >
                    {/* Glow Effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] -z-10 group-hover:bg-brand-500/20 transition-colors duration-700" />

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

                        {/* Left: Signal */}
                        <div className="md:col-span-4 space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
                                </span>
                                <h2 className="text-sm font-mono text-brand-500 uppercase tracking-widest">Where I Add Value</h2>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-display font-medium text-white leading-tight">
                                Seeking Engineering roles where <span className="text-zinc-500">Financial Data</span> meets <span className="text-zinc-500">User Experience</span>.
                            </h3>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {ROLE_DATA.target_sectors.map((sector, i) => (
                                    <span key={i} className="text-xs font-mono text-zinc-400 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">
                                        {sector}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right: Pitch */}
                        <div className="md:col-span-7 md:col-start-6 flex flex-col justify-between h-full space-y-8">
                            <div>
                                <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                                    "{ROLE_DATA.sub_headline}"
                                </p>
                                <hr className="border-white/10 mb-6" />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Timeline</h4>
                                        <p className="text-white font-medium">{ROLE_DATA.availability.timeline}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Goal</h4>
                                        <p className="text-white font-medium">{ROLE_DATA.availability.type}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="mailto:richardarowolo308@gmail.com" className="inline-flex items-center gap-2 text-white font-medium group/link hover:text-brand-500 transition-colors">
                                    <Sparkles className="w-5 h-5" />
                                    <span>Let's build something together</span>
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
