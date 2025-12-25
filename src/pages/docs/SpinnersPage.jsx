import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Loader2 } from 'lucide-react';

const SpinnersPage = () => {
    return (
        <DocLayout
            title="Spinners"
            description="Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript."
        >

            {/* 1. BORDER SPINNER */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Loader2 size={24} /> Border Spinner</h2>
                <p className="text-muted-foreground mb-4">
                    Use the border spinners for a lightweight loading indicator.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4 flex gap-4">
                    <div className="spinner-border text-primary animate-spin w-8 h-8 border-4 border-current border-r-transparent rounded-full" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-border text-secondary animate-spin w-8 h-8 border-4 border-current border-r-transparent rounded-full" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-border text-green-500 animate-spin w-8 h-8 border-4 border-current border-r-transparent rounded-full" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-border text-red-500 animate-spin w-8 h-8 border-4 border-current border-r-transparent rounded-full" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
...`} />
            </section>

            {/* 2. GROW SPINNER */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Growing Spinner</h2>
                <p className="text-muted-foreground mb-4">
                    If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow!
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4 flex gap-4">
                    <div className="spinner-grow text-primary animate-ping w-8 h-8 rounded-full bg-current opacity-75" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-secondary animate-ping w-8 h-8 rounded-full bg-current opacity-75" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-green-500 animate-ping w-8 h-8 rounded-full bg-current opacity-75" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                <CodeBlock language="html" code={`<div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`} />
            </section>

            {/* 3. BUTTONS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Buttons</h2>
                <p className="text-muted-foreground mb-4">
                    Use spinners within buttons to indicate an action is currently processing or taking place.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4 flex gap-4 items-center">
                    <button className="btn btn-primary px-4 py-2 bg-primary text-primary-foreground rounded-md flex items-center gap-2 disabled:bg-primary/70" type="button" disabled>
                        <span className="spinner-border spinner-border-sm w-4 h-4 border-2 border-current border-r-transparent rounded-full animate-spin" role="status" aria-hidden="true"></span>
                        <span className="visually-hidden">Loading...</span>
                    </button>
                    <button className="btn btn-primary px-4 py-2 bg-primary text-primary-foreground rounded-md flex items-center gap-2 disabled:bg-primary/70" type="button" disabled>
                        <span className="spinner-border spinner-border-sm w-4 h-4 border-2 border-current border-r-transparent rounded-full animate-spin" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                </div>
                <CodeBlock language="html" code={`<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>`} />
            </section>

        </DocLayout>
    );
};

export default SpinnersPage;
