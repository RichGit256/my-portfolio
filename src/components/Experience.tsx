"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BadgeCheck, Users } from "lucide-react";

export default function Experience() {
    return (
        <section className="py-20 px-4 md:px-12 bg-zinc-950 border-t border-zinc-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-brand-500 font-mono text-sm tracking-widest uppercase mb-4">
                        Professional Path
                    </h2>
                    <h3 className="font-display text-3xl md:text-5xl font-bold text-white">
                        Experience & <span className="text-zinc-600">Volunteering</span>
                    </h3>
                </motion.div>

                <div className="space-y-20">
                    {/* Freelance Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <BadgeCheck className="w-6 h-6 text-brand-500" />
                                <span className="font-mono text-sm text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                                    May 2023 - Present
                                </span>
                            </div>

                            <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Freelance IT Support & Consultant</h4>
                            <p className="text-brand-500 text-lg mb-6">Aberdeen</p>

                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Leveraging my computer science studies to provide technical assistance to private clients and peers.
                            </p>

                            <ul className="space-y-4 text-zinc-400">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0 mt-2.5" />
                                    <span>Diagnose and resolve hardware and software issues for laptops and mobile devices, ensuring minimal downtime.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0 mt-2.5" />
                                    <span>Configure home network setups, including Wi-Fi routers and signal boosters, to optimize connectivity.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0 mt-2.5" />
                                    <span>Translate complex technical terminology into accessible language for non-technical users.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0 mt-2.5" />
                                    <span>Manage diverse client requests alongside university studies, demonstrating strong time management.</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative grid grid-cols-2 gap-4"
                        >
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-8 md:mt-0">
                                <Image
                                    src="/images/freelance_1.jpg"
                                    alt="IT Support Session"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-8 md:mb-0">
                                <Image
                                    src="/images/freelance_2.jpg"
                                    alt="Technical Consultation"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Volunteering */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative pl-8 border-l border-zinc-800 hover:border-brand-500 transition-colors"
                    >
                        <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-zinc-800 group-hover:bg-brand-500 transition-colors" />

                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                            <div className="flex items-center gap-3">
                                <Users className="w-6 h-6 text-brand-500" />
                                <div>
                                    <h4 className="text-xl md:text-2xl font-bold text-white">STEM Ambassador (Volunteering)</h4>
                                    <p className="text-zinc-400">SSERC, Scotland</p>
                                </div>
                            </div>
                            <span className="font-mono text-sm text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                                March 2025 - Present
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50">
                                <h5 className="text-white font-medium mb-2">Mentorship</h5>
                                <p className="text-sm text-zinc-400">Delivering engaging presentations and mentoring students to inspire interest in STEM fields.</p>
                            </div>
                            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50">
                                <h5 className="text-white font-medium mb-2">Communication</h5>
                                <p className="text-sm text-zinc-400">Simplifying complex STEM concepts for diverse audiences, showcasing adaptability.</p>
                            </div>
                            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50">
                                <h5 className="text-white font-medium mb-2">Collaboration</h5>
                                <p className="text-sm text-zinc-400">Building networks across various sectors by collaborating in STEM outreach events.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
