import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Smartphone, Monitor, Tablet, Maximize } from 'lucide-react';

const BreakpointsPage = () => {
    return (
        <DocLayout
            title="Breakpoints"
            description="Breakpoints are customizable widths that determine how your responsive layout behaves across devices."
        >

            {/* 1. OVERVIEW */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Core Concepts</h2>
                <div className="bg-muted/30 p-6 rounded-xl border border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                        My Bootstrap includes six default breakpoints, sometimes referred to as grid tiers, for building responsive-first.
                        These breakpoints are based on minimum viewport widths and allow us to scale up elements as the viewport changes.
                    </p>
                </div>
            </section>

            {/* 2. AVAILABLE BREAKPOINTS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Available Breakpoints</h2>
                <div className="overflow-x-auto rounded-xl border border-border">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted text-muted-foreground uppercase font-semibold">
                            <tr>
                                <th className="px-6 py-4">Breakpoint</th>
                                <th className="px-6 py-4">Class Infix</th>
                                <th className="px-6 py-4">Dimensions</th>
                                <th className="px-6 py-4">Icon</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border bg-card">
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-primary">X-Small</td>
                                <td className="px-6 py-4 font-mono text-muted-foreground">None</td>
                                <td className="px-6 py-4 font-mono">&lt;576px</td>
                                <td className="px-6 py-4"><Smartphone size={18} /></td>
                            </tr>
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-primary">Small</td>
                                <td className="px-6 py-4 font-mono text-muted-foreground">sm</td>
                                <td className="px-6 py-4 font-mono">≥576px</td>
                                <td className="px-6 py-4"><Smartphone size={18} className="rotate-90" /></td>
                            </tr>
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-primary">Medium</td>
                                <td className="px-6 py-4 font-mono text-muted-foreground">md</td>
                                <td className="px-6 py-4 font-mono">≥768px</td>
                                <td className="px-6 py-4"><Tablet size={18} /></td>
                            </tr>
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-primary">Large</td>
                                <td className="px-6 py-4 font-mono text-muted-foreground">lg</td>
                                <td className="px-6 py-4 font-mono">≥992px</td>
                                <td className="px-6 py-4"><Monitor size={18} /></td>
                            </tr>
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-primary">X-Large</td>
                                <td className="px-6 py-4 font-mono text-muted-foreground">xl</td>
                                <td className="px-6 py-4 font-mono">≥1200px</td>
                                <td className="px-6 py-4"><Maximize size={18} /></td>
                            </tr>
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-primary">XX-Large</td>
                                <td className="px-6 py-4 font-mono text-muted-foreground">xxl</td>
                                <td className="px-6 py-4 font-mono">≥1400px</td>
                                <td className="px-6 py-4"><Maximize size={18} className="scale-125" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 3. MEDIA QUERIES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Media Queries</h2>
                <p className="text-muted-foreground mb-4">
                    We use the following media queries in our Sass files to create the key breakpoints for our grid system and components.
                </p>
                <CodeBlock language="scss" code={`// Source mixins

// No media query for xs
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(xxl) { ... }

// Usage

@include media-breakpoint-down(md) { ... }`} />
            </section>

        </DocLayout>
    );
};

export default BreakpointsPage;
