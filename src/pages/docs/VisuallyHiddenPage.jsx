import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { EyeOff } from 'lucide-react';

const VisuallyHiddenPage = () => {
    return (
        <DocLayout
            title="Visually Hidden"
            description="Use these helpers to visually hide elements but keep them accessible to assistive technologies."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><EyeOff size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    Visually hide an element while still allowing it to be exposed to assistive technologies (such as screen readers) with <code>.visually-hidden</code>.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <h2 className="visually-hidden">Title for screen readers</h2>
                    <a className="visually-hidden-focusable p-2 bg-primary text-white rounded" href="#content">Skip to main content</a>
                    <div className="mt-4 text-muted-foreground">
                        (The title above is hidden. Tab into the example to see the "Skip to main content" link.)
                    </div>
                </div>

                <CodeBlock language="html" code={`<h2 class="visually-hidden">Title for screen readers</h2>
<a class="visually-hidden-focusable" href="#content">Skip to main content</a>`} />
            </section>

            {/* 2. USAGE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Usage</h2>
                <p className="text-muted-foreground mb-4">
                    Use <code>.visually-hidden-focusable</code> to visually hide an element by default, but to display it when it's focused (e.g. by a keyboard-only user).
                </p>
            </section>

        </DocLayout>
    );
};

export default VisuallyHiddenPage;
