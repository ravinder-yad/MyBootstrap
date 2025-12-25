import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Split, GripVertical, GripHorizontal } from 'lucide-react';

const GuttersPage = () => {
    return (
        <DocLayout
            title="Gutters"
            description="Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system."
        >

            {/* 1. OVERVIEW */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">How they work</h2>
                <p className="text-muted-foreground mb-4">
                    Gutters are the gaps between column content, created by horizontal padding. We set <code>padding-right</code> and <code>padding-left</code> on each column,
                    and use negative margin on the container row to ensure content on the edges aligns.
                </p>
                <div className="bg-yellow-500/10 p-4 border border-yellow-500/20 rounded-lg text-sm text-yellow-700 dark:text-yellow-400">
                    <strong>Note:</strong> Gutters do not affect column widths, they only affect the internal spacing.
                </div>
            </section>

            {/* 2. HORIZONTAL GUTTERS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><GripHorizontal size={24} /> Horizontal Gutters</h2>
                <p className="text-muted-foreground mb-4">
                    Use <code>.gx-*</code> classes to control the horizontal gutter widths.
                </p>

                {/* Visual Demo */}
                <div className="bg-muted/20 p-6 rounded-xl border border-border mb-4 overflow-hidden">
                    <div className="flex -mx-4">
                        <div className="w-1/2 px-4">
                            <div className="bg-card border border-border p-4 text-center">Custom Gutter (.gx-5)</div>
                        </div>
                        <div className="w-1/2 px-4">
                            <div className="bg-card border border-border p-4 text-center">Custom Gutter (.gx-5)</div>
                        </div>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="row gx-5">
  <div class="col">
    <div class="p-3 border bg-light">Custom column padding</div>
  </div>
  <div class="col">
    <div class="p-3 border bg-light">Custom column padding</div>
  </div>
</div>`} />
            </section>

            {/* 3. NO GUTTERS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Split size={24} /> No Gutters</h2>
                <p className="text-muted-foreground mb-4">
                    The classes <code>.g-0</code> is used to remove gutters from a row.
                </p>
                <CodeBlock language="html" code={`<div class="row g-0">
  <div class="col-sm-6 md-8">.col-sm-6 .md-8</div>
  <div class="col-6 md-4">.col-6 .md-4</div>
</div>`} />
            </section>

        </DocLayout>
    );
};

export default GuttersPage;
