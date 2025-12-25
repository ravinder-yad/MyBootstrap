import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { ToggleRight, CheckCircle2, XCircle } from 'lucide-react';

const OptionsPage = () => {
    return (
        <DocLayout
            title="Options"
            description="Customize My Bootstrap with built-in global Sass variables to easily toggle global CSS preferences."
        >

            {/* 1. OVERVIEW */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Global Switches</h2>
                <p className="text-muted-foreground mb-4">
                    Quickly enable or disable global features like gradients, shadows, and transitions by modifying the boolean variables in your <code>_variables.scss</code> file.
                </p>
            </section>

            {/* 2. OPTIONS TABLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Available Options</h2>
                <div className="overflow-x-auto rounded-xl border border-border">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted text-muted-foreground uppercase font-semibold">
                            <tr>
                                <th className="px-6 py-4">Variable</th>
                                <th className="px-6 py-4">Default</th>
                                <th className="px-6 py-4">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border bg-card">
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-primary">$enable-rounded</td>
                                <td className="px-6 py-4 font-mono text-green-500">true</td>
                                <td className="px-6 py-4">Enables predefined <code>border-radius</code> styles on components.</td>
                            </tr>
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-primary">$enable-shadows</td>
                                <td className="px-6 py-4 font-mono text-red-500">false</td>
                                <td className="px-6 py-4">Enables <code>box-shadow</code> styles for common components (e.g., buttons, cards).</td>
                            </tr>
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-primary">$enable-gradients</td>
                                <td className="px-6 py-4 font-mono text-red-500">false</td>
                                <td className="px-6 py-4">Enables background gradients via <code>background-image</code> utilities.</td>
                            </tr>
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-primary">$enable-transitions</td>
                                <td className="px-6 py-4 font-mono text-green-500">true</td>
                                <td className="px-6 py-4">Enables semantic architectural transitions.</td>
                            </tr>
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-primary">$enable-dark-mode</td>
                                <td className="px-6 py-4 font-mono text-green-500">true</td>
                                <td className="px-6 py-4">Compile CSS with dark mode media queries and overrides.</td>
                            </tr>
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-primary">$enable-grid-classes</td>
                                <td className="px-6 py-4 font-mono text-green-500">true</td>
                                <td className="px-6 py-4">Generates all grid layout classes.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 3. USAGE EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><ToggleRight size={24} /> Usage</h2>
                <p className="text-muted-foreground mb-4">
                    To change an option, simply set the variable <strong>before</strong> importing Bootstrap.
                </p>
                <CodeBlock language="scss" code={`$enable-shadows: true;
$enable-gradients: true;

@import "my-bootstrap/scss/bootstrap";`} />
            </section>

        </DocLayout>
    );
};

export default OptionsPage;
