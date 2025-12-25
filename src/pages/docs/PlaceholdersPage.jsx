import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Loader } from 'lucide-react';

const PlaceholdersPage = () => {
    return (
        <DocLayout
            title="Placeholders"
            description="Use loading placeholders for your components or pages to indicate something may still be loading."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Loader size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    In the example below, we take a typical card component and recreate it with placeholders applied to create a "loading card".
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4 flex gap-6 flex-wrap">

                    {/* Normal Card */}
                    <div className="card w-[18rem] border border-border rounded-lg shadow-sm">
                        <img src="https://via.placeholder.com/286x180" className="w-full rounded-t-lg" alt="..." />
                        <div className="p-4">
                            <h5 className="text-lg font-bold mb-2">Card title</h5>
                            <p className="text-sm text-muted-foreground mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors inline-block">Go somewhere</a>
                        </div>
                    </div>

                    {/* Placeholder Card */}
                    <div className="card w-[18rem] border border-border rounded-lg shadow-sm" aria-hidden="true">
                        <div className="w-full h-[180px] bg-muted/50 rounded-t-lg animate-pulse"></div>
                        <div className="p-4">
                            <h5 className="h-6 w-1/3 bg-muted/60 rounded mb-4 animate-pulse"></h5>
                            <p className="space-y-2 mb-4">
                                <span className="block h-3 w-full bg-muted/40 rounded animate-pulse"></span>
                                <span className="block h-3 w-5/6 bg-muted/40 rounded animate-pulse"></span>
                                <span className="block h-3 w-4/6 bg-muted/40 rounded animate-pulse"></span>
                            </p>
                            <div className="h-9 w-28 bg-primary/30 rounded animate-pulse"></div>
                        </div>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="card" aria-hidden="true">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
  </div>
</div>`} />
            </section>

            {/* 2. HOW IT WORKS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">How It Works</h2>
                <p className="text-muted-foreground mb-4">
                    Create placeholders with the <code>.placeholder</code> class and a grid column class (e.g., <code>.col-6</code>) to set the <code>width</code>. They can replace the text inside an element or be added as a modifier class to an existing component.
                </p>
            </section>

        </DocLayout>
    );
};

export default PlaceholdersPage;
