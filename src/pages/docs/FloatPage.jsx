import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { ArrowLeftRight } from 'lucide-react';

const FloatPage = () => {
    return (
        <DocLayout
            title="Float"
            description="Toggle floats on any element, across any breakpoint, using our responsive float utilities."
        >

            {/* 1. OVERVIEW */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><ArrowLeftRight size={24} /> Overview</h2>
                <p className="text-muted-foreground mb-4">
                    These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the CSS <code>float</code> property. <code>!important</code> is included to avoid specificity issues.
                </p>

                <div className="p-6 bg-card border border-border rounded-xl mb-4">
                    <div className="float-start p-2 bg-primary text-white rounded mb-2">Float start on all Viewport sizes</div><br />
                    <div className="float-end p-2 bg-secondary text-secondary-foreground rounded mb-2">Float end on all Viewport sizes</div><br />
                    <div className="float-none p-2 bg-muted rounded">Don't float on all Viewport sizes</div>
                </div>

                <CodeBlock language="html" code={`<div class="float-start">Float start on all viewport sizes</div>
<div class="float-end">Float end on all viewport sizes</div>
<div class="float-none">Don't float on all viewport sizes</div>`} />
            </section>

            {/* 2. RESPONSIVE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Responsive</h2>
                <p className="text-muted-foreground mb-4">
                    Responsive variations also exist for each <code>float</code> value.
                </p>
                <div className="p-4 bg-muted border border-border rounded-lg text-sm font-mono">
                    .float-sm-start<br />
                    .float-md-end<br />
                    .float-lg-none<br />
                    ...
                </div>
            </section>

        </DocLayout>
    );
};

export default FloatPage;
