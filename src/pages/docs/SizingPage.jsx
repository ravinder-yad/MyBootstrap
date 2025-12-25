import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Scaling } from 'lucide-react';

const SizingPage = () => {
    return (
        <DocLayout
            title="Sizing"
            description="Easily make an element as wide or as tall as you like using width and height utilities."
        >

            {/* 1. RELATIVE TO PARENT */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Scaling size={24} /> Relative to Parent</h2>
                <p className="text-muted-foreground mb-4">
                    Width and height utilities are generated from the utility API in <code>_utilities.scss</code>. Includes support for <code>25%</code>, <code>50%</code>, <code>75%</code>, <code>100%</code>, and <code>auto</code> by default.
                </p>

                <div className="space-y-4 mb-4">
                    <div className="w-25 p-3 bg-muted border rounded">Width 25%</div>
                    <div className="w-50 p-3 bg-muted border rounded">Width 50%</div>
                    <div className="w-75 p-3 bg-muted border rounded">Width 75%</div>
                    <div className="w-100 p-3 bg-muted border rounded">Width 100%</div>
                    <div className="w-auto p-3 bg-muted border rounded inline-block">Width auto</div>
                </div>

                <CodeBlock language="html" code={`<div class="w-25 p-3">Width 25%</div>
<div class="w-50 p-3">Width 50%</div>
<div class="w-75 p-3">Width 75%</div>
<div class="w-100 p-3">Width 100%</div>
<div class="w-auto p-3">Width auto</div>`} />
            </section>

            {/* 2. RELATIVE TO VIEWPORT */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Relative to Viewport</h2>
                <p className="text-muted-foreground mb-4">
                    You can also use utilities to set the width and height relative to the viewport.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="min-vw-100 p-3 bg-muted border border-border rounded text-center">Min-width 100vw</div>
                    <div className="min-vh-100 p-3 bg-muted border border-border rounded text-center">Min-height 100vh</div>
                    <div className="vw-100 p-3 bg-muted border border-border rounded text-center">Width 100vw</div>
                    <div className="vh-100 p-3 bg-muted border border-border rounded text-center">Height 100vh</div>
                </div>
                <CodeBlock language="html" code={`<div class="min-vw-100">Min-width 100vw</div>
<div class="min-vh-100">Min-height 100vh</div>
<div class="vw-100">Width 100vw</div>
<div class="vh-100">Height 100vh</div>`} />
            </section>

        </DocLayout>
    );
};

export default SizingPage;
