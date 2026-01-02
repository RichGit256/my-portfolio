"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Certifications() {
    return (
        <section className="py-20 px-4 md:px-12 bg-black border-t border-zinc-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 flex items-center gap-3"
                >
                    <Award className="w-6 h-6 text-brand-500" />
                    <h2 className="text-white font-bold text-2xl">Certifications</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-brand-500 font-mono text-xs uppercase tracking-widest">IBM / Coursera</span>
                                <span className="bg-zinc-800 text-zinc-300 text-[10px] px-2 py-0.5 rounded-full">2024</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Databases and SQL for Data Science with Python
                            </h3>
                            <p className="text-zinc-400 mb-8 leading-relaxed">
                                Comprehensive certification covering advanced SQL techniques, relational database management,
                                and Python integration for data science applications. Validates proficiency in analyzing real-world datasets.
                            </p>

                            <Link
                                href="https://coursera.org/share/370fc51a4a948611c2a739d43eaf552b"
                                target="_blank"
                                className="inline-flex items-center gap-2 text-white bg-zinc-800 px-6 py-3 rounded-full hover:bg-brand-500 transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Verify Credential
                            </Link>
                        </div>

                        <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden border border-zinc-700/50 group bg-zinc-950/50">
                            <Image
                                src="/images/ibm_badge.jpg"
                                alt="IBM Data Science Badge"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
