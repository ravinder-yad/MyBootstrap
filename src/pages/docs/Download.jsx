import React, { useState } from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Package, Globe, FileCode, Smartphone, Layout } from 'lucide-react';

const Download = () => {
    const [pm, setPm] = useState('npm');

    const installHelpers = {
        npm: 'npm install my-bootstrap',
        yarn: 'yarn add my-bootstrap',
        pnpm: 'pnpm add my-bootstrap'
    };

    return (
        <DocLayout
            title="Download"
            description="Choose the best installation method for your project. From a quick CDN link to a full-featured React setup."
        >

            {/* 1. CDN (Beginner Friendly) */}
            <section className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-green-500/10 text-green-600">
                        <Globe size={20} />
                    </div>
                    <h2 className="text-2xl font-bold m-0 border-none">CDN (Quick Start)</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                    The fastest way to get started. Just copy and paste these links into your <code>&lt;head&gt;</code> tag. No complex installation required.
                </p>
                <h3 className="text-sm font-bold text-foreground mb-2 mt-6">CSS</h3>
                <CodeBlock language="html" code={`<link rel="stylesheet" href="https://cdn.mybootstrap.com/v1.0.0/core.css">`} />

                <h3 className="text-sm font-bold text-foreground mb-2 mt-6">JavaScript</h3>
                <CodeBlock language="html" code={`<script src="https://cdn.mybootstrap.com/v1.0.0/core.js"></script>`} />
            </section>

            <hr className="my-10 border-border/40" />

            {/* 2. PACKAGE MANAGER */}
            <section className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600">
                        <Package size={20} />
                    </div>
                    <h2 className="text-2xl font-bold m-0 border-none">Package Manager</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                    Install via package manager for full control, bundling (Webpack/Vite), and customizing Sass variables.
                </p>

                {/* Tabs */}
                <div className="flex items-center gap-2 mb-0 border-b border-border">
                    {['npm', 'yarn', 'pnpm'].map((manager) => (
                        <button
                            key={manager}
                            onClick={() => setPm(manager)}
                            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${pm === manager
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                                }`}
                        >
                            {manager}
                        </button>
                    ))}
                </div>
                <div className="mt-0">
                    <CodeBlock language="bash" code={installHelpers[pm]} />
                </div>
            </section>

            {/* 3. REACT USAGE */}
            <section className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600">
                        <FileCode size={20} />
                    </div>
                    <h2 className="text-2xl font-bold m-0 border-none">React Usage</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                    My Bootstrap is built for React. Use it directly in your JSX without any extra wrappers.
                </p>

                <CodeBlock language="jsx" code={`import { Button, Card } from 'my-bootstrap';

function App() {
  return (
    <Card className="p-4">
      <Button variant="primary">Hello World</Button>
    </Card>
  );
}`} />
            </section>

            {/* 4. STARTER TEMPLATES */}
            <section className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
                <h2 className="text-2xl font-bold mb-6">Starter Templates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { title: "HTML Starter", desc: "Basic HTML5 index page with CDN links included.", icon: Layout },
                        { title: "React + Vite", desc: "Complete React setup with My Bootstrap configured.", icon: Smartphone },
                    ].map((template, idx) => (
                        <div key={idx} className="p-6 rounded-xl border border-border bg-card hover:bg-muted/30 hover:border-primary/30 transition-all flex flex-col gap-4 group">
                            <div className="w-10 h-10 rounded-lg bg-secondary group-hover:bg-primary/10 group-hover:text-primary transition-colors flex items-center justify-center text-foreground">
                                <template.icon size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{template.title}</h3>
                                <p className="text-sm text-muted-foreground">{template.desc}</p>
                            </div>
                            <button className="mt-auto w-full py-2 bg-muted hover:bg-primary hover:text-primary-foreground text-sm font-medium rounded-lg transition-colors border border-border group-hover:border-primary/50">
                                Download .zip
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. VERSION INFO */}
            <section className="mb-12 bg-muted/20 p-6 rounded-xl border border-border animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
                <h2 className="text-lg font-bold mb-4">Version Information</h2>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Current Version</span>
                        <span className="font-mono font-bold bg-primary/10 text-primary px-2 py-0.5 rounded">v1.0.0</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Release Date</span>
                        <span>December 25, 2025</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">License</span>
                        <span>MIT</span>
                    </div>
                </div>
            </section>

        </DocLayout>
    );
};

export default Download;
