import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Grid, LayoutGrid } from 'lucide-react';

const CssGridPage = () => {
    return (
        <DocLayout
            title="CSS Grid"
            description="Unlock the power of the modern CSS Grid layout system for complex, two-dimensional layouts."
        >

            {/* 1. FLEXBOX VS GRID */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Grid size={24} /> Flexbox vs Grid</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-card border border-border rounded-xl">
                        <h4 className="font-bold text-lg mb-2 text-blue-600">Flexbox</h4>
                        <p className="text-sm text-muted-foreground mb-4">One-dimensional layout method for laying out items in rows <strong>OR</strong> columns.</p>
                        <div className="flex gap-2">
                            <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900 rounded"></div>
                            <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900 rounded"></div>
                            <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900 rounded"></div>
                        </div>
                    </div>
                    <div className="p-6 bg-card border border-border rounded-xl">
                        <h4 className="font-bold text-lg mb-2 text-purple-600">CSS Grid</h4>
                        <p className="text-sm text-muted-foreground mb-4">Two-dimensional layout method for laying out items in rows <strong>AND</strong> columns simultaneously.</p>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900 rounded"></div>
                            <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900 rounded"></div>
                            <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900 rounded"></div>
                            <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900 rounded"></div>
                            <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900 rounded"></div>
                            <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900 rounded"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><LayoutGrid size={24} /> Example Usage</h2>
                <p className="text-muted-foreground mb-4">
                    Enable grid display and use template columns to create a layout.
                </p>
                <CodeBlock language="html" code={`<div class="d-grid gap-3" style="grid-template-columns: 1fr 2fr;">
  <div class="p-2 bg-light border">Column 1</div>
  <div class="p-2 bg-light border">Column 2</div>
  <div class="p-2 bg-light border">Column 1</div>
  <div class="p-2 bg-light border">Column 2</div>
</div>`} />
            </section>

            {/* 3. OPT-IN */}
            <section className="mb-12">
                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                        <strong>Note:</strong> CSS Grid utilities are opt-in. You may need to enable them in your <code>_variables.scss</code> by setting <code>$enable-cssgrid: true</code>.
                    </p>
                </div>
            </section>

        </DocLayout>
    );
};

export default CssGridPage;
