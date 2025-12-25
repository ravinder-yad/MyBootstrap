import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import { ArrowRight, Box } from 'lucide-react';

const componentsList = [
    { name: "Accordion", desc: "Build vertically collapsing accordions.", status: "Stable" },
    { name: "Alerts", desc: "Provide contextual feedback messages.", status: "Stable" },
    { name: "Badge", desc: "Small count and labeling component.", status: "Stable" },
    { name: "Breadcrumb", desc: "Indicate current page location.", status: "Stable" },
    { name: "Buttons", desc: "Custom button styles for form actions.", status: "Stable" },
    { name: "Card", desc: "Flexible container for content.", status: "Stable" },
    { name: "Carousel", desc: "Slideshow for cycling through elements.", status: "Stable" },
    { name: "Collapse", desc: "Toggle visibility of content.", status: "Stable" },
    { name: "Dropdowns", desc: "Toggle contextual overlays.", status: "Stable" },
    { name: "List Group", desc: "List of content sequences.", status: "Stable" },
    { name: "Modal", desc: "Dialog prompts and lightboxes.", status: "Stable" },
    { name: "Navbar", desc: "Responsive navigation header.", status: "Stable" },
    { name: "Offcanvas", desc: "Sidebar navigation component.", status: "New" },
    { name: "Pagination", desc: "Navigation for long lists.", status: "Stable" },
    { name: "Placeholder", desc: "Loading placeholders for content.", status: "New" },
    { name: "Popovers", desc: "Content overlays for info.", status: "Stable" },
    { name: "Progress", desc: "Custom progress bars.", status: "Stable" },
    { name: "Spinners", desc: "Loading indicators.", status: "Stable" },
    { name: "Toasts", desc: "Push notifications.", status: "Stable" },
    { name: "Tooltips", desc: "Hover labels for elements.", status: "Stable" },
];

const ComponentsIndex = ({ onNavigate }) => {
    return (
        <DocLayout
            title="Components"
            description="Over 20+ reusable UI building blocks to help you build interfaces faster."
        >

            {/* 1. INTRO & CATEGORIES */}
            <div className="flex flex-wrap gap-2 mb-10">
                {['Navigation', 'Forms', 'Feedback', 'Layout', 'Content'].map(cat => (
                    <span key={cat} className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {cat}
                    </span>
                ))}
            </div>

            {/* 2. COMPONENT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {componentsList.map((comp, idx) => (
                    <div
                        key={idx}
                        className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer relative overflow-hidden"
                        onClick={() => onNavigate(comp.name)}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                <Box size={24} />
                            </div>
                            {comp.status === 'New' && (
                                <span className="px-2 py-0.5 bg-green-500/10 text-green-600 text-xs font-bold rounded uppercase">New</span>
                            )}
                        </div>

                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                            {comp.name}
                            <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </h3>
                        <p className="text-sm text-muted-foreground">{comp.desc}</p>
                    </div>
                ))}
            </div>

            {/* 3. NEXT STEPS */}
            <div className="bg-muted/20 p-8 rounded-xl border border-border text-center">
                <h2 className="text-xl font-bold mb-2">Ready to build?</h2>
                <p className="text-muted-foreground mb-6">Start exploring specific components or learn how to customize them.</p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => onNavigate('Introduction')}
                        className="px-6 py-2 bg-background border border-border hover:bg-muted rounded-lg text-sm font-medium transition-colors"
                    >
                        Getting Started
                    </button>
                    <button
                        onClick={() => onNavigate('JavaScript')}
                        className="px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-sm font-medium transition-colors"
                    >
                        JavaScript Usage
                    </button>
                </div>
            </div>

        </DocLayout>
    );
};

export default ComponentsIndex;
