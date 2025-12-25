import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Layers, ArrowUpCircle } from 'lucide-react';

const ZIndexPage = () => {
    return (
        <DocLayout
            title="Z-index"
            description="Control the vertical layering of your content using our z-index architecture."
        >

            {/* 1. OVERVIEW */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Component Stack</h2>
                <div className="flex gap-6 items-start">
                    <div className="flex-1">
                        <p className="text-muted-foreground mb-6">
                            My Bootstrap utilizes a consistent z-index scale to manage layering of components like navigation bars, tooltips, popovers, and modals.
                        </p>

                        <ul className="space-y-3">
                            <li className="flex justify-between p-3 bg-muted/20 border border-border rounded">
                                <span>Dropdown</span>
                                <code className="text-primary font-bold">1000</code>
                            </li>
                            <li className="flex justify-between p-3 bg-muted/20 border border-border rounded">
                                <span>Sticky</span>
                                <code className="text-primary font-bold">1020</code>
                            </li>
                            <li className="flex justify-between p-3 bg-muted/20 border border-border rounded">
                                <span>Fixed</span>
                                <code className="text-primary font-bold">1030</code>
                            </li>
                            <li className="flex justify-between p-3 bg-muted/20 border border-border rounded">
                                <span>Modal Backdrop</span>
                                <code className="text-primary font-bold">1040</code>
                            </li>
                            <li className="flex justify-between p-3 bg-muted/20 border border-border rounded">
                                <span>Modal</span>
                                <code className="text-primary font-bold">1050</code>
                            </li>
                            <li className="flex justify-between p-3 bg-muted/20 border border-border rounded">
                                <span>Popover</span>
                                <code className="text-primary font-bold">1060</code>
                            </li>
                            <li className="flex justify-between p-3 bg-muted/20 border border-border rounded">
                                <span>Tooltip</span>
                                <code className="text-primary font-bold">1070</code>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 2. CUSTOM Z-INDEX */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><ArrowUpCircle size={24} /> Custom Utilities</h2>
                <p className="text-muted-foreground mb-4">
                    You can also use low-level z-index utility classes for simple layering.
                </p>
                <CodeBlock language="html" code={`<div class="z-0">...</div>
<div class="z-10">...</div>
<div class="z-20">...</div>
<div class="z-30">...</div>`} />
            </section>

        </DocLayout>
    );
};

export default ZIndexPage;
