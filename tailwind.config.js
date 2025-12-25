/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // We will toggle the 'dark' class on the body/html
    theme: {
        extend: {
            colors: {
                // Mapping Tailwind colors to our CSS Variables for dynamic Runtime Theming
                border: "var(--border-subtle)",
                input: "var(--border-subtle)",
                ring: "var(--primary)",
                background: "var(--bg-main)",
                foreground: "var(--text-primary)",
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "var(--primary-foreground)",
                },
                secondary: {
                    DEFAULT: "var(--bg-sidebar)", // Sidebar specific background
                    foreground: "var(--text-secondary)",
                },
                panel: {
                    DEFAULT: "var(--bg-panel)",
                },
                muted: {
                    DEFAULT: "var(--accent)", // Muting usually matches accent bg
                    foreground: "var(--text-secondary)",
                },
                accent: {
                    DEFAULT: "var(--accent)",
                    foreground: "var(--accent-foreground)",
                },
            },
        },
    },
    plugins: [],
}
