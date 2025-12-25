import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import { Layout, Palette, MousePointer2, Eye, Box, Info, CheckCircle2, ArrowRight } from 'lucide-react';

const HelpersPage = () => {
    const categories = [
        {
            title: 'Layout Helpers',
            icon: <Layout size={24} className="text-primary" />,
            items: ['Clearfix', 'Position helpers', 'Ratio helpers'],
            description: 'Utilities for clearing floats, positioning, and aspect ratios.'
        },
        {
            title: 'Color & Background',
            icon: <Palette size={24} className="text-secondary" />,
            items: ['Background helpers', 'Colored links'],
            description: 'Quickly set background and link colors.'
        },
        {
            title: 'Interaction Helpers',
            icon: <MousePointer2 size={24} className="text-blue-500" />,
            items: ['Focus ring', 'Stretched link'],
            description: 'Manage focus states and clickable areas.'
        },
        {
            title: 'Visibility Helpers',
            icon: <Eye size={24} className="text-green-500" />,
            items: ['Visually hidden', 'Text truncation'],
            description: 'Control element visibility and text overflow.'
        },
        {
            title: 'Structure Helpers',
            icon: <Box size={24} className="text-yellow-500" />,
            items: ['Vertical rule', 'Stacks'],
            description: 'Divider and spacing structure utilities.'
        }
    ];

    const individualHelpers = [
        { title: 'Clearfix', desc: 'Easily clear floats by adding .clearfix to the parent element.' },
        { title: 'Color & Background', desc: 'Set background colors and text colors with context-aware utilities.' },
        { title: 'Colored Links', desc: 'Colorize links with theme colors while maintaining hover states.' },
        { title: 'Focus Ring', desc: 'Add a custom focus ring to elements for better keyboard accessibility.' },
        { title: 'Icon Link', desc: 'Align icons and text in links for a polished look.' },
        { title: 'Position Helpers', desc: 'Quickly configure the position of an element.' },
        { title: 'Ratio', desc: 'Manage aspect ratios of external content like iframes and videos.' },
        { title: 'Stacks', desc: 'Vertical and horizontal stacking of elements using flexbox.' },
        { title: 'Stretched Link', desc: 'Make an entire block clickable via a pseudo-element on a link' },
        { title: 'Text Truncation', desc: 'Truncate long text with an ellipsis.' },
        { title: 'Vertical Rule', desc: 'Create vertical dividers resembling horizontal rules.' },
        { title: 'Visually Hidden', desc: 'Hide elements visually but keep them accessible to screen readers.' },
    ];

    return (
        <DocLayout
            title="Helpers"
            description="Helper classes for common layout, accessibility, and interaction patterns."
        >

            {/* 1. WHAT ARE HELPERS? */}
            <section className="mb-12">
                <div className="bg-card border border-border p-6 rounded-xl">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Helpers are small utility classes designed to solve common UI problems quickly without writing custom CSS. They focus on specific behaviors like clearing floats, managing aspect ratios, or improving accessibility, rather than visual styling.
                    </p>
                </div>
            </section>

            {/* 2. HELPER CATEGORIES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Helper Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, index) => (
                        <div key={index} className="bg-card border border-border p-6 rounded-xl hover:shadow-md transition-shadow group cursor-pointer">
                            <div className="mb-4">{cat.icon}</div>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{cat.description}</p>
                            <ul className="space-y-1">
                                {cat.items.map((item, i) => (
                                    <li key={i} className="text-sm flex items-center gap-2 text-muted-foreground">
                                        <div className="w-1.5 h-1.5 rounded-full bg-border"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. INDIVIDUAL HELPERS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Individual Helpers</h2>
                <div className="bg-card border border-border rounded-xl divide-y divide-border">
                    {individualHelpers.map((helper, index) => (
                        <div key={index} className="p-4 hover:bg-muted/30 transition-colors">
                            <h3 className="font-bold text-base mb-1 text-primary">{helper.title}</h3>
                            <p className="text-sm text-muted-foreground">{helper.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. ACCESSIBILITY NOTES */}
            <section className="mb-12">
                <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-xl flex gap-4">
                    <Info className="text-blue-500 shrink-0" size={24} />
                    <div>
                        <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-2">Accessibility Notes</h3>
                        <p className="text-sm text-blue-800 dark:text-blue-300 mb-2">
                            Helpers in My Bootstrap are designed with accessibility in mind.
                        </p>
                        <ul className="list-disc list-inside text-sm text-blue-800 dark:text-blue-300 space-y-1">
                            <li>Helpers generally do not break accessibility by design.</li>
                            <li><strong>Focus Ring</strong> helpers ensure interactive elements are clearly visible to keyboard users.</li>
                            <li><strong>Visually Hidden</strong> classes effectively hide content from screens while keeping it available to screen readers.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 5. USAGE GUIDELINES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Usage Guidelines</h2>
                <div className="bg-card border border-border p-6 rounded-xl">
                    <h3 className="font-bold mb-4">Best Practices</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                            <span className="text-sm text-muted-foreground">Use helpers for small, targeted fixes or utility patterns.</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                            <span className="text-sm text-muted-foreground">Prefer the <strong>Grid system</strong> for overall page layout over sizing helpers.</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                            <span className="text-sm text-muted-foreground">Avoid using helpers to construct full component designs; use Components instead.</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                            <span className="text-sm text-muted-foreground">Use only what you need to keep your HTML clean.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. NEXT LINKS */}
            <section className="flex flex-wrap gap-4 pt-6 border-t border-border">
                <div className="flex-1 min-w-[200px] p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors cursor-pointer group">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Next</span>
                    <div className="flex items-center justify-between mt-1">
                        <span className="font-bold text-primary">Utilities API</span>
                        <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                    </div>
                </div>
                <div className="flex-1 min-w-[200px] p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors cursor-pointer group">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Prev</span>
                    <div className="flex items-center justify-between mt-1">
                        <span className="font-bold text-foreground">Components</span>

                    </div>
                </div>
            </section>

        </DocLayout>
    );
};

export default HelpersPage;
