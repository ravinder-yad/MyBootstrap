import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Type } from 'lucide-react';

const TextPage = () => {
    return (
        <DocLayout
            title="Text"
            description="Documentation and examples for common text utilities to control alignment, wrapping, weight, and more."
        >

            {/* 1. TEXT ALIGNMENT */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Type size={24} /> Text Alignment</h2>
                <div className="p-4 bg-card border border-border rounded-xl mb-4 space-y-2">
                    <p className="text-start bg-muted p-1">Start aligned text on all viewport sizes.</p>
                    <p className="text-center bg-muted p-1">Center aligned text on all viewport sizes.</p>
                    <p className="text-end bg-muted p-1">End aligned text on all viewport sizes.</p>
                </div>

                <CodeBlock language="html" code={`<p class="text-start">Start aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-end">End aligned text on all viewport sizes.</p>`} />
            </section>

            {/* 2. TEXT WRAPPING */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Text Wrapping</h2>
                <div className="p-4 bg-card border border-border rounded-xl mb-4 space-y-2">
                    <div className="w-25 bg-muted p-2 rounded text-wrap" style={{ width: '8rem' }}>
                        This text should wrap.
                    </div>
                    <div className="w-25 bg-muted p-2 rounded text-nowrap" style={{ width: '8rem', overflow: 'hidden' }}>
                        This text should overflow the parent.
                    </div>
                </div>
                <CodeBlock language="html" code={`<div class="text-wrap" style="width: 8rem;">
  This text should wrap.
</div>
<div class="text-nowrap" style="width: 8rem;">
  This text should overflow the parent.
</div>`} />
            </section>

            {/* 3. FONT WEIGHT & ITALICS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Font Weight & Italics</h2>
                <div className="p-4 bg-card border border-border rounded-xl mb-4 space-y-2">
                    <p className="fw-bold">Bold text.</p>
                    <p className="fw-bolder">Bolder weight text (relative to the parent element).</p>
                    <p className="fw-normal">Normal weight text.</p>
                    <p className="fw-light">Light weight text.</p>
                    <p className="fst-italic">Italic text.</p>
                    <p className="fst-normal">Text with normal font style.</p>
                </div>
                <CodeBlock language="html" code={`<p class="fw-bold">Bold text.</p>
<p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
<p class="fw-normal">Normal weight text.</p>
<p class="fw-light">Light weight text.</p>
<p class="fst-italic">Italic text.</p>
<p class="fst-normal">Text with normal font style.</p>`} />
            </section>

        </DocLayout>
    );
};

export default TextPage;
