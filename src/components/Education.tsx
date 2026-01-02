"use client";

import { motion } from "framer-motion";

export default function Education() {
    return (
        <section className="py-20 px-4 md:px-12 bg-zinc-950 border-t border-zinc-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-brand-500 font-mono text-sm tracking-widest uppercase mb-4">
                        Academic Background
                    </h2>
                    <h3 className="font-display text-3xl md:text-5xl font-bold text-white">
                        Education
                    </h3>
                </motion.div>

                <div className="space-y-12">
                    {/* Degree 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group relative pl-8 border-l border-zinc-800 hover:border-brand-500 transition-colors"
                    >
                        <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-zinc-800 group-hover:bg-brand-500 transition-colors" />

                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                            <div>
                                <h4 className="text-xl md:text-2xl font-bold text-white">Robert Gordon University, Aberdeen</h4>
                                <p className="text-zinc-400">BSc (Hons) Computer Science</p>
                            </div>
                            <span className="font-mono text-sm text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                                Jan 2023 - June 2027
                            </span>
                        </div>

                        <div className="mb-4">
                            <p className="text-brand-500 font-medium">Predicted First Class</p>
                        </div>

                        <p className="text-zinc-400 leading-relaxed max-w-3xl">
                            Key Modules: Problem Solving and Modelling, Machine Learning, Advanced Software Design, and Web Development.
                        </p>
                    </motion.div>

                    {/* Degree 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="group relative pl-8 border-l border-zinc-800 hover:border-brand-500 transition-colors"
                    >
                        <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-zinc-800 group-hover:bg-brand-500 transition-colors" />

                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                            <div>
                                <h4 className="text-xl md:text-2xl font-bold text-white">International College at RGU</h4>
                                <p className="text-zinc-400">Foundation in Technology</p>
                            </div>
                        </div>

                        <p className="text-zinc-400 leading-relaxed max-w-3xl">
                            Key Modules: Information Security & Risk Management, Statistics, Database Systems, and Object-Oriented Programming.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
