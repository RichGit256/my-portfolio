"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Smartphone, Send } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <section className="py-24 px-4 md:px-12 relative overflow-hidden bg-zinc-950">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-brand-500 font-mono text-sm tracking-widest uppercase mb-4">
                        Get in Touch
                    </h2>
                    <h3 className="font-display text-4xl md:text-6xl font-bold text-white">
                        Contact <span className="text-zinc-600">Me!</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm text-zinc-400">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors placeholder:text-zinc-600"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm text-zinc-400">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors placeholder:text-zinc-600"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="mobile" className="text-sm text-zinc-400">Mobile Number</label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors placeholder:text-zinc-600"
                                    placeholder="+44 123 456 7890"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm text-zinc-400">Email Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors placeholder:text-zinc-600"
                                    placeholder="Inquiry"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm text-zinc-400">Your Message</label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors placeholder:text-zinc-600 resize-none"
                                placeholder="How can I help you?"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="group w-fit flex items-center gap-2 bg-white text-zinc-950 px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                {status === "submitting" ? "Sending..." : "Submit Message"}
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>

                            {status === "success" && (
                                <p className="text-green-500 text-sm">Message sent successfully!</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-500 text-sm">Failed to send message. Please try again.</p>
                            )}
                        </div>
                    </motion.form>

                    {/* Socials & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col justify-center space-y-8 md:pl-12 border-l border-zinc-900"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-zinc-400">
                                <div className="h-12 w-12 rounded-full bg-zinc-900 flex items-center justify-center text-brand-500">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500">Email Me</p>
                                    <p className="text-white font-medium">richardarowolo308@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-zinc-400">
                                <div className="h-12 w-12 rounded-full bg-zinc-900 flex items-center justify-center text-brand-500">
                                    <Smartphone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500">Call Me</p>
                                    <p className="text-white font-medium">07460872672</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-zinc-900">
                            <h4 className="text-white font-bold mb-6">Connect with me</h4>
                            <div className="flex gap-4">
                                <Link
                                    href="https://github.com/RichGit256"
                                    target="_blank"
                                    className="h-14 w-14 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all"
                                >
                                    <Github className="w-6 h-6" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/richardarowolo/"
                                    target="_blank"
                                    className="h-14 w-14 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        </section>
    );
}
