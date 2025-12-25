import React from 'react';
import { Check, X, AlertTriangle, Lightbulb } from 'lucide-react';

const BestPracticesPage = () => {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    Avoid common pitfalls and ensure your project remains maintainable and performant.
                </p>
            </div>

            {/* Do's and Don'ts */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Do's and Don'ts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* DO */}
                    <div className="space-y-4">
                        <h3 className="text-green-600 font-bold flex items-center gap-2">
                            <Check size={20} />
                            Do THIS
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-sm p-3 bg-green-500/5 rounded-lg border border-green-500/10">
                                <Check size={16} className="text-green-600 mt-0.5" />
                                <span>Use global configuration variables for typography and spacing.</span>
                            </li>
                            <li className="flex gap-3 text-sm p-3 bg-green-500/5 rounded-lg border border-green-500/10">
                                <Check size={16} className="text-green-600 mt-0.5" />
                                <span>Extend component props using the official spread operator pattern.</span>
                            </li>
                            <li className="flex gap-3 text-sm p-3 bg-green-500/5 rounded-lg border border-green-500/10">
                                <Check size={16} className="text-green-600 mt-0.5" />
                                <span>Keep custom CSS in a separate layer (CSS modules or styled-components).</span>
                            </li>
                        </ul>
                    </div>

                    {/* DON'T */}
                    <div className="space-y-4">
                        <h3 className="text-destructive font-bold flex items-center gap-2">
                            <X size={20} />
                            Don't do THIS
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-sm p-3 bg-destructive/5 rounded-lg border border-destructive/10">
                                <X size={16} className="text-destructive mt-0.5" />
                                <span>Hardcode hex colors (e.g. #007bff) in your application code.</span>
                            </li>
                            <li className="flex gap-3 text-sm p-3 bg-destructive/5 rounded-lg border border-destructive/10">
                                <X size={16} className="text-destructive mt-0.5" />
                                <span>Directly modify files inside the <code>node_modules</code> folder.</span>
                            </li>
                            <li className="flex gap-3 text-sm p-3 bg-destructive/5 rounded-lg border border-destructive/10">
                                <X size={16} className="text-destructive mt-0.5" />
                                <span>Mix generic global styles with scoped component styles.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Performance Tips */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Pro Tips</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-card border border-border rounded-xl">
                        <div className="flex items-center gap-2 mb-3 text-amber-500 font-semibold">
                            <AlertTriangle size={20} />
                            Performance
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Always tree-shake your imports. Import visible components individually rather than the entire library if using a bundler.
                        </p>
                    </div>
                    <div className="p-6 bg-card border border-border rounded-xl">
                        <div className="flex items-center gap-2 mb-3 text-indigo-500 font-semibold">
                            <Lightbulb size={20} />
                            Accessibility
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Ensure all interactive elements have focus states. Our tokens include <code>--focus-ring</code> for this exact purpose.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BestPracticesPage;
