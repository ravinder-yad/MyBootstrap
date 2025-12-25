import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Box, Maximize2, LayoutTemplate } from 'lucide-react';

const ContainersPage = () => {
    return (
        <DocLayout
            title="Containers"
            description="Containers are the fundamental building blocks of Bootstrap that contain, pad, and align your content within a given device or viewport."
        >

            {/* 1. OVERVIEW */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">How they work</h2>
                <p className="text-muted-foreground mb-6">
                    Containers are the most basic layout element in My Bootstrap and are <strong>required when using our default grid system</strong>.
                    They serve as a wrapper for content, providing padding and responsive max-width.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-card border border-border rounded-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <Box className="text-primary" />
                            <h4 className="font-bold">Default Container</h4>
                        </div>
                        <code className="text-sm bg-muted px-2 py-1 rounded">.container</code>
                        <p className="text-sm text-muted-foreground mt-2">
                            Sets a <code>max-width</code> at each responsive breakpoint.
                        </p>
                    </div>

                    <div className="p-6 bg-card border border-border rounded-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <Maximize2 className="text-blue-500" />
                            <h4 className="font-bold">Fluid Container</h4>
                        </div>
                        <code className="text-sm bg-muted px-2 py-1 rounded">.container-fluid</code>
                        <p className="text-sm text-muted-foreground mt-2">
                            Always strict to <code>width: 100%</code> at all breakpoints.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. VISUAL DEMO */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Visual Example</h2>
                <div className="space-y-4">
                    {/* Default */}
                    <div className="w-full bg-muted/40 p-4 rounded-lg border border-border border-dashed">
                        <div className="bg-primary/20 border border-primary/50 text-primary p-4 rounded text-center w-3/4 mx-auto">
                            .container (Centered, Max-Width)
                        </div>
                    </div>
                    {/* Fluid */}
                    <div className="w-full bg-muted/40 p-4 rounded-lg border border-border border-dashed">
                        <div className="bg-blue-500/20 border border-blue-500/50 text-blue-700 dark:text-blue-300 p-4 rounded text-center w-full">
                            .container-fluid (Full Width)
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CODE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><LayoutTemplate size={24} /> Usage</h2>
                <CodeBlock language="html" code={`<!-- Default container -->
<div class="container">
  <!-- Content here -->
</div>

<!-- Full width container -->
<div class="container-fluid">
  <!-- Content here -->
</div>`} />
            </section>

        </DocLayout>
    );
};

export default ContainersPage;
