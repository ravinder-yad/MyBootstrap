import React from 'react';
import { Target, Heart, Globe, Activity } from 'lucide-react';

const AboutOverviewPage = () => {
    return (
        <div className="space-y-12">
            {/* Introduction */}
            <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    My Bootstrap is an open-source UI framework focused on <strong className="text-foreground">consistency</strong>, <strong className="text-foreground">accessibility</strong>, and <strong className="text-foreground">developer experience</strong>.
                    Originally created as an experiment to understand the "why" behind modern UI libraries, it has evolved into a robust tool for building professional interfaces.
                </p>
            </section>

            {/* Project Goals */}
            <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Project Goals</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 border border-border rounded-lg bg-card/50">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <Target className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="text-lg font-medium mb-2">Simplicity & Clarity</h4>
                        <p className="text-muted-foreground">
                            APIs should be intuitive. If a feature requires reading 5 pages of docs to understand, it's too complex. We strive for "guessable" class names and behaviors.
                        </p>
                    </div>
                    <div className="p-6 border border-border rounded-lg bg-card/50">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                            <Activity className="w-5 h-5 text-blue-500" />
                        </div>
                        <h4 className="text-lg font-medium mb-2">Scalability</h4>
                        <p className="text-muted-foreground">
                            From a single landing page to a complex dashboard, the framework scales. Variables, utilities, and components work in harmony.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Core Values</h3>
                <ul className="space-y-4 text-muted-foreground list-disc pl-6">
                    <li>
                        <strong className="text-foreground">Open Collaboration:</strong> We believe the best software is built together. Feedback is fuel.
                    </li>
                    <li>
                        <strong className="text-foreground">Clear Documentation:</strong> Documentation isn't an afterthought; it's a feature. If it's not documented, it doesn't exist.
                    </li>
                    <li>
                        <strong className="text-foreground">Stable APIs:</strong> We respect your time. Breaking changes are a last resort and are always clearly communicated.
                    </li>
                </ul>
            </section>

            {/* Project Status */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-semibold text-foreground">Project Status</h3>
                    <span className="px-3 py-1 text-xs font-medium bg-green-500/10 text-green-500 rounded-full border border-green-500/20">Active</span>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg border border-border">
                    <p className="text-muted-foreground">
                        My Bootstrap is currently in <strong className="text-foreground">Active Development</strong>. We recommend using it for new projects, but please keep an eye on the release notes for strict versioning updates.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutOverviewPage;
