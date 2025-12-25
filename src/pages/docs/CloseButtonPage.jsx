import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { X } from 'lucide-react';

const CloseButtonPage = () => {
    return (
        <DocLayout
            title="Close Button"
            description="A generic close button for dismissing content like modals and alerts."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><X size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    Provide an option to dismiss or close a component with <code>.btn-close</code>. Default styling is limited, but highly customizable.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <button type="button" className="btn-close text-muted-foreground hover:text-foreground transition-colors" aria-label="Close">
                        <X size={24} />
                    </button>
                </div>

                <CodeBlock language="html" code={`<button type="button" class="btn-close" aria-label="Close"></button>`} />
            </section>

            {/* 2. DISABLED STATE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Disabled State</h2>
                <p className="text-muted-foreground mb-4">
                    Bootstrap provides a disabled state for close buttons.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <button type="button" className="btn-close text-muted-foreground/50 cursor-not-allowed" disabled aria-label="Close">
                        <X size={24} />
                    </button>
                </div>
                <CodeBlock language="html" code={`<button type="button" class="btn-close" disabled aria-label="Close"></button>`} />
            </section>

        </DocLayout>
    );
};

export default CloseButtonPage;
