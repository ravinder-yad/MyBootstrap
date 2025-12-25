import React, { useState } from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { ChevronsDownUp } from 'lucide-react';

const CollapsePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DocLayout
            title="Collapse"
            description="Toggle the visibility of content across your project with a few classes and our JavaScript plugins."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><ChevronsDownUp size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    Click the buttons below to show and hide another element via class changes.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <p className="flex gap-2 mb-4">
                        <button
                            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            aria-controls="collapseExample"
                        >
                            Link with href
                        </button>
                        <button
                            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Button with data-bs-target
                        </button>
                    </p>
                    <div className={`collapse ${isOpen ? 'show block' : 'hidden'} transition-all`} id="collapseExample">
                        <div className="card card-body border border-border rounded-lg p-4 bg-muted/20">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>

                <CodeBlock language="html" code={`<p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>`} />
            </section>

        </DocLayout>
    );
};

export default CollapsePage;
