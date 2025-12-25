import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Type, ArrowUp } from 'lucide-react';

const FloatingLabelsPage = () => {
    return (
        <DocLayout
            title="Floating Labels"
            description="Create beautifully simple form labels that float over your input fields."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><ArrowUp size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    Wrap a pair of <code>&lt;input class="form-control"&gt;</code> and <code>&lt;label&gt;</code> elements in <code>.form-floating</code> to enable floating labels.
                    A <code>placeholder</code> is required on each <code>&lt;input&gt;</code> as our method of CSS-only floating labels uses the <code>:placeholder-shown</code> pseudo-element.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl space-y-4 mb-4">
                    <div className="form-floating relative">
                        <input type="email" className="form-control w-full p-4 pt-6 pb-2 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:bg-muted/10 peer placeholder-transparent" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput" className="absolute top-4 left-4 text-muted-foreground transition-all peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:text-xs">Email address</label>
                    </div>
                    <div className="form-floating relative">
                        <input type="password" className="form-control w-full p-4 pt-6 pb-2 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:bg-muted/10 peer placeholder-transparent" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword" className="absolute top-4 left-4 text-muted-foreground transition-all peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:text-xs">Password</label>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>`} />
            </section>

            {/* 2. TEXTAREAS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Textareas</h2>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="form-floating relative">
                        <textarea className="form-control w-full p-4 pt-6 pb-2 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:bg-muted/10 peer placeholder-transparent h-[100px]" id="floatingTextarea" placeholder="Leave a comment here"></textarea>
                        <label htmlFor="floatingTextarea" className="absolute top-4 left-4 text-muted-foreground transition-all peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:text-xs">Comments</label>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>`} />
            </section>

        </DocLayout>
    );
};

export default FloatingLabelsPage;
