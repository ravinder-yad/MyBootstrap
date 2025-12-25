import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import { Moon, Sun, Monitor, Palette } from 'lucide-react';

const ThemingDocs = () => {
    return (
        <DocLayout
            title="Theming & Color Modes"
            description="Manage and customize the visual theme of your application, including built-in Light and Dark modes."
        >

            {/* 1. OVERVIEW */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                    My Bootstrap includes a robust theming system based on CSS variables.
                    This allows for global style changes without recompiling CSS and enables real-time Dark Mode switching.
                </p>
                <div className="flex gap-4 p-4 bg-muted/50 rounded-xl border border-border justify-center">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white text-black border shadow-sm rounded-lg">
                        <Sun size={16} /> Light
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white border border-slate-700 shadow-sm rounded-lg">
                        <Moon size={16} /> Dark
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-700 border border-slate-300 shadow-sm rounded-lg">
                        <Monitor size={16} /> Auto
                    </button>
                </div>
            </section>

            {/* 2. COLOR SYSTEM */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Color System</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        { name: "Primary", bg: "bg-blue-600" },
                        { name: "Secondary", bg: "bg-slate-500" },
                        { name: "Success", bg: "bg-green-600" },
                        { name: "Danger", bg: "bg-red-600" },
                        { name: "Warning", bg: "bg-yellow-500" },
                        { name: "Info", bg: "bg-cyan-500" },
                        { name: "Light", bg: "bg-slate-100 text-slate-900 border" },
                        { name: "Dark", bg: "bg-slate-900" },
                    ].map((color) => (
                        <div key={color.name} className={`p-4 rounded-lg text-white font-medium flex justify-between items-center ${color.bg}`}>
                            {color.name}
                            <Palette size={16} className="opacity-50" />
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. DARK MODE RULES */}
            <section className="mb-12 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><Sun size={18} /> Light Mode Rules</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Background: White (<code>#ffffff</code>)</li>
                        <li>Text: Dark Gray</li>
                        <li>Borders: Soft Gray</li>
                        <li>Shadows: Diffuse and soft</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><Moon size={18} /> Dark Mode Rules</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Background: Dark Slate (<code>#0f172a</code>)</li>
                        <li>Text: Off-white (prevent eye strain)</li>
                        <li>Borders: Subtle and dark</li>
                        <li>Shadows: Sharper, hidden, or glows</li>
                    </ul>
                </div>
            </section>

            {/* 4. USER PREFERENCE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">User Preference</h2>
                <p className="text-muted-foreground">
                    By default, My Bootstrap respects the user's system setting (`prefers-color-scheme`).
                    However, you can force a mode or allow users to toggle it manually using our helper functions.
                    Preferences are persisted in `localStorage`.
                </p>
            </section>

        </DocLayout>
    );
};

export default ThemingDocs;
