export default function Footer() {
    return (
        <footer className="py-8 px-4 md:px-12 border-t border-zinc-900 bg-zinc-950 text-zinc-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
                &copy; {new Date().getFullYear()} Richard Arowolo. All rights reserved.
            </div>
            <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/richardarowolo/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="https://github.com/RichGit256" target="_blank" className="hover:text-white transition-colors">GitHub</a>
            </div>
        </footer>
    );
}
