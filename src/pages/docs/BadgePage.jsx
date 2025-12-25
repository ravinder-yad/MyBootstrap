import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Tag } from 'lucide-react';

const BadgePage = () => {
    return (
        <DocLayout
            title="Badges"
            description="Documentation and examples for badges, our small count and labeling component."
        >

            {/* 1. EXAMPLES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Tag size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    Badges scale to match the size of the immediate parent element by using relative font sizing and <code>em</code> units.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl space-y-4 mb-4">
                    <h1 className="text-4xl font-light">Example heading <span className="text-xs align-middle px-2 py-1 rounded bg-primary text-primary-foreground">New</span></h1>
                    <h2 className="text-3xl font-light">Example heading <span className="text-xs align-middle px-2 py-1 rounded bg-secondary text-secondary-foreground">New</span></h2>
                    <h3 className="text-2xl font-light">Example heading <span className="text-xs align-middle px-2 py-1 rounded bg-primary text-primary-foreground">New</span></h3>
                    <h4 className="text-xl font-light">Example heading <span className="text-xs align-middle px-2 py-1 rounded bg-secondary text-secondary-foreground">New</span></h4>
                </div>

                <CodeBlock language="html" code={`<h1>Example heading <span class="badge bg-secondary">New</span></h1>
<h2>Example heading <span class="badge bg-secondary">New</span></h2>
<h3>Example heading <span class="badge bg-secondary">New</span></h3>
<h4>Example heading <span class="badge bg-secondary">New</span></h4>`} />
            </section>

            {/* 2. CONTEXTUAL VARIATIONS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Variations</h2>
                <p className="text-muted-foreground mb-4">
                    Add any of the below mentioned modifier classes to change the appearance of a badge.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs rounded bg-primary text-primary-foreground">Primary</span>
                    <span className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground">Secondary</span>
                    <span className="px-2 py-1 text-xs rounded bg-green-500 text-white">Success</span>
                    <span className="px-2 py-1 text-xs rounded bg-red-500 text-white">Danger</span>
                    <span className="px-2 py-1 text-xs rounded bg-yellow-500 text-black">Warning</span>
                    <span className="px-2 py-1 text-xs rounded bg-blue-400 text-black">Info</span>
                    <span className="px-2 py-1 text-xs rounded bg-white text-black border border-border">Light</span>
                    <span className="px-2 py-1 text-xs rounded bg-gray-900 text-white">Dark</span>
                </div>

                <CodeBlock language="html" code={`<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
...`} />
            </section>

            {/* 3. PELL BADGES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Pill Badges</h2>
                <p className="text-muted-foreground mb-4">
                    Use the <code>.rounded-pill</code> utility class to make badges more rounded with a larger <code>border-radius</code>.
                </p>
                <div className="bg-card border border-border p-6 rounded-xl flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-primary text-primary-foreground">Primary</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Secondary</span>
                </div>
                <CodeBlock language="html" code={`<span class="badge rounded-pill bg-primary">Primary</span>
<span class="badge rounded-pill bg-secondary">Secondary</span>`} />
            </section>

        </DocLayout>
    );
};

export default BadgePage;
