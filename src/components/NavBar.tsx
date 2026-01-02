"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section, div[id]");
    sections.forEach((section) => {
      if (section.id) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: "WORK", href: "#work" },
    { name: "ABOUT", href: "#about" },
    { name: "NOW", href: "#now" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5 px-4 md:px-12 py-4 flex justify-between items-center pointer-events-none text-white">
      <div className="font-display font-bold text-xl pointer-events-auto cursor-pointer">
        RA.
      </div>
      <div className="flex gap-6 pointer-events-auto">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-zinc-400",
              activeSection === item.href.substring(1)
                ? "text-white"
                : "text-zinc-500"
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
