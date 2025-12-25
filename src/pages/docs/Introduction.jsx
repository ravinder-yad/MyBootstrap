import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import { ArrowRight, Zap, Palette, Component, Terminal, Smartphone, Layout, Check, X, Code2 } from 'lucide-react';

const Introduction = ({ onNavigate }) => {
    return (
        <DocLayout>

            {/* 1. HERO SECTION */}
            <div className="py-10 md:py-16 text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent pb-1">
                    Build modern UI faster <br className="hidden md:block" /> with My Bootstrap
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    A custom UI framework and design system that helps you build responsive websites and applications using HTML, CSS, JavaScript, and React — all from one unified system.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <button
                        onClick={() => onNavigate('Download')}
                        className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                    >
                        Get Started <ArrowRight size={18} />
                    </button>
                    <a
                        href="https://github.com/ravinder-yad"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto px-8 py-3 bg-background border border-border hover:bg-muted text-foreground font-medium rounded-full transition-all flex items-center justify-center gap-2"
                    >
                        GitHub
                    </a>
                </div>
            </div>

            {/* 2. KEY FEATURES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                {[
                    { icon: Zap, title: "Fast & Lightweight", desc: "Optimized for performance with zero bloat. Only loads what you use." },
                    { icon: Palette, title: "Theming System", desc: "Built-in dark mode and CSS variable support for easy customization." },
                    { icon: Component, title: "Reusable Components", desc: "30+ professionally designed React components ready to drop in." },
                    { icon: Terminal, title: "Developer Experience", desc: "Powerful CLI and Compiler tools to automate your workflow." },
                    { icon: Layout, title: "Modern Layouts", desc: "Flexbox and Grid systems that handle any screen size effortlessly." },
                    { icon: Smartphone, title: "Mobile First", desc: "Responsive by default. Your site looks great on phones, tablets, and desktops." },
                ].map((feature, idx) => (
                    <div key={idx} className="p-6 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-primary/20 transition-all hover:shadow-md group">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <feature.icon size={20} />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                ))}
            </div>

            {/* 3. HOW IT WORKS (Visual Flow) */}
            <div className="my-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                    <p className="text-muted-foreground">From concept to code in four simple steps.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {[
                            { step: "01", title: "Select Component", desc: "Browse the library" },
                            { step: "02", title: "Customize", desc: "Tweak props & theme" },
                            { step: "03", title: "Generate Code", desc: "HTML or React" },
                            { step: "04", title: "Ship It", desc: "Deploy to production" }
                        ].map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-background border-4 border-muted flex items-center justify-center font-bold text-xl text-primary shadow-sm mb-4">
                                    {step.step}
                                </div>
                                <h4 className="font-semibold text-lg">{step.title}</h4>
                                <p className="text-sm text-muted-foreground">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. QUICK START */}
            <div className="my-20 bg-muted/30 rounded-2xl p-6 md:p-10 border border-border">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 space-y-4">
                        <h2 className="text-3xl font-bold">Quick Start</h2>
                        <p className="text-muted-foreground">
                            Get up and running in less than 5 minutes. No complex configuration required.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-primary font-medium cursor-pointer hover:underline">
                            Read full installation guide <ArrowRight size={14} />
                        </div>
                    </div>
                    <div className="flex-1 w-full max-w-md bg-slate-950 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border-b border-slate-800">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="p-4 space-y-4 font-mono text-sm">
                            <div>
                                <p className="text-slate-500 mb-1"># Install the package</p>
                                <div className="flex items-center gap-2 text-slate-300">
                                    <span className="text-green-400">❯</span> npm install my-bootstrap
                                </div>
                            </div>
                            <div>
                                <p className="text-slate-500 mb-1"># Import styles</p>
                                <div className="text-blue-300">
                                    import <span className="text-orange-300">'my-bootstrap/dist/css'</span>;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. COMPARISON TABLE */}
            <div className="my-20">
                <h2 className="text-2xl font-bold mb-6 text-center">Why My Bootstrap?</h2>
                <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Feature</th>
                                <th className="px-6 py-4 font-semibold text-center text-foreground w-1/3">My Bootstrap</th>
                                <th className="px-6 py-4 font-semibold text-center w-1/3">Standard Bootstrap</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {[
                                { feature: "Tech Stack", us: "HTML + React Native", them: "Mostly HTML/jQuery" },
                                { feature: "Customization", us: "Config Driven (JS)", them: "Sass Variables" },
                                { feature: "Dark Mode", us: "Auto-adaptive", them: "Manual toggle" },
                                { feature: "Tooling", us: "Built-in Compiler", them: "External (Webpack)" },
                            ].map((row, idx) => (
                                <tr key={idx} className="bg-background hover:bg-muted/20 transition-colors">
                                    <td className="px-6 py-4 font-medium">{row.feature}</td>
                                    <td className="px-6 py-4 text-center font-semibold text-primary/80 bg-primary/5">{row.us}</td>
                                    <td className="px-6 py-4 text-center text-muted-foreground">{row.them}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 6. NEXT STEPS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                {['Download', 'Components', 'Color', 'Vite'].map((item) => (
                    <button
                        key={item}
                        onClick={() => onNavigate(item)}
                        className="h-16 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-muted/50 transition-all flex items-center justify-between px-6 font-medium group"
                    >
                        {item} <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                    </button>
                ))}
            </div>

        </DocLayout>
    );
};

export default Introduction;
