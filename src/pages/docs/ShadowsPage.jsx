import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Layers } from 'lucide-react';

const ShadowsPage = () => {
    return (
        <DocLayout
            title="Shadows"
            description="Add or remove shadows to elements with box-shadow utilities."
        >

            {/* 1. EXAMPLES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Layers size={24} /> Examples</h2>
                <p className="text-muted-foreground mb-4">
                    While shadows on components are disabled by default in Bootstrap and can be enabled via <code>$enable-shadows</code>, you can also quickly add or remove a shadow with our <code>box-shadow</code> utility classes.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
                    <div className="shadow-none p-3 mb-5 bg-card rounded">No shadow</div>
                    <div className="shadow-sm p-3 mb-5 bg-card rounded">Small shadow</div>
                    <div className="shadow p-3 mb-5 bg-card rounded">Regular shadow</div>
                    <div className="shadow-lg p-3 mb-5 bg-card rounded">Large shadow</div>
                </div>

                <CodeBlock language="html" code={`<div class="shadow-none p-3 mb-5 bg-white rounded">No shadow</div>
<div class="shadow-sm p-3 mb-5 bg-white rounded">Small shadow</div>
<div class="shadow p-3 mb-5 bg-white rounded">Regular shadow</div>
<div class="shadow-lg p-3 mb-5 bg-white rounded">Large shadow</div>`} />
            </section>

        </DocLayout>
    );
};

export default ShadowsPage;
