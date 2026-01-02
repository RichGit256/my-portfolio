"use client";

import { motion } from "framer-motion";
import { Terminal, TrendingUp, X, Check, ArrowRight, MapPin, Activity } from "lucide-react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Data Source
const NOW_DATA = {
    last_updated: "January 2, 2026",
    status: "Building & Learning",
    location: "London, UK",
    current_focus: {
        title: "The FinTech Roadmap",
        description: "Bridging the gap between Full-Stack Engineering and Quantitative Analysis."
    },
    learning_roadmap: [
        {
            topic: "Machine Learning Foundations",
            status: "In Progress (Month 2/6)",
            resource: "Fast.ai & Andrew Ng",
            goal: "Build a sentiment analysis bot for earnings calls.",
            progress: 33 // 33% calculation
        },
        {
            topic: "Financial Markets",
            status: "Deep Dive",
            details: "Studying Market Structure, ETF composition, and Algorithmic Trading strategies.",
            reading: "The Man Who Solved the Market",
            progress: 0 // Deep dive doesn't have a rigid bar, but we can treat differently
        }
    ],
    interests: [
        {
            name: "Systematic Investing",
            description: "Moving beyond discretionary trading to rule-based systems."
        },
        {
            name: "DeFi & Smart Contracts",
            description: "Auditing Solidity contracts for security vulnerabilities."
        }
    ],
    saying_no_to: [
        "Freelance projects unrelated to FinTech",
        "New JavaScript frameworks (Sticking to Next.js)",
        "Unstructured learning"
    ]
};

export default function NowPage() {
    return (
        <main className="bg-zinc-950 min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 px-4 md:px-12 max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 border-b border-zinc-900 pb-12"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                        <div>
                            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                                What I'm<br />doing <span className="text-zinc-600">now.</span>
                            </h1>
                            <div className="flex items-center gap-6 text-sm font-mono text-zinc-500">
                                <span className="flex items-center gap-2">
                                    <Activity className="w-4 h-4 text-brand-500" /> {NOW_DATA.status}
                                </span>
                                <span className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" /> {NOW_DATA.location}
                                </span>
                            </div>
                        </div>
                        <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest text-right">
                            Last updated: {NOW_DATA.last_updated}
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Left Column: Focus & Timeline */}
                    <div className="md:col-span-7 space-y-16">

                        {/* Current Focus */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">Current Focus</h2>
                            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <TrendingUp className="w-24 h-24 text-brand-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{NOW_DATA.current_focus.title}</h3>
                                <p className="text-zinc-400 leading-relaxed max-w-md">
                                    {NOW_DATA.current_focus.description}
                                </p>
                            </div>
                        </motion.div>

                        {/* Vertical Timeline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">Learning Roadmap</h2>
                            <div className="relative border-l border-zinc-800 ml-3 space-y-12 pb-4">
                                {NOW_DATA.learning_roadmap.map((item, index) => (
                                    <div key={index} className="relative pl-12">
                                        {/* Node */}
                                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-950 border border-brand-500 ring-4 ring-zinc-950" />

                                        <div className="space-y-3">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                                <h3 className="text-xl font-bold text-white">{item.topic}</h3>
                                                <span className="text-xs font-mono text-brand-400 bg-brand-500/10 px-2 py-1 rounded">
                                                    {item.status}
                                                </span>
                                            </div>

                                            {item.progress > 0 && (
                                                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-brand-500"
                                                        style={{ width: `${item.progress}%` }}
                                                    />
                                                </div>
                                            )}

                                            <div className="text-zinc-400 text-sm space-y-1">
                                                {item.resource && <p><span className="text-zinc-600">Resource:</span> {item.resource}</p>}
                                                {item.details && <p>{item.details}</p>}
                                                {item.reading && <p><span className="text-zinc-600">In Reading:</span> {item.reading}</p>}
                                            </div>

                                            {item.goal && (
                                                <div className="mt-4 p-3 bg-zinc-900/30 border border-zinc-800/50 rounded-lg flex items-start gap-3">
                                                    <Terminal className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                                                    <p className="text-xs font-mono text-zinc-300">
                                                        GOAL: {item.goal}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>

                    {/* Right Column: Bloomberg Card & Boundaries */}
                    <div className="md:col-span-5 space-y-12">

                        {/* Market Systems Analysis (Bloomberg Card) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">Market Watch</h2>
                            <div className="bg-black border border-zinc-800 p-6 rounded-none font-mono text-sm shadow-2xl relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
                                <div className="flex justify-between items-center mb-6 border-b border-zinc-900 pb-4">
                                    <span className="text-emerald-500 font-bold uppercase tracking-wider">Market Systems Analysis</span>
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {NOW_DATA.interests.map((interest, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-zinc-500 mb-1 text-xs">
                                                <span>SYS_ID_0{i + 1}</span>
                                                <span>ACTIVE</span>
                                            </div>
                                            <h4 className="text-white font-bold mb-1">{interest.name}</h4>
                                            <p className="text-zinc-500 text-xs leading-relaxed">
                                                {interest.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-4 border-t border-zinc-900 flex justify-between text-xs text-zinc-600">
                                    <span>TERMINAL_V.2.0.1</span>
                                    <span className="animate-pulse text-emerald-500">● LIVE</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* The "No" List */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                        >
                            <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">Saying "No" To</h2>
                            <ul className="space-y-4">
                                {NOW_DATA.saying_no_to.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-zinc-500 text-sm">
                                        <X className="w-4 h-4 text-zinc-700 shrink-0 mt-0.5" />
                                        <span className="line-through decoration-zinc-800">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
