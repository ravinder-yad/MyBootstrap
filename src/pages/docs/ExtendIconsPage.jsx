import React from 'react';
import { Activity, Terminal, Layers, Component, Layout, Type, Grid, Palette, ChevronRight, Star, Heart, Share2, Search, Bell, Menu } from 'lucide-react';

const ExtendIconsPage = () => {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    The official guide to the My Bootstrap icon system. Our icons are designed to be simple, consistent, and theme-aware.
                </p>
            </div>

            {/* Icon Philosophy */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Icon Philosophy</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { title: 'Simple', desc: 'Minimal details for clarity at small sizes.' },
                        { title: 'Consistent', desc: 'Uniform stroke width (2px) and corner radius.' },
                        { title: 'Theme-Aware', desc: 'Automatically adapts to current text color.' },
                        { title: 'Scalable', desc: 'Vector-based (SVG) for perfect rendering.' },
                    ].map((item, i) => (
                        <div key={i} className="p-4 bg-card border border-border rounded-lg">
                            <h3 className="font-semibold mb-1">{item.title}</h3>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Icon Types Grid */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Icon Types</h2>
                <p className="text-muted-foreground">A preview of the standard icon set available in the framework.</p>

                <div className="space-y-8">
                    {/* UI Icons */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">UI & Interface</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                            {[Menu, Search, Bell, Settings, Share2, ChevronRight].map((Icon, i) => (
                                <div key={i} className="flex flex-col items-center justify-center p-6 bg-secondary/10 border border-transparent hover:border-border rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer group">
                                    <Icon size={24} className="text-foreground/70 group-hover:text-primary transition-colors mb-3" />
                                    <span className="text-xs text-muted-foreground">Icon {i + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Icons */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Action & Status</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                            {[Star, Heart, Activity, Terminal, Layers, Component].map((Icon, i) => (
                                <div key={i} className="flex flex-col items-center justify-center p-6 bg-secondary/10 border border-transparent hover:border-border rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer group">
                                    <Icon size={24} className="text-foreground/70 group-hover:text-primary transition-colors mb-3" />
                                    <span className="text-xs text-muted-foreground">Action {i + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation Note */}
            <div className="p-6 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl">
                <h4 className="flex items-center gap-2 font-semibold text-blue-700 dark:text-blue-300 mb-2">
                    <Terminal size={18} />
                    Using Icons
                </h4>
                <p className="text-sm text-blue-600/80 dark:text-blue-400/80">
                    We use the <code>lucide-react</code> library for our standard icon set. You can import any icon directly:
                    <br />
                    <code className="mt-2 block bg-white dark:bg-black/20 p-2 rounded border border-blue-200 dark:border-blue-800/50 font-mono text-xs">
                        import &#123; Activity &#125; from 'lucide-react';
                    </code>
                </p>
            </div>
        </div>
    );
};

function Settings(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}

export default ExtendIconsPage;
