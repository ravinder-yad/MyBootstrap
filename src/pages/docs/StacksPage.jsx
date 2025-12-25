import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Layers } from 'lucide-react';

const StacksPage = () => {
    return (
        <DocLayout
            title="Stacks"
            description="Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever."
        >

            {/* 1. VERTICAL */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Layers size={24} /> Vertical</h2>
                <p className="text-muted-foreground mb-4">
                    Use <code>.vstack</code> to create a vertical layout. Stack items are full-width by default. Use <code>.gap-*</code> utilities to add space between items.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="vstack gap-3 w-1/2 mx-auto">
                        <div className="bg-muted p-2 border border-border rounded text-center">First item</div>
                        <div className="bg-muted p-2 border border-border rounded text-center">Second item</div>
                        <div className="bg-muted p-2 border border-border rounded text-center">Third item</div>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="vstack gap-3">
  <div class="bg-light border">First item</div>
  <div class="bg-light border">Second item</div>
  <div class="bg-light border">Third item</div>
</div>`} />
            </section>

            {/* 2. HORIZONTAL */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Horizontal</h2>
                <p className="text-muted-foreground mb-4">
                    Use <code>.hstack</code> for horizontal layouts. Stack items are vertically centered by default and only take up their necessary width. Use <code>.gap-*</code> utilities to add space between items.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="hstack gap-3 max-w-lg mx-auto">
                        <div className="bg-muted p-2 border border-border rounded text-center">First item</div>
                        <div className="bg-muted p-2 border border-border rounded text-center">Second item</div>
                        <div className="bg-muted p-2 border border-border rounded text-center">Third item</div>
                    </div>
                </div>
                <CodeBlock language="html" code={`<div class="hstack gap-3">
  <div class="bg-light border">First item</div>
  <div class="bg-light border">Second item</div>
  <div class="bg-light border">Third item</div>
</div>`} />
            </section>

            {/* 3. WITH MARGINS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">With Margins</h2>
                <p className="text-muted-foreground mb-4">
                    Using horizontal margin utilities like <code>.ms-auto</code> as spacers:
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="hstack gap-3 max-w-lg mx-auto">
                        <div className="bg-muted p-2 border border-border rounded text-center">First item</div>
                        <div className="bg-muted p-2 border border-border rounded text-center ms-auto">Second item</div>
                        <div className="vertical-rule border-l border-border h-full mx-2"></div>
                        <div className="bg-muted p-2 border border-border rounded text-center">Third item</div>
                    </div>
                </div>
                <CodeBlock language="html" code={`<div class="hstack gap-3">
  <div class="bg-light border">First item</div>
  <div class="bg-light border ms-auto">Second item</div>
  <div class="vr"></div>
  <div class="bg-light border">Third item</div>
</div>`} />
            </section>

        </DocLayout>
    );
};

export default StacksPage;
