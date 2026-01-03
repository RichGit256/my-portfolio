import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Now from "@/components/Now";

export default function NowPage() {
    return (
        <main className="bg-zinc-950 min-h-screen">
            <Navbar />
            <Now />
            <Footer />
        </main>
    );
}
