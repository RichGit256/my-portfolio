import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Personal from "@/components/Personal";

export default function AboutPage() {
    return (
        <main className="bg-zinc-950 min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="pt-40 md:pt-48 pb-20 px-4 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
                        About <span className="text-zinc-600">Me.</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        A full journey through my academic path, professional experience, and the personal interests that fuel my creativity.
                    </p>
                </div>
            </section>

            <Experience />
            <Education />
            <Certifications />
            <Personal />

            <Footer />
        </main>
    );
}
