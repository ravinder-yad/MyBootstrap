import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Target } from 'lucide-react';

const FocusRingPage = () => {
    return (
        <DocLayout
            title="Focus Ring"
            description="Utility classes that allow you to add a custom focus ring to an element and style it."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Target size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    Click the link below to see the focus ring. The <code>.focus-ring</code> helper removes the default <code>outline</code> and adds a <code>box-shadow</code> to the element on focus.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <a href="#" className="inline-block p-2 text-primary border border-border rounded focus-ring focus:ring-4 focus:ring-primary/25 outline-none transition-shadow">
                        Custom focus ring
                    </a>
                </div>

                <CodeBlock language="html" code={`<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
  Custom focus ring
</a>`} />
            </section>

            {/* 2. UTILITIES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">CSS Variables</h2>
                <p className="text-muted-foreground mb-4">
                    Modify the scope of the focus ring with CSS variables like <code>--bs-focus-ring-color</code>.
                </p>
                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <a href="#" className="inline-block p-2 text-green-500 border border-border rounded focus:ring-4 focus:ring-green-500/25 outline-none transition-shadow" style={{ '--bs-focus-ring-color': 'rgba(25, 135, 84, .25)' }}>
                        Green focus ring
                    </a>
                </div>
                <CodeBlock language="html" code={`<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" style="--bs-focus-ring-color: rgba(var(--bs-success-rgb), .25)">
  Green focus ring
</a>`} />
            </section>

        </DocLayout>
    );
};

export default FocusRingPage;
