import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { AlignCenter, MoveHorizontal, Baseline } from 'lucide-react';

const ColumnsPage = () => {
    return (
        <DocLayout
            title="Columns"
            description="Learn how to modify columns with a handful of options for alignment, ordering, and offsetting."
        >

            {/* 1. ALIGNMENT */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Baseline size={24} /> Vertical Alignment</h2>
                <p className="text-muted-foreground mb-4">
                    Use flexbox alignment utilities to vertically align columns.
                </p>

                {/* Visual Demo */}
                <div className="h-40 bg-muted/30 border border-border rounded-xl flex items-center justify-center gap-4 mb-4 p-4">
                    <div className="bg-primary/20 p-4 rounded text-xs">Aligned Center</div>
                    <div className="bg-primary/20 p-4 rounded text-xs self-start">Aligned Top</div>
                    <div className="bg-primary/20 p-4 rounded text-xs self-end">Aligned Bottom</div>
                </div>

                <CodeBlock language="html" code={`<div class="row align-items-center">
  <div class="col">
    One of three columns
  </div>
  <div class="col">
    One of three columns
  </div>
  <div class="col">
    One of three columns
  </div>
</div>`} />
            </section>

            {/* 2. REORDERING */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><MoveHorizontal size={24} /> Reordering</h2>
                <div className="bg-blue-500/5 p-4 rounded-xl border border-blue-500/20 mb-4">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                        Use <code>.order-</code> classes for controlling the visual order of your content.
                    </p>
                </div>
                <CodeBlock language="html" code={`<div class="container">
  <div class="row">
    <div class="col order-last">
      First in DOM, Ordered Last
    </div>
    <div class="col">
      Second in DOM, Unordered
    </div>
    <div class="col order-first">
      Third in DOM, Ordered First
    </div>
  </div>
</div>`} />
            </section>

            {/* 3. OFFSETTING */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Offsetting Columns</h2>
                <p className="text-muted-foreground mb-4">
                    Move columns to the right using <code>.offset-md-*</code> classes. These classes increase the left margin of a column by * columns.
                </p>
                <div className="bg-muted/20 p-4 rounded-xl border border-border mb-4">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-4 bg-primary/20 p-2 rounded text-center text-xs">.col-md-4</div>
                        <div className="col-span-4 col-start-9 bg-primary/20 p-2 rounded text-center text-xs">.col-md-4 .offset-md-4</div>
                    </div>
                </div>
                <CodeBlock language="html" code={`<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
</div>`} />
            </section>

        </DocLayout>
    );
};

export default ColumnsPage;
