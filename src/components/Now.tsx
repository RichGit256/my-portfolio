"use client";

import { motion } from "framer-motion";
import { TrendingUp, Terminal, Activity, MapPin, BarChart3, Lock } from "lucide-react";

// Data Source
const NOW_DATA = {
    last_updated: "January 2, 2026",
    status: "Building & Learning",
    location: "Aberdeen, UK",
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
            progress: { filled: 2, total: 6 }
        },
        {
            topic: "Market Analysis Study",
            status: "Deep Dive",
            details: "Analyzing ETF composition, Market Structure, and backtesting Algorithmic Trading strategies.",
            reading: "The Man Who Solved the Market",
            progress: 0
        }
    ],
    market_analysis: [
        {
            id: "SYS_01",
            title: "Systematic Investing",
            desc: "Developing rule-based execution systems to minimize emotional bias in trading.",
            status: "ACTIVE"
        },
        {
            id: "SYS_02",
            title: "DeFi Intelligence",
            desc: "Auditing smart contract liquidity flows and on-chain tokenomics.",
            status: "ACTIVE"
        }
    ]
};

export default function Now() {
    return (
        <section className="py-24 px-4 md:px-12 bg-zinc-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 border-b border-zinc-900 pb-12"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                        <div>
                            <h2 className="text-brand-500 font-mono text-sm tracking-widest uppercase mb-4">
                                Status Update
                            </h2>
                            <h3 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
                                What I'm <span className="text-zinc-600">doing now.</span>
                            </h3>
                            <div className="flex items-center gap-6 text-sm font-mono text-zinc-500 mt-6">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

                    {/* Left Column: Focus & Research */}
                    <div className="space-y-12">
                        {/* Current Focus */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">Current Focus</h4>
                            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <TrendingUp className="w-24 h-24 text-brand-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{NOW_DATA.current_focus.title}</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    {NOW_DATA.current_focus.description}
                                </p>
                            </div>
                        </motion.div>

                        {/* Market Analysis (Bloomberg Card Redesigned) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">Quantitative Research</h4>
                            <div className="bg-black border border-zinc-800 p-6 rounded-xl font-mono text-sm shadow-2xl relative overflow-hidden">
                                {/* Top Decoration */}
                                <div className="flex justify-between items-center mb-6 border-b border-zinc-900 pb-4">
                                    <span className="text-emerald-500 font-bold uppercase tracking-wider flex items-center gap-2">
                                        <BarChart3 className="w-4 h-4" /> Market Systems
                                    </span>
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {NOW_DATA.market_analysis.map((item, i) => (
                                        <div key={i} className="group/item">
                                            <div className="flex justify-between text-zinc-600 mb-1 text-[10px] uppercase tracking-wider">
                                                <span>{item.id}</span>
                                                <span className="text-emerald-500/50 group-hover/item:text-emerald-500 transition-colors">{item.status}</span>
                                            </div>
                                            <h4 className="text-white font-bold mb-1 group-hover/item:text-emerald-400 transition-colors">{item.title}</h4>
                                            <p className="text-zinc-500 text-xs leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-4 border-t border-zinc-900 flex justify-between text-[10px] text-zinc-600 uppercase">
                                    <span>Algo_Engine_v1</span>
                                    <span className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                        System Online
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">Learning Roadmap</h4>
                        <div className="relative border-l border-zinc-800 ml-3 space-y-12 pb-4">
                            {NOW_DATA.learning_roadmap.map((item, index) => (
                                <div key={index} className="relative pl-12">
                                    {/* Node */}
                                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-950 border border-brand-500 ring-4 ring-zinc-950" />

                                    <div className="space-y-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                            <h3 className="text-xl font-bold text-white">{item.topic}</h3>
                                            <span className="text-xs font-mono text-brand-400 bg-brand-500/10 px-2 py-1 rounded w-fit">
                                                {item.status}
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        {typeof item.progress === 'object' ? (
                                            <div className="flex gap-2 w-full mt-2">
                                                {Array.from({ length: (item.progress as any).total }).map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`h-2 flex-1 rounded-sm ${i < (item.progress as any).filled ? 'bg-white' : 'bg-zinc-800'}`}
                                                    />
                                                ))}
                                            </div>
                                        ) : (item.progress > 0 && (
                                            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-brand-500"
                                                    style={{ width: `${item.progress}%` }}
                                                />
                                            </div>
                                        ))}

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
            </div>
        </section>
    );
}
