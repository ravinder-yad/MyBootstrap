import React from 'react';
import { Component, Braces, Paintbrush, Moon, Sun } from 'lucide-react';

const CustomComponentsPage = () => {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    Build your own components that feel native to the framework. Follow our patterns for consistency, theming, and accessibility.
                </p>
            </div>

            {/* Checklist */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Component Checklist</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 bg-card border border-border rounded-xl space-y-3">
                        <div className="flex items-center gap-2 font-semibold">
                            <Braces size={20} className="text-primary" />
                            Structure
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1.5 list-disc pl-4">
                            <li>Use functional components</li>
                            <li>Prop types validation</li>
                            <li>Ref forwarding support</li>
                        </ul>
                    </div>

                    <div className="p-6 bg-card border border-border rounded-xl space-y-3">
                        <div className="flex items-center gap-2 font-semibold">
                            <Paintbrush size={20} className="text-pink-500" />
                            Styling
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1.5 list-disc pl-4">
                            <li>Use design tokens</li>
                            <li>Avoid hardcoded hex values</li>
                            <li>Responsive classes first</li>
                        </ul>
                    </div>

                    <div className="p-6 bg-card border border-border rounded-xl space-y-3">
                        <div className="flex items-center gap-2 font-semibold">
                            <div className="flex">
                                <Sun size={14} className="text-amber-500" />
                                <Moon size={14} className="text-indigo-500 -ml-1" />
                            </div>
                            Theming
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1.5 list-disc pl-4">
                            <li>Full dark mode support</li>
                            <li>High contrast variants</li>
                            <li>Respect global radii</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Anatomy Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Component Anatomy</h2>
                <div className="p-8 bg-muted/20 border-2 border-dashed border-border rounded-xl flex flex-col md:flex-row gap-8 items-start">

                    {/* Visual Representation */}
                    <div className="flex-1 w-full p-6 bg-background rounded-lg shadow-sm border border-border relative">
                        {/* Annotation Markers */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                            Props Interface
                        </div>
                        <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-pink-500 text-white text-[10px] px-2 py-0.5 rounded-full -rotate-90">
                            State Logic
                        </div>

                        <div className="space-y-4">
                            <div className="h-8 bg-muted rounded w-3/4"></div>
                            <div className="h-4 bg-muted/50 rounded w-full"></div>
                            <div className="h-4 bg-muted/50 rounded w-5/6"></div>
                            <div className="flex justify-end gap-2 pt-2">
                                <div className="h-8 w-20 bg-primary/20 rounded"></div>
                                <div className="h-8 w-20 bg-primary rounded"></div>
                            </div>
                        </div>
                    </div>

                    {/* Explanation */}
                    <div className="flex-1 space-y-4">
                        <h3 className="font-semibold text-lg">The "My Bootstrap" Pattern</h3>
                        <p className="text-sm text-muted-foreground">
                            Every component is split into three clear concerns:
                        </p>
                        <ol className="space-y-3 text-sm">
                            <li className="flex gap-3">
                                <span className="font-bold text-foreground">1. Config:</span>
                                <span className="text-muted-foreground">Default props derived from global theme.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-bold text-foreground">2. Logic:</span>
                                <span className="text-muted-foreground">Hooks for state and interaction (headless).</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-bold text-foreground">3. Render:</span>
                                <span className="text-muted-foreground">JSX with utility classes for visual output.</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CustomComponentsPage;
