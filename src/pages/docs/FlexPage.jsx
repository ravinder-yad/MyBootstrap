import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Grid } from 'lucide-react';

const FlexPage = () => {
    return (
        <DocLayout
            title="Flex"
            description="Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities."
        >

            {/* 1. ENABLE FLEX BEHAVIORS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Grid size={24} /> Enable Flex behaviors</h2>
                <p className="text-muted-foreground mb-4">
                    Apply <code>display</code> utilities to create a flexbox container and transform common styles using our flexbox utilities.
                </p>

                <div className="p-6 bg-card border border-border rounded-xl mb-4">
                    <div className="d-flex p-2 bg-muted border border-border mb-3 rounded">
                        <div className="p-2 bg-muted-foreground/20 border border-border">Flex item 1</div>
                        <div className="p-2 bg-muted-foreground/20 border border-border">Flex item 2</div>
                        <div className="p-2 bg-muted-foreground/20 border border-border">Flex item 3</div>
                    </div>
                    <div className="d-inline-flex p-2 bg-muted border border-border rounded">
                        <div className="p-2 bg-muted-foreground/20 border border-border">Inline flex item 1</div>
                        <div className="p-2 bg-muted-foreground/20 border border-border">Inline flex item 2</div>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="d-flex p-2">I'm a flexbox container!</div>
<div class="d-inline-flex p-2">I'm an inline flexbox container!</div>`} />
            </section>

            {/* 2. DIRECTION */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Direction</h2>
                <div className="p-6 bg-card border border-border rounded-xl mb-4">
                    <div className="d-flex flex-row mb-3 bg-muted p-2 rounded">
                        <div className="p-2 bg-primary text-white border border-border">Flex item 1</div>
                        <div className="p-2 bg-primary text-white border border-border">Flex item 2</div>
                        <div className="p-2 bg-primary text-white border border-border">Flex item 3</div>
                    </div>
                    <div className="d-flex flex-row-reverse mb-3 bg-muted p-2 rounded">
                        <div className="p-2 bg-primary text-white border border-border">Flex item 1</div>
                        <div className="p-2 bg-primary text-white border border-border">Flex item 2</div>
                        <div className="p-2 bg-primary text-white border border-border">Flex item 3</div>
                    </div>
                </div>
                <CodeBlock language="html" code={`<div class="d-flex flex-row">...</div>
<div class="d-flex flex-row-reverse">...</div>`} />
            </section>

            {/* 3. JUSTIFY CONTENT */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Justify Content</h2>
                <div className="p-6 bg-card border border-border rounded-xl mb-4 space-y-3">
                    <div className="d-flex justify-content-start bg-muted p-2 rounded"><div className="p-2 bg-primary text-white">Start</div></div>
                    <div className="d-flex justify-content-end bg-muted p-2 rounded"><div className="p-2 bg-primary text-white">End</div></div>
                    <div className="d-flex justify-content-center bg-muted p-2 rounded"><div className="p-2 bg-primary text-white">Center</div></div>
                    <div className="d-flex justify-content-between bg-muted p-2 rounded"><div className="p-2 bg-primary text-white">Between</div><div className="p-2 bg-primary text-white">Between</div></div>
                    <div className="d-flex justify-content-around bg-muted p-2 rounded"><div className="p-2 bg-primary text-white">Around</div><div className="p-2 bg-primary text-white">Around</div></div>
                </div>
                <CodeBlock language="html" code={`<div class="d-flex justify-content-start">...</div>
<div class="d-flex justify-content-end">...</div>
<div class="d-flex justify-content-center">...</div>
<div class="d-flex justify-content-between">...</div>
<div class="d-flex justify-content-around">...</div>`} />
            </section>

        </DocLayout>
    );
};

export default FlexPage;
