import React from 'react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

const ExtendApproachPage = () => {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    Learn the right way to extend the framework. Our approach prioritizes non-destructive extensions and configuration-first customization.
                </p>
            </div>

            {/* Core vs Custom */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Core vs. Custom</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* The DON'T Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-destructive font-semibold">
                            <XCircle size={20} />
                            <span>Don't: Modify Core Files</span>
                        </div>
                        <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-xl space-y-3">
                            <p className="text-sm text-foreground/80">
                                Never directly edit files inside the <code>src/core</code> or <code>node_modules</code> directories.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-destructive">•</span>
                                    Breaks future updates
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-destructive">•</span>
                                    Hard to maintain
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-destructive">•</span>
                                    Creates tech debt
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* The DO Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-green-600 font-semibold">
                            <CheckCircle2 size={20} />
                            <span>Do: Override & Extend</span>
                        </div>
                        <div className="p-6 bg-green-500/5 border border-green-500/20 rounded-xl space-y-3">
                            <p className="text-sm text-foreground/80">
                                Use the configuration system and separate extension files to layer your changes on top.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">•</span>
                                    Safe for upgrades
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">•</span>
                                    Modular and clean
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">•</span>
                                    Easy to share
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Config First Strategy */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Config-Driven Architecture</h2>
                <p className="text-muted-foreground max-w-3xl">
                    We use a "Config-First" approach. Before writing new CSS or Components, check if you can achieve your goal by adjusting the global configuration variables or design tokens.
                </p>

                <div className="p-8 bg-secondary/20 border border-border rounded-xl flex items-center justify-center">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-medium">
                        <div className="px-6 py-4 bg-background border border-border rounded-lg shadow-sm text-center">
                            1. Check Config
                        </div>
                        <ArrowRight className="text-muted-foreground hidden md:block" />
                        <div className="px-6 py-4 bg-background border border-border rounded-lg shadow-sm text-center">
                            2. Use Tokens
                        </div>
                        <ArrowRight className="text-muted-foreground hidden md:block" />
                        <div className="px-6 py-4 bg-background border border-border rounded-lg shadow-sm text-center">
                            3. Extend Component
                        </div>
                        <ArrowRight className="text-muted-foreground hidden md:block" />
                        <div className="px-6 py-4 bg-background border border-border rounded-lg shadow-sm text-center">
                            4. Create Custom
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExtendApproachPage;
