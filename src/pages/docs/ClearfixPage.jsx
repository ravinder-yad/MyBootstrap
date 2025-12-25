import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Eraser } from 'lucide-react';

const ClearfixPage = () => {
    return (
        <DocLayout
            title="Clearfix"
            description="Quickly and easily clear floated content within a container by adding a clearfix utility."
        >

            {/* 1. OVERVIEW */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Eraser size={24} /> Overview</h2>
                <p className="text-muted-foreground mb-4">
                    Easily clear <code>float</code>s by adding <code>.clearfix</code> to the parent element. Can also be used as a mixin.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="bg-primary/20 clearfix p-4 mb-4 rounded">
                        <button className="btn btn-secondary float-start bg-secondary text-secondary-foreground px-4 py-2 rounded">Example Button floated left</button>
                        <button className="btn btn-secondary float-end bg-secondary text-secondary-foreground px-4 py-2 rounded">Example Button floated right</button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Without the clearfix, the parent container might collapse if it only contains floated children.
                    </p>
                </div>

                <CodeBlock language="html" code={`<div class="clearfix">...</div>`} />
            </section>

            {/* 2. CSS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">CSS Rule</h2>
                <div className="bg-muted p-4 rounded-lg border border-border text-sm font-mono">
                    .clearfix::after &#123;<br />
                    &nbsp;&nbsp;display: block;<br />
                    &nbsp;&nbsp;clear: both;<br />
                    &nbsp;&nbsp;content: "";<br />
                    &#125;
                </div>
            </section>

        </DocLayout>
    );
};

export default ClearfixPage;
