import React from 'react';
import { Box, Layers, Users, Code, ArrowRight } from 'lucide-react';

const IntegrationPatternsPage = () => {
    const PatternCard = ({ icon: Icon, title, desc, children }) => (
        <div className="p-6 bg-card border border-border rounded-xl space-y-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Icon size={20} />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{desc}</p>
            {children}
        </div>
    );

    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    Learn how fit "My Bootstrap" into real-world projects. Whether you're using React, static HTML, or a monorepo, we have a pattern for you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* React Pattern */}
                <PatternCard
                    icon={Code}
                    title="Modern Frontend (React/Vue)"
                    desc="Install as a dependency and import components directly."
                >
                    <div className="p-4 bg-secondary/30 rounded-lg text-sm font-mono space-y-2">
                        <div className="text-muted-foreground">// 1. Install</div>
                        <div className="text-foreground">npm install @my-bootstrap/core</div>
                        <div className="text-muted-foreground mt-3">// 2. Use</div>
                        <div className="text-foreground">import &#123; Button &#125; from '@my-bootstrap/core';</div>
                    </div>
                </PatternCard>

                {/* HTML Pattern */}
                <PatternCard
                    icon={Box}
                    title="Legacy / Static HTML"
                    desc="Use the CDN link or compiled CSS/JS bundle."
                >
                    <div className="p-4 bg-secondary/30 rounded-lg text-sm font-mono space-y-2">
                        <div className="text-muted-foreground">&lt;!-- CSS --&gt;</div>
                        <div className="text-foreground text-xs break-all">&lt;link rel="stylesheet" href="https://cdn.my-bootstrap.com/v1/core.css" /&gt;</div>
                        <div className="text-muted-foreground mt-3">&lt;!-- JS --&gt;</div>
                        <div className="text-foreground text-xs break-all">&lt;script src="https://cdn.my-bootstrap.com/v1/core.js"&gt;&lt;/script&gt;</div>
                    </div>
                </PatternCard>

                {/* Design System Pattern */}
                <PatternCard
                    icon={Layers}
                    title="Design System Layer"
                    desc="Extend the configuration to create a branded internal library."
                >
                    <div className="flex items-center gap-2 justify-center py-4">
                        <div className="bg-card border border-border px-3 py-2 rounded text-xs">My Bootstrap</div>
                        <ArrowRight size={14} className="text-muted-foreground" />
                        <div className="bg-primary/20 border border-primary/30 px-3 py-2 rounded text-xs font-semibold">Company UI</div>
                        <ArrowRight size={14} className="text-muted-foreground" />
                        <div className="bg-card border border-border px-3 py-2 rounded text-xs">App 1, App 2...</div>
                    </div>
                </PatternCard>

                {/* Teams Pattern */}
                <PatternCard
                    icon={Users}
                    title="Multi-Team Architecture"
                    desc="Share a common config package across different repositories."
                >
                    <div className="flex flex-col items-center gap-2 py-2">
                        <div className="bg-secondary px-4 py-1.5 rounded-full text-xs font-medium">Shared Config Repo</div>
                        <div className="w-0.5 h-4 bg-border"></div>
                        <div className="flex gap-4">
                            <div className="bg-card border border-border px-3 py-1.5 rounded text-xs text-muted-foreground">Team A</div>
                            <div className="bg-card border border-border px-3 py-1.5 rounded text-xs text-muted-foreground">Team B</div>
                        </div>
                    </div>
                </PatternCard>
            </div>
        </div>
    );
};

export default IntegrationPatternsPage;
