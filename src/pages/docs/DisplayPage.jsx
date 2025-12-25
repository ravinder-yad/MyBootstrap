import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Monitor } from 'lucide-react';

const DisplayPage = () => {
    return (
        <DocLayout
            title="Display"
            description="Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing."
        >

            {/* 1. COMMON DISPLAY */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Monitor size={24} /> Common Display Values</h2>
                <p className="text-muted-foreground mb-4">
                    The <code>display</code> property accepts a handful of values.
                </p>

                <div className="space-y-4 mb-4">
                    <div className="p-4 bg-muted border border-border rounded">
                        <span className="d-inline bg-primary text-white p-2 rounded">d-inline</span>
                        <span className="d-inline bg-primary text-white p-2 rounded ml-2">d-inline</span>
                    </div>

                    <div className="p-4 bg-muted border border-border rounded">
                        <span className="d-block bg-primary text-white p-2 mb-2 rounded">d-block</span>
                        <span className="d-block bg-primary text-white p-2 rounded">d-block</span>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="d-inline p-2 bg-primary text-white">d-inline</div>
<div class="d-inline p-2 bg-dark text-white">d-inline</div>

<span class="d-block p-2 bg-primary text-white">d-block</span>
<span class="d-block p-2 bg-dark text-white">d-block</span>`} />
            </section>

            {/* 2. RESPONSIVE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Responsive</h2>
                <p className="text-muted-foreground mb-4">
                    For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-muted text-sm uppercase text-muted-foreground">
                                <th className="p-3 font-medium">Class</th>
                                <th className="p-3 font-medium">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border bg-card">
                            <tr>
                                <td className="p-3 font-mono text-sm text-primary">.d-none</td>
                                <td className="p-3 text-sm">Hidden on all</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-sm text-primary">.d-sm-none</td>
                                <td className="p-3 text-sm">Hidden on sm only</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-sm text-primary">.d-md-block</td>
                                <td className="p-3 text-sm">Visible as block on md+</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

        </DocLayout>
    );
};

export default DisplayPage;
