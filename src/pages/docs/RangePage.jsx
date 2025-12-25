import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { SlidersHorizontal } from 'lucide-react';

const RangePage = () => {
    return (
        <DocLayout
            title="Range"
            description="Use our custom range inputs for consistent cross-browser styling and built-in customization."
        >

            {/* 1. OVERVIEW */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><SlidersHorizontal size={24} /> Example Range</h2>
                <p className="text-muted-foreground mb-4">
                    Create custom <code>&lt;input type="range"&gt;</code> controls with <code>.form-range</code>.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <label htmlFor="customRange1" className="form-label text-sm font-medium mb-2 block">Example range</label>
                    <input type="range" className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary" id="customRange1" />
                </div>

                <CodeBlock language="html" code={`<label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1">`} />
            </section>

            {/* 2. MIN AND MAX */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Min and Max</h2>
                <p className="text-muted-foreground mb-4">
                    Range inputs have implicit values for <code>min</code> and <code>max</code>—0 and 100, respectively.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <label htmlFor="customRange2" className="form-label text-sm font-medium mb-2 block">Min (0) to Max (5)</label>
                    <input type="range" className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary" min="0" max="5" id="customRange2" />
                </div>

                <CodeBlock language="html" code={`<label for="customRange2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2">`} />
            </section>

            {/* 3. STEPS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Steps</h2>
                <p className="text-muted-foreground mb-4">
                    By default, range inputs snap to integer values. To change this, you can specify a <code>step</code> value.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <label htmlFor="customRange3" className="form-label text-sm font-medium mb-2 block">Step (0.5)</label>
                    <input type="range" className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary" min="0" max="5" step="0.5" id="customRange3" />
                </div>

                <CodeBlock language="html" code={`<label for="customRange3" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">`} />
            </section>

        </DocLayout>
    );
};

export default RangePage;
