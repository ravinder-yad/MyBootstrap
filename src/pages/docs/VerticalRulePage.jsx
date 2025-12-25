import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { GripVertical } from 'lucide-react';

const VerticalRulePage = () => {
    return (
        <DocLayout
            title="Vertical Rule"
            description="Use the self-closing &lt;div class=&quot;vr&quot;&gt;&lt;/div&gt; helper to create vertical dividers like the &lt;hr&gt; element."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><GripVertical size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    Vertical rules are inspired by the <code>&lt;hr&gt;</code> element, allowing you to create vertical dividers in common layouts.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="hstack gap-3 text-sm h-8">
                        <div className="flex items-center">First</div>
                        <div className="vr border-l border-border h-full mx-2"></div>
                        <div className="flex items-center">Second</div>
                        <div className="vr border-l border-border h-full mx-2"></div>
                        <div className="flex items-center">Third</div>
                    </div>
                </div>

                <div className="bg-yellow-500/10 p-4 border border-yellow-500/20 rounded-lg text-sm text-yellow-700 dark:text-yellow-400 mb-4">
                    <strong>Note:</strong> Vertical rules scale their height based on the parent container's height. You may need to set a height on the parent or the vr itself for it to appear correctly.
                </div>

                <CodeBlock language="html" code={`<div class="d-flex" style="height: 200px;">
  <div class="vr"></div>
</div>`} />
            </section>

            {/* 2. WITH STACKS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">With Stacks</h2>
                <p className="text-muted-foreground mb-4">
                    They can also be used in stacks:
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="hstack gap-3 py-2 bg-muted/20 border border-border rounded">
                        <div className="px-2">Item</div>
                        <div className="vr border-l border-border h-6"></div>
                        <div className="px-2">Item</div>
                    </div>
                </div>
                <CodeBlock language="html" code={`<div class="hstack gap-3">
  <div>Item</div>
  <div class="vr"></div>
  <div>Item</div>
</div>`} />
            </section>

        </DocLayout>
    );
};

export default VerticalRulePage;
