import React from 'react';
import { Link } from 'react-router-dom';
import {
    Zap, Smartphone, Moon, Layout, Package, Layers,
    ArrowRight, Github, Code, Terminal, CheckCircle
} from 'lucide-react';

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen animate-in fade-in zoom-in-95 duration-500">

            {/* 🟦 1. HERO SECTION */}
            <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
                <div className="container px-4 mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 animate-bounce-slow">
                        <span>New Release v1.0 is here!</span>
                        <ArrowRight size={12} />
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 max-w-4xl mx-auto leading-[1.1]">
                        Build faster, cleaner UI with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">MyBootstrap</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                        A modern UI framework & design system for HTML, CSS, JavaScript, and React.
                        Pre-built components, fluid layouts, and dark mode out of the box.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/getting-started/introduction"
                            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 min-w-[200px]"
                        >
                            Get Started
                        </Link>
                        <Link
                            to="/getting-started/download"
                            className="px-8 py-4 bg-background border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors min-w-[200px]"
                        >
                            Download v1.0
                        </Link>
                    </div>

                    <div className="mt-8 text-sm text-muted-foreground flex items-center justify-center gap-6">
                        <span className="flex items-center gap-1"><CheckCircle size={14} className="text-green-500" /> Free & Open Source</span>
                        <span className="flex items-center gap-1"><CheckCircle size={14} className="text-green-500" /> No Config Required</span>
                    </div>
                </div>

                {/* Decorative Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[100px] rounded-full opacity-50 -z-10" />
            </section>

            {/* 🟩 2. TRUST / HIGHLIGHTS BAR */}
            <section className="py-8 bg-muted/30 border-y border-border">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-muted-foreground font-medium text-sm md:text-base">
                        <span className="flex items-center gap-2 hover:text-foreground transition-colors"><Zap size={18} /> Fast & Lightweight</span>
                        <span className="flex items-center gap-2 hover:text-foreground transition-colors"><Smartphone size={18} /> Fully Responsive</span>
                        <span className="flex items-center gap-2 hover:text-foreground transition-colors"><Moon size={18} /> Dark / Light Mode</span>
                        <span className="flex items-center gap-2 hover:text-foreground transition-colors"><CheckCircle size={18} /> Accessibility Ready</span>
                        <span className="flex items-center gap-2 hover:text-foreground transition-colors"><Code size={18} /> React Support</span>
                    </div>
                </div>
            </section>

            {/* 🟨 3. CORE FEATURES */}
            <section className="py-20 md:py-32">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Everything you need to ship</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Stop reinventing the wheel. My Bootstrap comes with a comprehensive suite of features to handle every aspect of your application interface.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Package}
                            color="blue"
                            title="Components Library"
                            desc="Over 30+ production-ready components including Buttons, Modals, Navbars, and more."
                        />
                        <FeatureCard
                            icon={Layout}
                            color="indigo"
                            title="Layout System"
                            desc="A powerful 12-column grid system with easy-to-use utility classes for specific breakpoints."
                        />
                        <FeatureCard
                            icon={Layers}
                            color="purple"
                            title="Forms System"
                            desc="Beautiful form controls with built-in validation styling and accessible states."
                        />
                        <FeatureCard
                            icon={Zap}
                            color="yellow"
                            title="Utilities"
                            desc="A massive collection of utility classes for spacing, typography, colors, and flexbox."
                        />
                        <FeatureCard
                            icon={Moon}
                            color="slate"
                            title="Theming"
                            desc="Built-in dark mode support and easy theming via CSS variables."
                        />
                        <FeatureCard
                            icon={Code}
                            color="green"
                            title="Extensible"
                            desc="Designed to be extended. Easily create your own components using our foundation."
                        />
                    </div>
                </div>
            </section>

            {/* 🟧 4. HOW IT WORKS */}
            <section className="py-20 bg-card border-y border-border">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">How it works</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 max-w-4xl mx-auto">
                        <StepCard number="1" title="Choose Components" desc="Browse our library and pick what you need." />
                        <ArrowRight className="hidden md:block text-muted-foreground rotate-90 md:rotate-0" />
                        <StepCard number="2" title="Customize Theme" desc="Adjust colors and fonts via CSS variables." />
                        <ArrowRight className="hidden md:block text-muted-foreground rotate-90 md:rotate-0" />
                        <StepCard number="3" title="Use in Project" desc="Copy code or install via NPM to start building." />
                    </div>
                </div>
            </section>

            {/* 🟥 5. COMPONENTS PREVIEW */}
            <section className="py-20 md:py-32 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">Visuals that delight</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Every component is meticulously designed with attention to detail.
                                From subtle hover states to smooth transitions, we make your app feel premium.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-primary" /> <span>Modern, clean aesthetics</span></li>
                                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-primary" /> <span>Consistent design language</span></li>
                                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-primary" /> <span>Interactive states included</span></li>
                            </ul>
                            <Link to="/components/overview" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all">
                                Explore all components <ArrowRight size={18} className="ml-1" />
                            </Link>
                        </div>
                        <div className="lg:w-1/2 relative">
                            {/* Abstract collage of components */}
                            <div className="grid grid-cols-2 gap-4 p-4 bg-muted/20 rounded-2xl border border-border rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="space-y-4">
                                    <div className="h-24 bg-card rounded-lg border border-border p-4 shadow-sm flex flex-col justify-center">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2 text-primary"><Zap size={20} /></div>
                                        <div className="h-2 w-16 bg-muted rounded" />
                                    </div>
                                    <div className="h-32 bg-primary p-6 rounded-lg text-primary-foreground shadow-lg flex flex-col justify-between">
                                        <span className="font-bold">Pro Card</span>
                                        <button className="bg-white/20 px-3 py-1 rounded text-sm w-fit">Action</button>
                                    </div>
                                </div>
                                <div className="space-y-4 mt-8">
                                    <div className="h-12 bg-background border border-border rounded-md flex items-center px-4 text-sm text-muted-foreground shadow-sm">
                                        Search...
                                    </div>
                                    <div className="h-40 bg-card rounded-lg border border-border p-4 shadow-sm">
                                        <div className="flex justify-between mb-4">
                                            <div className="h-8 w-8 bg-indigo-100 rounded-full" />
                                            <div className="h-4 w-4 bg-green-500 rounded-full" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-2 w-full bg-muted rounded" />
                                            <div className="h-2 w-3/4 bg-muted rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🟦 7. DEVELOPER EXPERIENCE */}
            <section className="py-20 bg-slate-950 text-white">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Built for Developers</h2>
                    <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
                        Enjoy a first-class development experience with our intuitive API and detailed documentation.
                    </p>

                    <div className="max-w-3xl mx-auto bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl border border-slate-800 text-left font-mono text-sm leading-relaxed">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-[#161b22]">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="ml-2 text-xs text-slate-500">Terminal</span>
                        </div>
                        <div className="p-6">
                            <div className="flex gap-2">
                                <span className="text-green-400">➜</span>
                                <span className="text-slate-300">npm install my-bootstrap</span>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <span className="text-slate-500">... installing dependencies</span>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <span className="text-green-400">➜</span>
                                <span className="text-slate-300">npm run dev</span>
                            </div>
                            <div className="flex gap-2 mt-4 text-blue-400">
                                <span className="text-purple-400">import</span> {'{ Button }'} <span className="text-purple-400">from</span> 'my-bootstrap';
                            </div>
                            <div className="flex gap-2 mt-2 text-slate-300">
                                {'<Button variant="primary">Hello World</Button>'}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🟫 8. COMMUNITY */}
            <section className="py-20 border-b border-border">
                <div className="container px-4 mx-auto text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="p-4 bg-muted rounded-full">
                            <Github size={40} className="text-foreground" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Community Driven</h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        My Bootstrap is improved by contributors like you. Join us on GitHub to report issues, submit PRs, or just say hi.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <a href="https://github.com/ravinder-yad" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors">
                            <Github size={18} /> Star on GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* 🟨 9. FINAL CTA */}
            <section className="py-32 bg-primary/5">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-4xl font-extrabold mb-6">Start building today</h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Stop wasting time on setup and configuration. Focus on your product.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/getting-started/introduction"
                            className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/25 w-full sm:w-auto"
                        >
                            Read the Docs
                        </Link>
                        <Link
                            to="/examples"
                            className="px-8 py-4 bg-background border border-border text-foreground font-bold rounded-lg hover:bg-muted transition-colors w-full sm:w-auto"
                        >
                            View Examples
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Sub-Component: Feature Card
const FeatureCard = ({ icon: Icon, title, desc, color }) => (
    <div className="bg-card border border-border p-8 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
        <div className={`w-12 h-12 rounded-lg bg-${color}-500/10 flex items-center justify-center mb-6 text-${color}-500 group-hover:scale-110 transition-transform`}>
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
);

// Sub-Component: Step Card
const StepCard = ({ number, title, desc }) => (
    <div className="flex flex-col items-center p-6 bg-background rounded-xl border border-border shadow-sm w-full md:w-64">
        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4">
            {number}
        </div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
);

export default HomePage;
