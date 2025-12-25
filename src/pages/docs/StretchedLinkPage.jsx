import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Expand } from 'lucide-react';

const StretchedLinkPage = () => {
    return (
        <DocLayout
            title="Stretched Link"
            description="Make any HTML element or Bootstrap component clickable by 'stretching' a nested link via CSS."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Expand size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    Add <code>.stretched-link</code> to a link to make its containing block clickable via a <code>::after</code> pseudo element. In most cases, this means that an element with <code>position: relative;</code> that contains a link with the <code>.stretched-link</code> class is clickable.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="card w-[18rem] bg-card border border-border rounded-lg overflow-hidden position-relative hover:shadow-lg transition-shadow">
                        <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
                            Image placeholder
                        </div>
                        <div className="card-body p-4">
                            <h5 className="card-title font-bold mb-2">Card with stretched link</h5>
                            <p className="card-text text-muted-foreground text-sm mb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary px-4 py-2 bg-primary text-primary-foreground rounded stretched-link">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-500/10 p-4 border border-blue-500/20 rounded-lg text-sm text-blue-700 dark:text-blue-400 mb-4">
                    <strong>Note:</strong> Multiple stretched links in the same closest positioned container are not recommended.
                </div>

                <CodeBlock language="html" code={`<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card with stretched link</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
  </div>
</div>`} />
            </section>

            {/* 2. IDENTIFYING THE CONTAINER */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Identifying the Containing Block</h2>
                <p className="text-muted-foreground mb-4">
                    If the stretched link doesn't seem to work, the containing block will probably be the cause. The containing block is usually the nearest ancestor with a <code>position</code> that is not <code>static</code>.
                </p>
            </section>

        </DocLayout>
    );
};

export default StretchedLinkPage;
