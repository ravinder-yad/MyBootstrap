import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Table as TableIcon, Columns, ScrollText } from 'lucide-react';

const TablesPage = () => {
    return (
        <DocLayout
            title="Tables"
            description="Documentation and examples for opt-in styling of tables with My Bootstrap."
        >

            {/* 1. OVERVIEW */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><TableIcon size={24} /> Basic Table</h2>
                <div className="overflow-x-auto rounded-lg border border-border">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted text-muted-foreground font-semibold">
                            <tr>
                                <th className="px-4 py-3">#</th>
                                <th className="px-4 py-3">First</th>
                                <th className="px-4 py-3">Last</th>
                                <th className="px-4 py-3">Handle</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border bg-card">
                            <tr>
                                <td className="px-4 py-3 font-mono">1</td>
                                <td className="px-4 py-3">Mark</td>
                                <td className="px-4 py-3">Otto</td>
                                <td className="px-4 py-3">@mdo</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-mono">2</td>
                                <td className="px-4 py-3">Jacob</td>
                                <td className="px-4 py-3">Thornton</td>
                                <td className="px-4 py-3">@fat</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-mono">3</td>
                                <td className="px-4 py-3">Larry</td>
                                <td className="px-4 py-3">the Bird</td>
                                <td className="px-4 py-3">@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 2. VARIANTS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Columns size={24} /> Variants</h2>

                <div className="space-y-8">
                    {/* Striped */}
                    <div>
                        <h4 className="font-bold mb-2">Striped Rows</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Use <code>.table-striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.
                        </p>
                        <CodeBlock language="html" code={`<table class="table table-striped">
  ...
</table>`} />
                    </div>

                    {/* Hoverable */}
                    <div>
                        <h4 className="font-bold mb-2">Hoverable Rows</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Add <code>.table-hover</code> to enable a hover state on table rows within a <code>&lt;tbody&gt;</code>.
                        </p>
                        <CodeBlock language="html" code={`<table class="table table-hover">
  ...
</table>`} />
                    </div>
                </div>
            </section>

            {/* 3. RESPONSIVE TABLES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><ScrollText size={24} /> Responsive Tables</h2>
                <p className="text-muted-foreground mb-4">
                    Wrap any <code>.table</code> with <code>.table-responsive</code> to enable horizontal scrolling on small devices.
                </p>
                <div className="bg-yellow-500/10 p-4 border border-yellow-500/20 rounded-lg text-sm text-yellow-700 dark:text-yellow-400 mb-4">
                    <strong>Note:</strong> Vertical align is established by the table cell context, allowing accurate text alignment across responsive viewports.
                </div>
                <CodeBlock language="html" code={`<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>`} />
            </section>

        </DocLayout>
    );
};

export default TablesPage;
