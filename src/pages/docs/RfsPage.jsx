import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Scaling, Type, Settings2 } from 'lucide-react';

const RfsPage = () => {
    return (
        <DocLayout
            title="RFS (Responsive Font Sizes)"
            description="My Bootstrap's side project RFS serves to automatically adjust font sizes based on the screen width."
        >

            {/* 1. WHY RFS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Why RFS?</h2>
                <div className="bg-muted/30 p-6 rounded-xl border border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                        Traditionally, responsive typography required manually writing media queries for every font-size bump (e.g., 14px on mobile, 16px on tablet, 18px on desktop).
                    </p>
                    <div className="flex gap-4 items-center">
                        <Scaling className="text-primary" size={32} />
                        <div>
                            <h4 className="font-bold">Automated Scaling</h4>
                            <p className="text-xs text-muted-foreground">RFS calculates the appropriate font size for every viewport width automatically.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. HOW IT WORKS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">How It Works</h2>
                <p className="text-muted-foreground mb-4">
                    RFS is a unit resizing engine. It receives a static value (e.g., <code>2rem</code>) and converts it into a <code>calc()</code> function
                    that mixes <code>rem</code> and viewport units (<code>vw</code>). This creates a fluid scaling effect.
                </p>
            </section>

            {/* 3. SUPPORTED PROPERTIES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Supported Properties</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-card border border-border text-center">
                        <Type className="mx-auto mb-2 text-primary" size={24} />
                        <code className="text-sm font-bold">font-size</code>
                    </div>
                    <div className="p-4 rounded-lg bg-card border border-border text-center">
                        <span className="block mx-auto mb-2 text-2xl font-bold text-primary">↔</span>
                        <code className="text-sm font-bold">margin</code>
                    </div>
                    <div className="p-4 rounded-lg bg-card border border-border text-center">
                        <span className="block mx-auto mb-2 text-2xl font-bold text-primary">⤢</span>
                        <code className="text-sm font-bold">padding</code>
                    </div>
                </div>
            </section>

            {/* 4. CUSTOMIZATION */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Settings2 size={24} /> Customization</h2>
                <p className="text-muted-foreground mb-4">
                    You can disable RFS globally or adjust variables in your SCSS config.
                </p>
                <CodeBlock language="scss" code={`$enable-rfs: true;
$rfs-base-font-size: 1.25rem;
$rfs-font-size-unit: rem;
$rfs-breakpoint: 1200px;`} />
            </section>

        </DocLayout>
    );
};

export default RfsPage;
