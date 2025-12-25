import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import {
    Box, Smartphone, Moon, Zap, Atom, Sliders,
    MousePointer, PenTool, Layout, Grid, Settings,
    Type, Globe, CheckCircle2, ArrowRight
} from 'lucide-react';
// import { SiHtml5, SiCss3, SiJavascript, SiReact, SiVite, SiWebpack } from 'react-icons/si'; // Removed due to missing dependency

// Fallback for icons if react-icons is not available
const HtmlIcon = () => <div className="font-bold text-orange-500">HTML5</div>;
const CssIcon = () => <div className="font-bold text-blue-500">CSS3</div>;
const JsIcon = () => <div className="font-bold text-yellow-500">JS</div>;
const ReactIcon = () => <div className="font-bold text-cyan-500">React</div>;

const Overview = ({ onNavigate }) => {
    return (
        <DocLayout
            title="Overview"
            description="A high-level overview of the My Bootstrap framework."
        >

            {/* 1. WHAT IS MY BOOTSTRAP */}
            <section className="mb-16 max-w-3xl">
                <p className="text-xl leading-relaxed text-muted-foreground">
                    My Bootstrap is a modern, configurable UI framework and design system for building responsive websites
                    and applications using HTML, CSS, JavaScript, and React. It provides a robust set of reusable components,
                    a powerful grid system, and extensive prebuilt utilities to speed up your development workflow.
                </p>
            </section>

            {/* 2. CORE PILLARS */}
            <section className="mb-20">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">Core Pillars</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Pillar 1 */}
                    <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                            <Box size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Reusable Components</h3>
                        <p className="text-sm text-muted-foreground">
                            Over 20+ pre-built components like Buttons, Forms, and Navbars ready to drop into your project.
                        </p>
                    </div>

                    {/* Pillar 2 */}
                    <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-4">
                            <Smartphone size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Responsive by Default</h3>
                        <p className="text-sm text-muted-foreground">
                            Mobile-first grid system ensures your layout looks perfect on phones, tablets, and desktops.
                        </p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center mb-4 dark:text-slate-200 dark:bg-slate-700">
                            <Moon size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Dark & Light Themes</h3>
                        <p className="text-sm text-muted-foreground">
                            Built-in color modes with automatic system preference detection and manual toggle support.
                        </p>
                    </div>

                    {/* Pillar 4 */}
                    <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all">
                        <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-600 flex items-center justify-center mb-4">
                            <Zap size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">JavaScript Powered</h3>
                        <p className="text-sm text-muted-foreground">
                            Interactive components like Modals, Tooltips, and Dropdowns powered by vanilla JS or React.
                        </p>
                    </div>

                    {/* Pillar 5 */}
                    <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all">
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center mb-4">
                            <Atom size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">React Ready</h3>
                        <p className="text-sm text-muted-foreground">
                            Check out our native React components for a modern Single Page Application experience.
                        </p>
                    </div>

                    {/* Pillar 6 */}
                    <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all">
                        <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-600 flex items-center justify-center mb-4">
                            <Sliders size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Config Driven</h3>
                        <p className="text-sm text-muted-foreground">
                            Customize the entire look and feel using Sass variables or CSS custom properties.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. HOW IT WORKS (FLOW) */}
            <section className="mb-20">
                <h2 className="text-2xl font-bold mb-8">How It Works</h2>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
                    {/* Step 1 */}
                    <div className="flex-1 flex flex-col items-center text-center p-6 bg-muted/30 rounded-xl border border-border w-full">
                        <div className="w-14 h-14 bg-background rounded-full shadow-sm flex items-center justify-center mb-4 text-primary border border-border">
                            <MousePointer size={24} />
                        </div>
                        <h4 className="font-bold mb-1">Choose</h4>
                        <p className="text-xs text-muted-foreground">Select components</p>
                    </div>

                    {/* Arrow 1 */}
                    <div className="hidden md:block text-muted-foreground transform rotate-0">
                        <ArrowRight size={24} />
                    </div>
                    <div className="md:hidden text-muted-foreground transform rotate-90 my-2">
                        <ArrowRight size={24} />
                    </div>

                    {/* Step 2 */}
                    <div className="flex-1 flex flex-col items-center text-center p-6 bg-muted/30 rounded-xl border border-border w-full">
                        <div className="w-14 h-14 bg-background rounded-full shadow-sm flex items-center justify-center mb-4 text-primary border border-border">
                            <PenTool size={24} />
                        </div>
                        <h4 className="font-bold mb-1">Customize</h4>
                        <p className="text-xs text-muted-foreground">Tweak variables</p>
                    </div>

                    {/* Arrow 2 */}
                    <div className="hidden md:block text-muted-foreground transform rotate-0">
                        <ArrowRight size={24} />
                    </div>
                    <div className="md:hidden text-muted-foreground transform rotate-90 my-2">
                        <ArrowRight size={24} />
                    </div>

                    {/* Step 3 */}
                    <div className="flex-1 flex flex-col items-center text-center p-6 bg-muted/30 rounded-xl border border-border w-full">
                        <div className="w-14 h-14 bg-background rounded-full shadow-sm flex items-center justify-center mb-4 text-primary border border-border">
                            <Settings size={24} />
                        </div>
                        <h4 className="font-bold mb-1">Compile</h4>
                        <p className="text-xs text-muted-foreground">Build assets</p>
                    </div>

                    {/* Arrow 3 */}
                    <div className="hidden md:block text-muted-foreground transform rotate-0">
                        <ArrowRight size={24} />
                    </div>
                    <div className="md:hidden text-muted-foreground transform rotate-90 my-2">
                        <ArrowRight size={24} />
                    </div>

                    {/* Step 4 */}
                    <div className="flex-1 flex flex-col items-center text-center p-6 bg-green-500/10 border border-green-500/20 rounded-xl w-full">
                        <div className="w-14 h-14 bg-green-500 text-white rounded-full shadow-sm flex items-center justify-center mb-4">
                            <Layout size={24} />
                        </div>
                        <h4 className="font-bold mb-1 text-green-700 dark:text-green-400">Build UI</h4>
                        <p className="text-xs text-green-600/80 dark:text-green-400/80">Launch project</p>
                    </div>
                </div>
            </section>

            {/* 4. WHAT'S INCLUDED */}
            <section className="mb-20">
                <h2 className="text-2xl font-bold mb-8">What's Included?</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: "Buttons", icon: MousePointer, color: "text-blue-500" },
                        { name: "Forms", icon: Type, color: "text-green-500" },
                        { name: "Navbars", icon: Layout, color: "text-purple-500" },
                        { name: "Layouts", icon: Grid, color: "text-orange-500" },
                        { name: "Utilities", icon: Settings, color: "text-slate-500" },
                        { name: "Icons", icon: Atom, color: "text-cyan-500" },
                        { name: "Themes", icon: Moon, color: "text-yellow-500" },
                        { name: "Accessibility", icon: Globe, color: "text-red-500" },
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/50">
                            <item.icon size={20} className={item.color} />
                            <span className="font-medium text-sm">{item.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. DESIGN PHILOSOPHY */}
            <section className="mb-20 bg-muted/20 p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold mb-6">Design Philosophy</h2>
                <ul className="space-y-4">
                    {[
                        "Mobile-first responsive design",
                        "Accessibility included from the start (WCAG)",
                        "Consistency over complexity",
                        "Predictable component behavior",
                        "Documentation-driven development"
                    ].map((text, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-green-500 mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{text}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* 6. TECH STACK */}
            <section className="mb-20">
                <h2 className="text-2xl font-bold mb-8">Technology Stack</h2>
                <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Using placeholders if icons not perfectly matched, or Lucide generic */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-4 bg-muted rounded-xl"><HtmlIcon /></div>
                        <span className="text-xs font-mono text-muted-foreground">HTML5</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-4 bg-muted rounded-xl"><CssIcon /></div>
                        <span className="text-xs font-mono text-muted-foreground">CSS / Sass</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-4 bg-muted rounded-xl"><JsIcon /></div>
                        <span className="text-xs font-mono text-muted-foreground">JavaScript</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-4 bg-muted rounded-xl"><ReactIcon /></div>
                        <span className="text-xs font-mono text-muted-foreground">React</span>
                    </div>
                </div>
            </section>

            {/* 7. PROJECT STATUS */}
            <section className="mb-20">
                <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Project Status: Active v1.0.0
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-lg">
                            My Bootstrap is currently in active development. It is open-source and community-driven.
                            Contributions are welcome!
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium shadow-sm hover:bg-muted transition-colors">
                            View License
                        </button>
                    </div>
                </div>
            </section>

        </DocLayout>
    );
};

export default Overview;
