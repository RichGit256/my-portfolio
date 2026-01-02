"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Camera, Mountain, Youtube, Play, Pause } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const articles = [
    {
        category: "Finance & AI",
        title: "Is It a Bubble? The 2025 Retrospective",
        author: "Howard Marks (Oaktree)",
        url: "https://www.oaktreecapital.com/insights/memo/is-it-a-bubble",
        takeaway: "A sobering look at the 'Agentic Crash' of late '25. Essential reading for anyone deploying capital in AI right now."
    },
    {
        category: "History",
        title: "Steam to Silicon: The Luddites Were Right (Sort Of)",
        "author": "Forbes Council",
        url: "https://www.forbes.com/steam-to-silicon-2025",
        takeaway: "Compares the 2020s AI displacement to the 1810s textile riots. History rhyming, as always."
    },
    {
        category: "Tech Strategy",
        title: "The Year AI Got Real: Lessons from 2025",
        author: "ET Edge Insights",
        url: "https://etedge-insights.com/technology/the-year-ai-got-real",
        takeaway: "Why we moved from 'Chatbots' to 'Agentic Workforces' in the last 12 months."
    }
];

export default function Personal() {
    return (
        <section className="py-24 px-4 md:px-12 bg-zinc-950 border-t border-zinc-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-brand-500 font-mono text-sm tracking-widest uppercase mb-4">
                        Beyond the Code
                    </h2>
                    <h3 className="font-display text-4xl md:text-5xl font-bold text-white">
                        Personal <span className="text-zinc-600">Interests</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
                    {/* Podcast Selection */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800"
                    >
                        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                            <div className="flex justify-between items-start">
                                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2">
                                    <Youtube className="w-3 h-3" /> FEATURED GUEST
                                </span>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-2">Footy With Chudy</h4>
                                <p className="text-zinc-300 text-sm max-w-lg mb-4">
                                    Detailed breakdown of Real Madrid's tactical shifts and season predictions. Joined as a guest analyst to discuss the latest in European football.
                                </p>
                                <Link href="https://youtu.be/Q-1uWBal4lQ?si=sJsI-8FNM9BVr8ev" target="_blank" className="inline-flex items-center gap-2 text-white font-medium hover:text-brand-500 transition-colors pointer-events-auto">
                                    <Play className="w-4 h-4 fill-current" /> Watch Episode
                                </Link>
                            </div>
                        </div>
                        {/* Placeholder for YouTube Thumbnail or Video Embed background */}
                        <div className="absolute inset-0 bg-zinc-800 opacity-50 group-hover:scale-105 transition-transform duration-700" />
                        {/* We could use an iframe here, but a clean link is often better for performance */}
                        <iframe
                            src="https://www.youtube.com/embed/Q-1uWBal4lQ?si=sJsI-8FNM9BVr8ev&controls=0&start=30&autoplay=1&mute=1"
                            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                    </motion.div>

                    {/* Football Allegiance */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:col-span-1 relative overflow-hidden rounded-3xl bg-white text-zinc-900 p-8 flex flex-col justify-between"
                    >
                        <div className="absolute top-8 right-8 w-32 h-32 opacity-10">
                            <Image
                                src="/images/rm_logo.jpg"
                                alt="Real Madrid Crest"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div>
                            <h4 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2">Club Support</h4>
                            <h3 className="text-3xl font-bold">Hala Madrid!</h3>
                        </div>

                        <div className="space-y-4 relative z-10">
                            <p className="text-sm font-medium text-zinc-600">
                                Passionate supporter of Real Madrid. Following the tactical evolution and history of the Kings of Europe.
                            </p>
                            <div className="h-1 w-full bg-zinc-200 rounded-full overflow-hidden">
                                <div className="h-full w-3/4 bg-blue-900" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Reading List */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-1 md:row-span-2 relative overflow-y-auto no-scrollbar rounded-3xl bg-zinc-900 border border-zinc-800 p-8"
                        data-lenis-prevent
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <BookOpen className="w-5 h-5 text-brand-500" />
                            <h4 className="font-bold text-white">Current Reading</h4>
                        </div>

                        <div className="space-y-6">
                            {articles.map((article, i) => (
                                <Link href={article.url} key={i} target="_blank" className="block group/article hover:bg-zinc-800/50 p-3 -mx-3 rounded-lg transition-colors">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-[10px] font-mono text-zinc-500 uppercase border border-zinc-800 px-1.5 py-0.5 rounded">{article.category}</span>
                                        <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover/article:text-brand-500 transition-colors" />
                                    </div>
                                    <h5 className="text-sm font-semibold text-white mb-1 group-hover/article:text-brand-500 transition-colors">{article.title}</h5>
                                    <p className="text-xs text-zinc-500 mb-2">by {article.author}</p>
                                    <p className="text-xs text-zinc-400 italic">"{article.takeaway}"</p>
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Hobbies / Gallery */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:col-span-2 md:row-span-2 relative overflow-y-auto no-scrollbar rounded-3xl bg-zinc-900 border border-zinc-800"
                        data-lenis-prevent
                    >
                        <div className="sticky top-0 left-0 z-20 p-6 pointer-events-none">
                            <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 inline-flex pointer-events-auto">
                                <Camera className="w-4 h-4 text-white" />
                                <span className="text-xs font-medium text-white">Captured Moments</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 h-auto md:h-full gap-2 p-2 pt-16 md:pt-2">
                            <div className="relative col-span-2 row-span-2 h-[400px] md:h-auto rounded-2xl overflow-hidden group">
                                <Image src="/hobbies/cairngorm_1.jpg" alt="Cairngorms Hike" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white text-sm font-medium">The Cairngorms</p>
                                    <p className="text-zinc-400 text-xs">UK's 6th Highest Point</p>
                                </div>
                            </div>
                            <div className="relative col-span-1 row-span-1 h-[200px] md:h-auto rounded-2xl overflow-hidden group">
                                <Image src="/hobbies/castle.jpg" alt="Castle" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="relative col-span-1 row-span-1 h-[200px] md:h-auto rounded-2xl overflow-hidden group">
                                <Image src="/hobbies/nature_1.png" alt="Nature" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="relative col-span-2 row-span-1 h-[200px] md:h-auto rounded-2xl overflow-hidden group">
                                <Image src="/hobbies/artistic.png" alt="Artistic Shot" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
