import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Square } from 'lucide-react';

const BordersPage = () => {
    return (
        <DocLayout
            title="Borders"
            description="Use border utilities to add or remove an element's borders. Choose from all borders or one at a time."
        >

            {/* 1. ADDITIVE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Square size={24} /> Additive</h2>
                <p className="text-muted-foreground mb-4">
                    Add borders to an element.
                </p>

                <div className="flex flex-wrap gap-4 mb-4">
                    <div className="w-24 h-24 bg-muted flex items-center justify-center border border-border">.border</div>
                    <div className="w-24 h-24 bg-muted flex items-center justify-center border-t border-border">.border-top</div>
                    <div className="w-24 h-24 bg-muted flex items-center justify-center border-e border-border">.border-end</div>
                    <div className="w-24 h-24 bg-muted flex items-center justify-center border-b border-border">.border-bottom</div>
                    <div className="w-24 h-24 bg-muted flex items-center justify-center border-s border-border">.border-start</div>
                </div>

                <CodeBlock language="html" code={`<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>`} />
            </section>

            {/* 2. SUBTRACTIVE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Subtractive</h2>
                <p className="text-muted-foreground mb-4">
                    Subtract borders from an element.
                </p>

                <div className="flex flex-wrap gap-4 mb-4">
                    <div className="w-24 h-24 bg-muted flex items-center justify-center border-0">.border-0</div>
                    <div className="w-24 h-24 bg-muted flex items-center justify-center border border-border border-t-0">.border-top-0</div>
                    <div className="w-24 h-24 bg-muted flex items-center justify-center border border-border border-r-0">.border-end-0</div>
                    <div className="w-24 h-24 bg-muted flex items-center justify-center border border-border border-b-0">.border-bottom-0</div>
                    <div className="w-24 h-24 bg-muted flex items-center justify-center border border-border border-l-0">.border-start-0</div>
                </div>
                <CodeBlock language="html" code={`<span class="border-0"></span>
<span class="border-top-0"></span>
<span class="border-end-0"></span>
<span class="border-bottom-0"></span>
<span class="border-start-0"></span>`} />
            </section>

            {/* 3. BORDER COLOR */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Border Color</h2>
                <p className="text-muted-foreground mb-4">
                    Change the border color using utilities built on our theme colors.
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                    <div className="w-24 h-24 flex items-center justify-center bg-muted border border-primary">.border-primary</div>
                    <div className="w-24 h-24 flex items-center justify-center bg-muted border border-secondary">.border-secondary</div>
                    <div className="w-24 h-24 flex items-center justify-center bg-muted border border-green-500">.border-success</div>
                    <div className="w-24 h-24 flex items-center justify-center bg-muted border border-red-500">.border-danger</div>
                </div>
                <CodeBlock language="html" code={`<span class="border border-primary"></span>
<span class="border border-secondary"></span>
<span class="border border-success"></span>
<span class="border border-danger"></span>`} />
            </section>

            {/* 4. ROUNDED */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Border Radius</h2>
                <p className="text-muted-foreground mb-4">
                    Add classes to an element to easily round its corners.
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                    <div className="w-24 h-24 bg-secondary rounded flex items-center justify-center text-xs">.rounded</div>
                    <div className="w-24 h-24 bg-secondary rounded-t flex items-center justify-center text-xs">.rounded-top</div>
                    <div className="w-24 h-24 bg-secondary rounded-r flex items-center justify-center text-xs">.rounded-end</div>
                    <div className="w-24 h-24 bg-secondary rounded-b flex items-center justify-center text-xs">.rounded-bottom</div>
                    <div className="w-24 h-24 bg-secondary rounded-l flex items-center justify-center text-xs">.rounded-start</div>
                    <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-xs">.rounded-circle</div>
                    <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-xs px-2 text-center">.rounded-pill (w/ width)</div>
                </div>
                <CodeBlock language="html" code={`<img src="..." class="rounded" alt="...">
<img src="..." class="rounded-top" alt="...">
<img src="..." class="rounded-circle" alt="...">
<span class="rounded-pill">...</span>`} />
            </section>

        </DocLayout>
    );
};

export default BordersPage;
