import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { AlignCenterVertical } from 'lucide-react';

const VerticalAlignPage = () => {
    return (
        <DocLayout
            title="Vertical Align"
            description="Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements."
        >

            {/* 1. EXAMPLES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><AlignCenterVertical size={24} /> Examples</h2>
                <p className="text-muted-foreground mb-4">
                    Change the alignment of elements with the <code>vertical-alignment</code> utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements.
                </p>

                <div className="p-4 bg-card border border-border rounded-xl mb-4">
                    <span className="align-baseline bg-muted p-1 mr-1 rounded">baseline</span>
                    <span className="align-top bg-muted p-1 mr-1 rounded">top</span>
                    <span className="align-middle bg-muted p-1 mr-1 rounded">middle</span>
                    <span className="align-bottom bg-muted p-1 mr-1 rounded">bottom</span>
                    <span className="align-text-top bg-muted p-1 mr-1 rounded">text-top</span>
                    <span className="align-text-bottom bg-muted p-1 mr-1 rounded">text-bottom</span>
                </div>

                <div className="p-4 bg-muted border border-border rounded-xl mt-4">
                    <table className="h-24">
                        <tbody>
                            <tr>
                                <td className="align-baseline p-2 border border-black dark:border-white">baseline</td>
                                <td className="align-top p-2 border border-black dark:border-white">top</td>
                                <td className="align-middle p-2 border border-black dark:border-white">middle</td>
                                <td className="align-bottom p-2 border border-black dark:border-white">bottom</td>
                                <td className="align-text-top p-2 border border-black dark:border-white">text-top</td>
                                <td className="align-text-bottom p-2 border border-black dark:border-white">text-bottom</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <CodeBlock language="html" code={`<span class="align-baseline">baseline</span>
<span class="align-top">top</span>
<span class="align-middle">middle</span>
<span class="align-bottom">bottom</span>
<span class="align-text-top">text-top</span>
<span class="align-text-bottom">text-bottom</span>`} />
            </section>

        </DocLayout>
    );
};

export default VerticalAlignPage;
