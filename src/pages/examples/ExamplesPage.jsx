import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Box, PenTool, Layers, FileText, Monitor, Grid, MoreHorizontal, ArrowRight } from 'lucide-react';

const ExampleCard = ({ title, description, icon: Icon, link, color }) => (
    <div className="group relative bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
        {/* Decorative Background Blur */}
        <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${color}-500/10 rounded-full blur-3xl group-hover:bg-${color}-500/20 transition-all duration-500`} />

        <div className="relative z-10">
            <div className={`w-12 h-12 rounded-lg bg-${color}-500/10 flex items-center justify-center mb-4 text-${color}-500 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={24} />
            </div>

            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                {description}
            </p>

            <Link
                to={link}
                className="inline-flex items-center text-sm font-medium text-primary hover:gap-2 transition-all"
            >
                View Examples <ArrowRight size={16} className="ml-1" />
            </Link>
        </div>
    </div>
);

const ExamplesPage = () => {
    const examples = [
        {
            title: "Getting Started",
            description: "Basic starter templates including simple HTML setups, React integrations, and minimal configurations.",
            icon: FileText,
            color: "blue",
            link: "/getting-started/introduction"
        },
        {
            title: "Layouts",
            description: "Common layout patterns like fixed sidebars, sticky footers, and grid-based dashboard structures.",
            icon: Layout,
            color: "indigo",
            link: "/layout/grid"
        },
        {
            title: "Components",
            description: "Showcase of all UI components in varied states: Buttons, Modals, Cards, and more.",
            icon: Box,
            color: "purple",
            link: "/components/overview"
        },
        {
            title: "Forms",
            description: "Complex form layouts including login screens, multi-step wizards, and validation examples.",
            icon: PenTool,
            color: "pink",
            link: "/forms/layout"
        },
        {
            title: "Dashboard",
            description: "Full-featured admin dashboard templates with charts, tables, and data visualization configurations.",
            icon: Monitor,
            color: "emerald",
            link: "/examples/dashboard" // Placeholder route
        },
        {
            title: "Pages",
            description: "Ready-to-use page templates for pricing, 404 errors, user profiles, and settings.",
            icon: Layers,
            color: "orange",
            link: "/examples/pages" // Placeholder route
        },
        {
            title: "Utilities",
            description: "Interactive demonstrations of spacing, typography, colors, and flexbox utilities.",
            icon: Grid,
            color: "cyan",
            link: "/utilities/overview"
        },
        {
            title: "Experiments",
            description: "Experimental features and advanced integrations that push the boundaries of the framework.",
            icon: MoreHorizontal,
            color: "slate",
            link: "/examples/experiments"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-16">
            {/* 1. HEADER */}
            <div className="text-center max-w-2xl mx-auto pt-8">
                <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-foreground">
                    Examples
                </h1>
                <p className="text-lg text-muted-foreground">
                    Real-world examples built with My Bootstrap. Use these as inspiration or a starting point for your own projects.
                </p>
            </div>

            {/* 2. GRID LAYOUT */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {examples.map((example, idx) => (
                    <ExampleCard key={idx} {...example} />
                ))}
            </div>

            {/* 3. CTA SECTION */}
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12 text-center border border-border mt-16">
                <h2 className="text-2xl font-bold mb-4">Ready to build something amazing?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Take these examples and customize them to fit your specific needs. The framework is designed to be flexible and extensible.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/getting-started/download"
                        className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-sm w-full sm:w-auto"
                    >
                        Download Framework
                    </Link>
                    <Link
                        to="/components/overview"
                        className="px-6 py-2.5 bg-background border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors w-full sm:w-auto"
                    >
                        Browse Components
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ExamplesPage;
