import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Grid3X3, Columns, ArrowRightLeft } from 'lucide-react';

const GridPage = () => {
    return (
        <DocLayout
            title="Grid System"
            description="Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system."
        >

            {/* 1. CORE CONCEPTS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">How it works</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li><strong>Rows</strong> are wrappers for columns. Each column has horizontal padding (gutter) for controlling the space between them.</li>
                    <li><strong>Columns</strong> are incredibly flexible. There are 12 template columns available per row.</li>
                    <li><strong>Gap</strong> utilities can be used to control gutters.</li>
                </ul>

                {/* Visual Grid Demo */}
                <div className="grid grid-cols-12 gap-4 p-4 bg-muted/20 border border-border rounded-xl mb-6 text-center text-xs font-mono font-bold text-primary">
                    <div className="col-span-1 bg-primary/10 border border-primary/30 p-2 rounded">1</div>
                    <div className="col-span-1 bg-primary/10 border border-primary/30 p-2 rounded">1</div>
                    <div className="col-span-1 bg-primary/10 border border-primary/30 p-2 rounded">1</div>
                    <div className="col-span-1 bg-primary/10 border border-primary/30 p-2 rounded">1</div>
                    <div className="col-span-1 bg-primary/10 border border-primary/30 p-2 rounded">1</div>
                    <div className="col-span-1 bg-primary/10 border border-primary/30 p-2 rounded">1</div>
                    <div className="col-span-1 bg-primary/10 border border-primary/30 p-2 rounded">1</div>
                    <div className="col-span-1 bg-primary/10 border border-primary/30 p-2 rounded">1</div>
                    <div className="col-span-1 bg-primary/10 border border-primary/30 p-2 rounded">1</div>
                    <div className="col-span-1 bg-primary/10 border border-primary/30 p-2 rounded">1</div>
                    <div className="col-span-1 bg-primary/10 border border-primary/30 p-2 rounded">1</div>
                    <div className="col-span-1 bg-primary/10 border border-primary/30 p-2 rounded">1</div>

                    <div className="col-span-4 bg-blue-500/10 border border-blue-500/30 text-blue-600 p-2 rounded">col-4</div>
                    <div className="col-span-4 bg-blue-500/10 border border-blue-500/30 text-blue-600 p-2 rounded">col-4</div>
                    <div className="col-span-4 bg-blue-500/10 border border-blue-500/30 text-blue-600 p-2 rounded">col-4</div>

                    <div className="col-span-6 bg-green-500/10 border border-green-500/30 text-green-600 p-2 rounded">col-6</div>
                    <div className="col-span-6 bg-green-500/10 border border-green-500/30 text-green-600 p-2 rounded">col-6</div>
                </div>
            </section>

            {/* 2. BASIC USAGE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Grid3X3 size={24} /> Basic Usage</h2>
                <p className="text-muted-foreground mb-4">
                    Grid columns without a specified width will automatically layout as equal width columns.
                </p>
                <CodeBlock language="html" code={`<div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>`} />
            </section>

            {/* 3. SETTING WIDTHS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Columns size={24} /> Setting Widths</h2>
                <p className="text-muted-foreground mb-4">
                    Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it.
                </p>
                <CodeBlock language="html" code={`<div class="container">
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-6">
      2 of 3 (Wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>`} />
            </section>

        </DocLayout>
    );
};

export default GridPage;
