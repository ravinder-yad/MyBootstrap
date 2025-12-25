import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import { Zap, Layout, Palette, Box, Grid, Type, Sliders, ArrowRight } from 'lucide-react';

const UtilitiesOverviewPage = () => {
    const categories = [
        {
            title: 'API',
            icon: <Sliders size={24} className="text-primary" />,
            description: 'Understanding the utility naming convention and how to use the API.',
            link: 'API'
        },
        {
            title: 'Layout',
            icon: <Layout size={24} className="text-secondary" />,
            description: 'Display, Position, Float, Overflow, and Z-index utilities.',
            link: 'Display'
        },
        {
            title: 'Flexbox',
            icon: <Grid size={24} className="text-blue-500" />,
            description: 'Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more.',
            link: 'Flex'
        },
        {
            title: 'Spacing',
            icon: <Box size={24} className="text-green-500" />,
            description: 'Margin and padding values for measuring visual comfort.',
            link: 'Spacing'
        },
        {
            title: 'Sizing',
            icon: <Box size={24} className="text-yellow-500" />,
            description: 'Easily make an element as wide or as tall as you like.',
            link: 'Sizing'
        },
        {
            title: 'Typography',
            icon: <Type size={24} className="text-purple-500" />,
            description: 'Text alignment, wrapping, weight, and more.',
            link: 'Text'
        },
        {
            title: 'Colors',
            icon: <Palette size={24} className="text-red-500" />,
            description: 'Convey meaning through color with a handful of color utility classes.',
            link: 'Colors'
        },
        {
            title: 'Interactions',
            icon: <Zap size={24} className="text-orange-500" />,
            description: 'Utility classes that change how users interact with contents of a website.',
            link: 'Interactions'
        }
    ];

    return (
        <DocLayout
            title="Utilities"
            description="The Power User Zone ⚡. Single-purpose helper classes to speed up development and keep your CSS clean."
        >

            {/* 1. INTRODUCTION */}
            <section className="mb-12">
                <div className="bg-card border border-border p-6 rounded-xl">
                    <h2 className="text-xl font-bold mb-4">Philosophy</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                        Utilities are single-purpose helper classes that do one thing and do it well. They are designed to be:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-start gap-3">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs mt-0.5">1</span>
                            <div>
                                <strong className="block text-foreground">Atomic</strong>
                                <span className="text-sm text-muted-foreground">Each class performs a single styling function appropriately (e.g., `text-center`).</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs mt-0.5">2</span>
                            <div>
                                <strong className="block text-foreground">Predictable</strong>
                                <span className="text-sm text-muted-foreground">Class names follow a strict structure for easy memorization.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs mt-0.5">3</span>
                            <div>
                                <strong className="block text-foreground">Responsive</strong>
                                <span className="text-sm text-muted-foreground">Apply utilities at specific breakpoints using familiar suffixes.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs mt-0.5">4</span>
                            <div>
                                <strong className="block text-foreground">Theme Safe</strong>
                                <span className="text-sm text-muted-foreground">Colors and certain properties adapt automatically to dark/light modes.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* 2. CATEGORIES GRID */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Explore Utilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, index) => (
                        <div key={index} className="bg-card border border-border p-6 rounded-xl hover:shadow-md transition-shadow group flex flex-col h-full">
                            <div className="mb-4">{cat.icon}</div>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4 flex-1">{cat.description}</p>
                            <div className="flex items-center text-sm font-medium text-primary mt-auto">
                                View Docs <ArrowRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. GOLDEN RULES */}
            <section className="mb-12">
                <div className="bg-muted/30 border border-border dashed p-6 rounded-xl text-center">
                    <h2 className="text-xl font-bold mb-2">Golden Rules</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Utilities are powerful, but with great power comes great responsibility. Use them for small, targeted changes. Do not use them to replace semantic components or to build entire layouts from scratch if a Grid or Component exists.
                    </p>
                </div>
            </section>

        </DocLayout>
    );
};

export default UtilitiesOverviewPage;
