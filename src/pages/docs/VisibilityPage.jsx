import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Eye } from 'lucide-react';

const VisibilityPage = () => {
    return (
        <DocLayout
            title="Visibility"
            description="Control the visibility, without modifying the display, of elements with visibility utilities."
        >

            {/* 1. EXAMPLES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Eye size={24} /> Overview</h2>
                <p className="text-muted-foreground mb-4">
                    Set the <code>visibility</code> of elements with our visibility utilities. These utilities do not modify the <code>display</code> value at all and do not affect layout – <code>.invisible</code> elements still take up space in the page.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="visible bg-muted p-3 mb-2">.visible</div>
                    <div className="invisible bg-muted p-3">.invisible</div>
                </div>

                <CodeBlock language="html" code={`<div class="visible">...</div>
<div class="invisible">...</div>`} />
            </section>

        </DocLayout>
    );
};

export default VisibilityPage;
