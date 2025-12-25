import React from 'react';
import { Package, Layers, Settings, Palette } from 'lucide-react';

const ExtendOverviewPage = ({ onNavigate }) => {
    return (
        <div className="space-y-12">
            {/* Header Section */}
            <div className="space-y-4">
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    Extend pages explain how to customize and grow My Bootstrap without modifying its core.
                    Transform "My Bootstrap" from a framework into a full design system platform.
                </p>
                <div className="flex gap-3 pt-2">
                    <button
                        onClick={() => onNavigate && onNavigate('extend-approach')}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium text-sm hover:shadow-lg transition-all">
                        Start Here
                    </button>
                    <button
                        onClick={() => onNavigate && onNavigate('extend-approach')}
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md font-medium text-sm hover:bg-secondary/80 transition-all">
                        Read Philosophy
                    </button>
                </div>
            </div>

            {/* Core Philosophy Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Core Philosophy</h2>
                <div className="p-6 bg-card border border-border rounded-xl shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Package size={120} />
                    </div>
                    <blockquote className="text-xl font-medium italic text-foreground/80 relative z-10 border-l-4 border-primary pl-4">
                        "Framework ko todna nahi, uske upar apna system build karna."
                    </blockquote>
                    <p className="mt-4 text-muted-foreground max-w-2xl relative z-10">
                        The Extend section guides you on how to make My Bootstrap <strong>custom & scalable</strong>,
                        add icons, plugins, and patterns, and use advanced features without hacks.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Explore Extensions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1: Icons */}
                    <div
                        onClick={() => onNavigate && onNavigate('extend-icons')}
                        className="group p-6 bg-card border border-border rounded-xl hover:shadow-md hover:border-primary/50 transition-all cursor-pointer"
                    >
                        <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                            <Layers size={24} />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Icons System</h3>
                        <p className="text-sm text-muted-foreground">
                            Official guide to the My Bootstrap icon system. Simple, consistent, and theme-aware.
                        </p>
                    </div>

                    {/* Card 2: Plugins */}
                    <div
                        onClick={() => onNavigate && onNavigate('extend-plugins')}
                        className="group p-6 bg-card border border-border rounded-xl hover:shadow-md hover:border-violet/50 transition-all cursor-pointer"
                    >
                        <div className="w-12 h-12 bg-violet-500/10 text-violet-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                            <Package size={24} />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Plugins</h3>
                        <p className="text-sm text-muted-foreground">
                            Add functionality without overriding the core. Learn about the plugin lifecycle and safety rules.
                        </p>
                    </div>

                    {/* Card 3: Custom Components */}
                    <div
                        onClick={() => onNavigate && onNavigate('extend-custom-components')}
                        className="group p-6 bg-card border border-border rounded-xl hover:shadow-md hover:border-amber/50 transition-all cursor-pointer"
                    >
                        <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                            <Settings size={24} />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Custom Components</h3>
                        <p className="text-sm text-muted-foreground">
                            Build your own components following the framework's patterns, styling rules, and theming.
                        </p>
                    </div>

                    {/* Card 4: Design Tokens */}
                    <div
                        onClick={() => onNavigate && onNavigate('extend-design-tokens')}
                        className="group p-6 bg-card border border-border rounded-xl hover:shadow-md hover:border-pink/50 transition-all cursor-pointer"
                    >
                        <div className="w-12 h-12 bg-pink-500/10 text-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                            <Palette size={24} />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Design Tokens</h3>
                        <p className="text-sm text-muted-foreground">
                            Advanced theming control using tokens for colors, spacing, typography, and motion.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExtendOverviewPage;
