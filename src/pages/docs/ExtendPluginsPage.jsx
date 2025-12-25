import React from 'react';
import { Plug, ShieldCheck, Zap, RefreshCw } from 'lucide-react';

const ExtendPluginsPage = () => {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-bold tracking-tight">Plugins</h1>
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-semibold rounded-full uppercase tracking-wide border border-amber-500/20">
                        Future Ready
                    </span>
                </div>
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    Extend functionality with modular plugins. A plugin system designed to add features without overriding the core ecosystem.
                </p>
            </div>

            {/* Plugin Concepts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-card border border-border rounded-xl">
                    <div className="flex items-center gap-3 mb-4 text-primary">
                        <Plug size={24} />
                        <h3 className="font-semibold text-lg">Additive Nature</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Plugins should strictly <strong>add</strong> new functionality. They must never modify existing core logic or remove default behaviors.
                    </p>
                </div>

                <div className="p-6 bg-card border border-border rounded-xl">
                    <div className="flex items-center gap-3 mb-4 text-green-500">
                        <ShieldCheck size={24} />
                        <h3 className="font-semibold text-lg">Safety Sandbox</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Plugins run in a scoped environment. They have read-access to the design system configuration but restricted write-access to prevent breakage.
                    </p>
                </div>
            </div>

            {/* Lifecycle Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Plugin Lifecycle</h2>
                <div className="relative p-8 bg-secondary/20 border border-border rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center space-y-3 z-10">
                        <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold text-lg shadow-sm">
                            1
                        </div>
                        <span className="font-medium">Registration</span>
                        <span className="text-xs text-muted-foreground max-w-[120px]">Plugin declares unique ID & dependencies</span>
                    </div>

                    {/* Connector */}
                    <div className="hidden md:block h-1 flex-1 bg-border relative top-[-20px]"></div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center space-y-3 z-10">
                        <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold text-lg shadow-sm">
                            2
                        </div>
                        <span className="font-medium">Initialization</span>
                        <span className="text-xs text-muted-foreground max-w-[120px]">Setup hooks & load assets lazily</span>
                    </div>

                    {/* Connector */}
                    <div className="hidden md:block h-1 flex-1 bg-border relative top-[-20px]"></div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center space-y-3 z-10">
                        <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold text-lg shadow-sm">
                            3
                        </div>
                        <span className="font-medium">Activation</span>
                        <span className="text-xs text-muted-foreground max-w-[120px]">User interacts, plugin logic executes</span>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Plugin vs. Extension</h2>
                <div className="overflow-hidden border border-border rounded-lg">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50 text-muted-foreground">
                            <tr>
                                <th className="px-6 py-3 font-medium">Feature</th>
                                <th className="px-6 py-3 font-medium">Plugin</th>
                                <th className="px-6 py-3 font-medium">Custom Component</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            <tr className="bg-card">
                                <td className="px-6 py-4 font-medium">Primary Use</td>
                                <td className="px-6 py-4">Add global logic / behavior</td>
                                <td className="px-6 py-4">Build new UI blocks</td>
                            </tr>
                            <tr className="bg-card">
                                <td className="px-6 py-4 font-medium">Scope</td>
                                <td className="px-6 py-4">Application-wide</td>
                                <td className="px-6 py-4">Component-local</td>
                            </tr>
                            <tr className="bg-card">
                                <td className="px-6 py-4 font-medium">Example</td>
                                <td className="px-6 py-4">Analytics, Theming, Data Fetching</td>
                                <td className="px-6 py-4">User Card, Product Grid</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default ExtendPluginsPage;
