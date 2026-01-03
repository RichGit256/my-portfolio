"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "WORK", href: "/projects" },
    { name: "ABOUT", href: "/about" },
    { name: "NOW", href: "/now" },
    { name: "CONTACT", href: "/#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 px-4 md:px-12 py-4 flex justify-between items-center transition-all duration-300",
        scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <Link href="/" className="font-display font-bold text-xl pointer-events-auto cursor-pointer text-white">
        RA.
      </Link>
      <div className="flex gap-6 pointer-events-auto">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-white",
              // logic: if href is current path, highlight. for contact, irrelevant active state or usually just click.
              (pathname === item.href && item.href !== "#contact") || (item.href === "/" && pathname === "/")
                ? "text-white"
                : "text-zinc-500"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
