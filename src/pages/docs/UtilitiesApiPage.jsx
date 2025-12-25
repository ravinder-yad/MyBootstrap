import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Terminal, Smartphone } from 'lucide-react';

const UtilitiesApiPage = () => {
    return (
        <DocLayout
            title="Utilities API"
            description="Understand the naming convention and logic behind the utility classes."
        >

            {/* 1. NAMING CONVENTION */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Terminal size={24} /> Naming Convention</h2>
                <p className="text-muted-foreground mb-4">
                    The standard naming format for most utilities is <code>.property-value</code> or <code>.property-variant-value</code>.
                </p>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-muted text-sm uppercase text-muted-foreground">
                                <th className="p-3 font-medium">Class</th>
                                <th className="p-3 font-medium">Property</th>
                                <th className="p-3 font-medium">Value</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border bg-card">
                            <tr>
                                <td className="p-3 font-mono text-sm text-primary">.opacity-50</td>
                                <td className="p-3 text-sm">opacity</td>
                                <td className="p-3 text-sm font-mono">0.5</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-sm text-primary">.d-flex</td>
                                <td className="p-3 text-sm">display</td>
                                <td className="p-3 text-sm font-mono">flex</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-sm text-primary">.text-center</td>
                                <td className="p-3 text-sm">text-align</td>
                                <td className="p-3 text-sm font-mono">center</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-sm text-primary">.bg-primary</td>
                                <td className="p-3 text-sm">background-color</td>
                                <td className="p-3 text-sm font-mono">var(--bs-primary)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 2. RESPONSIVE VARIANTS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Smartphone size={24} /> Responsive Variants</h2>
                <p className="text-muted-foreground mb-4">
                    Responsive utilities allow you to apply a specific class at a specific breakpoint and up. The syntax is <code>.property&#123;-breakpoint&#125;-&#123;value&#125;</code>.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <p className="mb-2"><strong className="text-foreground">Example:</strong> Display property</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><code>.d-none</code> - Hide on all screens</li>
                        <li><code>.d-sm-block</code> - Show as block on sm (576px) and up</li>
                        <li><code>.d-md-flex</code> - Display as flex on md (768px) and up</li>
                        <li><code>.d-lg-none</code> - Hide on lg (992px) and up</li>
                    </ul>
                </div>
                <CodeBlock language="html" code={`<div class="d-none d-lg-block">
  Visible only on desktop (lg and up)
</div>
<div class="d-block d-md-none">
  Visible only on mobile (below md)
</div>`} />
            </section>

            {/* 3. STATE VARIANTS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">State Variants</h2>
                <p className="text-muted-foreground mb-4">
                    Some utilities include state-based variants like hover and focus. These are typically documented in their respective sections (e.g., Colored Links).
                </p>
                <div className="p-4 bg-muted border border-border rounded-lg text-sm text-muted-foreground">
                    Example: <code>.link-primary</code> vs <code>.link-primary:hover</code> behavior.
                </div>
            </section>

        </DocLayout>
    );
};

export default UtilitiesApiPage;
