import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { EyeOff } from 'lucide-react';

const OpacityPage = () => {
    return (
        <DocLayout
            title="Opacity"
            description="Control the opacity of elements."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><EyeOff size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    The <code>opacity</code> property sets the opacity level for an element. The opacity level describes the transparency level, where <code>1</code> is not transparent at all, <code>.5</code> is 50% visible, and <code>0</code> is completely transparent.
                </p>

                <div className="flex flex-wrap gap-4 mb-4">
                    <div className="bg-primary p-4 rounded text-white opacity-100">100%</div>
                    <div className="bg-primary p-4 rounded text-white opacity-75">75%</div>
                    <div className="bg-primary p-4 rounded text-white opacity-50">50%</div>
                    <div className="bg-primary p-4 rounded text-white opacity-25">25%</div>
                </div>

                <CodeBlock language="html" code={`<div class="opacity-100">...</div>
<div class="opacity-75">...</div>
<div class="opacity-50">...</div>
<div class="opacity-25">...</div>`} />
            </section>

        </DocLayout>
    );
};

export default OpacityPage;
