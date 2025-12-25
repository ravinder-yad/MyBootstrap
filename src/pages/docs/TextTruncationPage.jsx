import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { MoreHorizontal } from 'lucide-react';

const TextTruncationPage = () => {
    return (
        <DocLayout
            title="Text Truncation"
            description="Truncate long strings of text with an ellipsis."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><MoreHorizontal size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    For longer content, you can add a <code>.text-truncate</code> class to truncate the text with an ellipsis. Requires <code>display: inline-block</code> or <code>display: block</code>.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="row">
                        <div className="col-2 text-truncate w-[150px] bg-muted p-2 border border-border rounded">
                            Praeterea iter est quasdam res quas ex communi.
                        </div>
                    </div>
                    <br />
                    <span className="inline-block text-truncate w-[150px] bg-muted p-2 border border-border rounded">
                        Praeterea iter est quasdam res quas ex communi.
                    </span>
                </div>

                <CodeBlock language="html" code={`<!-- Block level -->
<div className="row">
  <div className="col-2 text-truncate">
    Praeterea iter est quasdam res quas ex communi.
  </div>
</div>

<!-- Inline level -->
<span className="d-inline-block text-truncate" style="max-width: 150px;">
  Praeterea iter est quasdam res quas ex communi.
</span>`} />
            </section>

        </DocLayout>
    );
};

export default TextTruncationPage;
