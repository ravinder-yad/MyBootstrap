import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import { sidebarConfig } from '../../sidebar.config';
import { ArrowRight, BookOpen, Layers, Box } from 'lucide-react';

const Contents = ({ onNavigate }) => {
    // Filter logic: Only 'Docs' section, exclude 'Framework Tools'
    const docsSections = sidebarConfig.filter(group =>
        group.navSection === 'Docs' && group.section !== 'Framework Tools'
    );

    return (
        <DocLayout
            title="Contents"
            description="An overview of everything included in My Bootstrap. Explore the documentation structure to find exactly what you need."
        >
            {/* Dynamic Grid of Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {docsSections.map((group, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/20 transition-all group"
                    >
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                            {group.section}
                        </h2>

                        <ul className="space-y-2 mb-4 flex-1">
                            {group.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                    <button
                                        onClick={() => onNavigate(item.label || item)}
                                        className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4 text-left w-full transition-colors flex items-center gap-1.5"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary/50 transition-colors"></span>
                                        {item.label || item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Quick Links (Bottom CTA) */}
            <div className="mt-12 pt-8 border-t border-border/40">
                <h3 className="text-lg font-bold mb-6">Frequently Accessed</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Getting Started", icon: BookOpen },
                        { label: "Components", icon: Layers },
                        { label: "Download", icon: Box },
                        { label: "Customize", icon: Box } // Reusing Box for now as generic
                    ].map((link, idx) => (
                        <button
                            key={idx}
                            onClick={() => onNavigate(link.label)}
                            className="flex flex-col items-center justify-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted text-center transition-colors border border-transparent hover:border-border"
                        >
                            <link.icon size={20} className="text-primary" />
                            <span className="font-medium text-sm">{link.label}</span>
                        </button>
                    ))}
                </div>
            </div>

        </DocLayout>
    );
};

export default Contents;
