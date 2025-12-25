import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { BoxSelect } from 'lucide-react';

const OverflowPage = () => {
    return (
        <DocLayout
            title="Overflow"
            description="Use these shorthand utilities for quickly configuring how content overflows an element."
        >

            {/* 1. EXAMPLES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><BoxSelect size={24} /> Examples</h2>
                <p className="text-muted-foreground mb-4">
                    Adjust the <code>overflow</code> property on the fly with four default values and classes. These classes are not responsive by default.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="overflow-auto p-3 h-24 bg-muted border border-border rounded">
                        <code className="block mb-2">.overflow-auto</code>
                        <div className="text-sm">This is an example of using <code>.overflow-auto</code> on an element with set dimensions.</div>
                    </div>
                    <div className="overflow-hidden p-3 h-24 bg-muted border border-border rounded">
                        <code className="block mb-2">.overflow-hidden</code>
                        <div className="text-sm">This is an example of using <code>.overflow-hidden</code> on an element with set dimensions.</div>
                    </div>
                    <div className="overflow-visible p-3 h-24 bg-muted border border-border rounded">
                        <code className="block mb-2">.overflow-visible</code>
                        <div className="text-sm">This is an example of using <code>.overflow-visible</code> on an element with set dimensions.</div>
                    </div>
                    <div className="overflow-scroll p-3 h-24 bg-muted border border-border rounded">
                        <code className="block mb-2">.overflow-scroll</code>
                        <div className="text-sm">This is an example of using <code>.overflow-scroll</code> on an element with set dimensions.</div>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
<div class="overflow-visible">...</div>
<div class="overflow-scroll">...</div>`} />
            </section>

        </DocLayout>
    );
};

export default OverflowPage;
