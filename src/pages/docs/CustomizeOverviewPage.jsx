import React from 'react';
import { Palette, FileCode, Sliders, Moon, Settings } from 'lucide-react';
import DocLayout from '../../components/layout/DocLayout';

const CustomizeOverviewPage = () => {
    return (
        <DocLayout
            title="Customize"
            description="Learn how to theme, modify, and extend My Bootstrap to fit your specific needs."
        >
            {/* Introduction */}
            <section className="mb-12 max-w-3xl">
                <p className="text-xl leading-relaxed text-muted-foreground">
                    My Bootstrap acts as a solid foundation for your project, but it shines when you make it your own.
                    We provide multiple levels of customization, from simple CSS variable overrides to deep Sass configuration and global boolean options.
                </p>
            </section>

            {/* Customization Methods */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8">Ways to Customize</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Method 1: Sass */}
                    <div className="p-6 border border-border rounded-xl bg-card hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-pink-500/10 text-pink-500 rounded-lg">
                                <FileCode size={24} />
                            </div>
                            <h3 className="text-xl font-bold">Sass Variables</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            The most powerful way to customize. Override default variables in `_variables.scss` to change colors, spacing, typography, and component styles across the entire framework at build time.
                        </p>
                        <code className="text-xs bg-muted px-2 py-1 rounded border border-border">@import "bootstrap/scss/functions";</code>
                    </div>

                    {/* Method 2: CSS Variables */}
                    <div className="p-6 border border-border rounded-xl bg-card hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg">
                                <JsonObjectIcon /> {/* Using custom or generic icon */}
                                <Settings size={24} />
                            </div>
                            <h3 className="text-xl font-bold">CSS Variables</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            Update styles at runtime or per-component using standard CSS custom properties. Great for theming and dynamic changes.
                        </p>
                        <code className="text-xs bg-muted px-2 py-1 rounded border border-border">--bs-primary: #ff0000;</code>
                    </div>
                </div>
            </section>

            {/* Theming Sections */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8">Theming</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-5 border border-border rounded-lg">
                        <Palette className="w-8 h-8 text-purple-500 mb-3" />
                        <h4 className="font-semibold text-lg mb-2">Color</h4>
                        <p className="text-sm text-muted-foreground">Define your brand palette, modify theme colors, and generate tints/shades.</p>
                    </div>
                    <div className="p-5 border border-border rounded-lg">
                        <Moon className="w-8 h-8 text-slate-500 mb-3" />
                        <h4 className="font-semibold text-lg mb-2">Color Modes</h4>
                        <p className="text-sm text-muted-foreground">Built-in support for light, dark, and auto modes using `prefers-color-scheme`.</p>
                    </div>
                    <div className="p-5 border border-border rounded-lg">
                        <Sliders className="w-8 h-8 text-orange-500 mb-3" />
                        <h4 className="font-semibold text-lg mb-2">Options</h4>
                        <p className="text-sm text-muted-foreground">Global toggles for visual preferences like gradients, shadows, and rounded corners.</p>
                    </div>
                </div>
            </section>

        </DocLayout>
    );
};

// Placeholder for missing icon if needed, or just use Lucide
const JsonObjectIcon = () => null;

export default CustomizeOverviewPage;
