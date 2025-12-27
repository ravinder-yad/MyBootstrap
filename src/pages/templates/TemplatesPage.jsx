import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Monitor, Lock, User, FileText, ShoppingCart, ArrowRight, Eye, Download, Star } from 'lucide-react';

// Template Data
const templates = [
    {
        id: 1,
        title: "Modern Admin Dashboard",
        description: "A complete admin panel with dark mode, charts, and data tables.",
        category: "Dashboard",
        image: Monitor, // Using Icon as placeholder for now
        color: "blue",
        featured: true,
        tech: ["React", "Tailwind"]
    },
    {
        id: 2,
        title: "SaaS Landing Page",
        description: "High-converting landing page for software products with pricing tables.",
        category: "Landing",
        image: Layout,
        color: "indigo",
        featured: true,
        tech: ["HTML", "Bootstrap"]
    },
    {
        id: 3,
        title: "Auth Starter Pack",
        description: "Login, Signup, and Forgot Password layouts with validation styles.",
        category: "Auth",
        image: Lock,
        color: "purple",
        featured: false,
        tech: ["React"]
    },
    {
        id: 4,
        title: "User Profile Settings",
        description: "Clean profile management interface with tabbed navigation.",
        category: "Profile",
        image: User,
        color: "cyan",
        featured: false,
        tech: ["HTML", "React"]
    },
    {
        id: 5,
        title: "Documentation Site",
        description: "The exact layout used for this documentation website. Perfect for wikis.",
        category: "Docs",
        image: FileText,
        color: "emerald",
        featured: true,
        tech: ["React", "MDX"]
    },
    {
        id: 6,
        title: "E-commerce Storefront",
        description: "Product grid, filters, and shopping cart sidebar layout.",
        category: "Ecommerce",
        image: ShoppingCart,
        color: "orange",
        featured: false,
        tech: ["React"]
    }
];

// Categories
const categories = ["All", "Landing", "Dashboard", "Auth", "Profile", "Docs", "Ecommerce"];

const TemplatesPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    // Filter Logic
    const filteredTemplates = activeCategory === "All"
        ? templates
        : templates.filter(t => t.category === activeCategory);

    const featuredTemplates = templates.filter(t => t.featured);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            {/* 1. HEADER */}
            <div className="text-center max-w-2xl mx-auto pt-8">
                <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-foreground">
                    Templates
                </h1>
                <p className="text-lg text-muted-foreground">
                    Start functionality faster with ready-made layouts. Copy, paste, and customize.
                </p>
            </div>

            {/* 2. CATEGORY FILTERS (Sticky) */}
            <div className="sticky top-[60px] z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 border-b border-border -mx-4 px-4 md:-mx-8 md:px-8">
                <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar scroll-smooth">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border ${activeCategory === cat
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'bg-card text-muted-foreground border-border hover:border-foreground/20 hover:text-foreground'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* 3. FEATURED SECTION (Only show on 'All') */}
            {activeCategory === "All" && (
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Star className="text-yellow-500 fill-yellow-500" size={20} />
                        <h2 className="text-2xl font-bold">Featured Picks</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredTemplates.slice(0, 3).map((template) => (
                            <TemplateCard key={template.id} template={template} featured />
                        ))}
                    </div>
                </div>
            )}

            {/* 4. MAIN GRID */}
            <div className="space-y-6">
                {/* Only show heading if not showing featured or if category is selected */}
                <h2 className="text-2xl font-bold">
                    {activeCategory === "All" ? "All Templates" : `${activeCategory} Templates`}
                    <span className="ml-3 text-sm font-normal text-muted-foreground bg-muted px-2 py-1 rounded-md">
                        {filteredTemplates.length}
                    </span>
                </h2>

                {filteredTemplates.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTemplates.map((template) => (
                            <TemplateCard key={template.id} template={template} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed border-border">
                        <p className="text-muted-foreground">No templates found for this category.</p>
                    </div>
                )}
            </div>

            {/* 5. CTA */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/20 mt-16">
                <h2 className="text-2xl font-bold mb-4">Need a custom layout?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    These templates are just the beginning. Combine components to build anything you can imagine.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/examples"
                        className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-sm w-full sm:w-auto"
                    >
                        View More Examples
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Sub-Component: Template Card
const TemplateCard = ({ template, featured }) => {
    const { title, description, image: Icon, color, tech } = template;

    return (
        <div className={`group relative bg-card border border-border rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col h-full ${featured ? 'md:col-span-1' : ''}`}>

            {/* Thumbnail Area (Placeholder) */}
            <div className={`h-48 bg-${color}-500/5 group-hover:bg-${color}-500/10 transition-colors flex items-center justify-center relative overflow-hidden border-b border-border`}>
                <div className="absolute inset-0 bg-grid-black/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-white/5" />
                <Icon size={48} className={`text-${color}-500 opacity-80 group-hover:scale-110 transition-transform duration-500`} />

                {/* Hover Overlay Buttons */}
                <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button className="px-4 py-2 bg-foreground text-background font-medium rounded-lg text-sm shadow-lg flex items-center gap-2 hover:scale-105 transition-transform">
                        <Eye size={16} /> Preview
                    </button>
                    <button className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg text-sm shadow-lg flex items-center gap-2 hover:scale-105 transition-transform">
                        <Download size={16} /> Use
                    </button>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                    <div>
                        <h3 className="font-semibold text-lg">{title}</h3>
                        {/* Tags */}
                        <div className="flex gap-2 mt-1.5">
                            {tech.map((t, i) => (
                                <span key={i} className="text-[10px] uppercase font-bold px-1.5 py-0.5 bg-muted text-muted-foreground rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">
                    {description}
                </p>

                <div className="pt-4 border-t border-border/50 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Free License</span>
                    <Link to="#" className="text-primary font-medium flex items-center gap-1 hover:underline">
                        Details <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default TemplatesPage;
