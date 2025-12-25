import React from 'react';
import { Check, X } from 'lucide-react';

const AboutBrandPage = () => {
    return (
        <div className="space-y-12">
            {/* Introduction */}
            <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Brand Guidelines</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Documentation and examples for My Bootstrap's logo, colors, and usage policies. Please follow these guidelines to ensure consistency when representing the project.
                </p>
            </section>

            {/* Logo Usage */}
            <section className="space-y-8">
                <h3 className="text-2xl font-semibold text-foreground">Logo</h3>
                <p className="text-muted-foreground">The primary logo is the core identifier of the framework.</p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Light Mode Logo */}
                    <div className="space-y-2">
                        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">On Light Backgrounds</h4>
                        <div className="h-48 border border-border rounded-lg bg-white flex items-center justify-center">
                            <h1 className="text-4xl font-black tracking-tight text-gray-900">
                                <span className="text-blue-600">My</span>Bootstrap
                            </h1>
                        </div>
                    </div>
                    {/* Dark Mode Logo */}
                    <div className="space-y-2">
                        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">On Dark Backgrounds</h4>
                        <div className="h-48 border border-border rounded-lg bg-gray-950 flex items-center justify-center">
                            <h1 className="text-4xl font-black tracking-tight text-white">
                                <span className="text-blue-500">My</span>Bootstrap
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Colors */}
            <section className="space-y-8">
                <h3 className="text-2xl font-semibold text-foreground">Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                        <div className="h-24 bg-primary rounded-lg shadow-sm"></div>
                        <div>
                            <p className="font-medium">Primary Blue</p>
                            <code className="text-xs text-muted-foreground">#3B82F6</code>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-24 bg-gray-900 rounded-lg shadow-sm border border-border"></div>
                        <div>
                            <p className="font-medium">Deep Dark</p>
                            <code className="text-xs text-muted-foreground">#111827</code>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-24 bg-gray-500 rounded-lg shadow-sm"></div>
                        <div>
                            <p className="font-medium">Neutral Gray</p>
                            <code className="text-xs text-muted-foreground">#6B7280</code>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-24 bg-red-500 rounded-lg shadow-sm"></div>
                        <div>
                            <p className="font-medium">Danger Red</p>
                            <code className="text-xs text-muted-foreground">#EF4444</code>
                        </div>
                    </div>
                </div>
            </section>

            {/* Do's and Don'ts */}
            <section className="space-y-8">
                <h3 className="text-2xl font-semibold text-foreground">Do's and Don'ts</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-green-500 font-medium">
                            <Check size={20} />
                            <span>Do</span>
                        </div>
                        <div className="p-6 bg-muted/20 border-l-4 border-green-500 rounded-r-lg">
                            <p className="text-muted-foreground">Use the official vector assets provided in the generic download package.</p>
                        </div>
                        <div className="p-6 bg-muted/20 border-l-4 border-green-500 rounded-r-lg">
                            <p className="text-muted-foreground">Maintain clear space around the logo equal to 150% of the logo height.</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-red-500 font-medium">
                            <X size={20} />
                            <span>Don't</span>
                        </div>
                        <div className="p-6 bg-muted/20 border-l-4 border-red-500 rounded-r-lg">
                            <p className="text-muted-foreground">Do not distort, stretch, or rotate the logo in any way.</p>
                        </div>
                        <div className="p-6 bg-muted/20 border-l-4 border-red-500 rounded-r-lg">
                            <p className="text-muted-foreground">Do not change the colors of the logo components manually.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutBrandPage;
