import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
    return (
        <main className="bg-zinc-950 min-h-screen">
            <Navbar />

            <section className="pt-40 md:pt-48 pb-4 px-4 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
                        Built <span className="text-zinc-600">Archives.</span>
                    </h1>
                </div>
            </section>

            {/* Show all projects (no limit) */}
            <Projects />

            <Footer />
        </main>
    );
}
