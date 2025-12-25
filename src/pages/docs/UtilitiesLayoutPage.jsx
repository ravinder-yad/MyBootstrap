import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Wand2, Move, Eye } from 'lucide-react';

const UtilitiesLayoutPage = () => {
    return (
        <DocLayout
            title="Layout Utilities"
            description="For faster mobile-friendly and responsive development, Bootstrap includes dozens of utility classes for showing, hiding, aligning, and spacing content."
        >

            {/* 1. DISPLAY PROPERTY */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Eye size={24} /> Display Property</h2>
                <p className="text-muted-foreground mb-4">
                    Quickly toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {['.d-none', '.d-inline', '.d-inline-block', '.d-block', '.d-grid', '.d-flex'].map(cls => (
                        <div key={cls} className="p-3 bg-muted/40 border border-border rounded text-center text-sm font-mono text-primary">
                            {cls}
                        </div>
                    ))}
                </div>

                <CodeBlock language="html" code={`<div class="d-inline p-2 bg-primary text-white">d-inline</div>
<div class="d-inline p-2 bg-dark text-white">d-inline</div>`} />
            </section>

            {/* 2. SPACING */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Move size={24} /> Spacing (Margin & Padding)</h2>
                <p className="text-muted-foreground mb-4">
                    Assign responsive-friendly <code>margin</code> or <code>padding</code> values to an element or a subset of its sides with shorthand classes.
                </p>

                <div className="space-y-4">
                    <div className="flex gap-4">
                        <span className="font-bold min-w-[60px]">m -</span> <span>sets <code>margin</code></span>
                    </div>
                    <div className="flex gap-4">
                        <span className="font-bold min-w-[60px]">p -</span> <span>sets <code>padding</code></span>
                    </div>
                </div>

                <div className="mt-6 p-6 bg-muted/30 border border-border rounded-xl">
                    <h4 className="font-bold mb-2">Format</h4>
                    <code className="text-lg text-primary">{`{property}{sides}-{size}`}</code>
                    <p className="text-sm mt-2 text-muted-foreground">Example: <code>mt-5</code> (Margin Top 5), <code>px-3</code> (Padding X-axis 3)</p>
                </div>
            </section>

            {/* 3. VISIBILITY */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Visibility</h2>
                <p className="text-muted-foreground mb-4">
                    Control the visibility of elements without modifying their display.
                </p>
                <CodeBlock language="html" code={`<div class="visible">...</div>
<div class="invisible">...</div>`} />
            </section>

        </DocLayout>
    );
};

export default UtilitiesLayoutPage;
