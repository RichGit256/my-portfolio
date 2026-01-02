import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                brand: {
                    50: "#f0f9ff",
                    100: "#e0f2fe",
                    500: "#0ea5e9", // Sky blue standard
                    600: "#0284c7",
                    900: "#0c4a6e",
                },
                surface: {
                    50: "#f9fafb",
                    100: "#f3f4f6",
                    800: "#1f2937",
                    900: "#111827",
                    950: "#030712", // Deep dark background
                }
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                display: ["var(--font-syne)", "sans-serif"],
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out forwards",
                "slide-up": "slideUp 0.7s ease-out forwards",
                "slide-up-fade": "slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                slideUpFade: {
                    "0%": { transform: "translateY(40px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                }
            },
        },
    },
    plugins: [],
};
export default config;
