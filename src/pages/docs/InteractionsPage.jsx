import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { MousePointerClick } from 'lucide-react';

const InteractionsPage = () => {
    return (
        <DocLayout
            title="Interactions"
            description="Utility classes that change how users interact with contents of a website."
        >

            {/* 1. TEXT SELECTION */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><MousePointerClick size={24} /> Text Selection</h2>
                <p className="text-muted-foreground mb-4">
                    Change the way in which the content is selected when the user interacts with it.
                </p>

                <div className="space-y-2 mb-4">
                    <div className="p-3 bg-muted rounded user-select-all">This paragraph will be entirely selected when clicked by the user. (.user-select-all)</div>
                    <div className="p-3 bg-muted rounded user-select-auto">This paragraph has default select behavior. (.user-select-auto)</div>
                    <div className="p-3 bg-muted rounded user-select-none">This paragraph will not be selectable when clicked by the user. (.user-select-none)</div>
                </div>

                <CodeBlock language="html" code={`<p class="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
<p class="user-select-auto">This paragraph has default select behavior.</p>
<p class="user-select-none">This paragraph will not be selectable when clicked by the user.</p>`} />
            </section>

            {/* 2. POINTER EVENTS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Pointer Events</h2>
                <p className="text-muted-foreground mb-4">
                    Bootstrap provides <code>.pe-none</code> and <code>.pe-auto</code> classes to prevent or add element interactions.
                </p>
                <div className="p-3 bg-muted rounded pe-none mb-4">
                    <a href="#" className="bg-primary text-white p-2 rounded inline-block" onClick={(e) => e.preventDefault()}>This link can not be clicked. (.pe-none)</a>
                </div>
                <CodeBlock language="html" code={`<p class="pe-none"><a href="#" tabindex="-1" aria-disabled="true">This link</a> can not be clicked.</p>
<p class="pe-auto"><a href="#">This link</a> can be clicked (this is default behavior).</p>`} />
            </section>

        </DocLayout>
    );
};

export default InteractionsPage;
