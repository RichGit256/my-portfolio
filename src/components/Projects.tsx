"use client";

import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
        <section className="py-20 px-4 md:px-12 bg-zinc-950">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Selected Work</h2>
                    <h3 className="text-3xl md:text-5xl font-display font-bold text-white">
                        Featured <span className="text-zinc-600">Projects</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                    {/* Project 1: DeFi Analysis (Large span) */}
                    <div className="md:col-span-2">
                        <ProjectCard
                            title="DeFi Trading Activity Analysis"
                            description="In-depth exploratory analysis of Wintermute’s on-chain trading activity. Uncovering actionable insights into decentralized market patterns using Python and Data Viz tools."
                            tech={["Python", "Pandas", "Plotly", "Streamlit"]}
                            link="https://docs.google.com/document/d/1_aHAg4apfzDFxbdCo1_q-aJi-lpjC6G038tauY7b5nQ/edit?usp=sharing"
                            gradient="bg-gradient-to-br from-blue-600 via-indigo-500 to-indigo-900"
                            className="h-full"
                        />
                    </div>

                    {/* Project 2: Funmyy's Kitchen */}
                    <div className="md:col-span-1">
                        <ProjectCard
                            title="Funmyy's Kitchen"
                            description="A pixel-perfect, responsive website for a restaurant brand. Delivering a seamless digital experience that translates brand identity into functionality."
                            tech={["HTML/CSS", "Bootstrap", "JS"]}
                            link="https://funmyyskitchen.co.uk/"
                            gradient="bg-gradient-to-br from-orange-500 to-red-600"
                            className="h-full"
                        />
                    </div>

                    {/* Project 3: Dynamic Web Dev Team (Mid span) */}
                    <div className="md:col-span-3">
                        <ProjectCard
                            title="Full-Stack Web App Team Project"
                            description="Designed and deployed a dynamic web application. Implemented Node.js backend with EJS templating and MongoDB, demonstrating robust full-stack integration and team collaboration."
                            tech={["Node.js", "Express", "MongoDB", "EJS"]}
                            github="https://github.com/CM2104-DynamicWebDevelopment/cm2104-2324-groupproject-datekklist"
                            gradient="bg-gradient-to-br from-emerald-500 to-teal-800"
                            className="h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
