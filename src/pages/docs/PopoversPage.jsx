import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { MessageSquare } from 'lucide-react';

const PopoversPage = () => {
    return (
        <DocLayout
            title="Popovers"
            description="Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><MessageSquare size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    Click the button below to see the popover toggle.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4 h-40 flex items-center justify-center">
                    <button type="button" className="btn btn-lg btn-danger bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors relative" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">
                        Click to toggle popover
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-foreground text-background text-sm p-3 rounded shadow-lg z-50 text-center after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-foreground hidden group-hover:block hover:block">
                            <h3 className="font-bold border-b border-background/20 pb-2 mb-2">Popover title</h3>
                            And here's some amazing content. It's very engaging. Right?
                        </div>
                    </button>
                    {/* Note: The above pseudo-implementation mimics a popover on hover/interaction for visual representation. Real Bootstrap popovers use Popper.js */}
                </div>

                <div className="bg-yellow-500/10 p-4 border border-yellow-500/20 rounded-lg text-sm text-yellow-700 dark:text-yellow-400 mb-4">
                    <strong>Note:</strong> Real popovers require the initialization of the Bootstrap Popover plugin via JavaScript in your application.
                </div>

                <CodeBlock language="html" code={`<button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>`} />
            </section>

            {/* 2. FOUR DIRECTIONS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Four Directions</h2>
                <p className="text-muted-foreground mb-4">
                    Four options are available: top, right, bottom, and left aligned.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4 flex gap-4 flex-wrap justify-center">
                    <button type="button" className="btn btn-secondary bg-muted text-foreground px-4 py-2 rounded-md hover:bg-muted/80">Popover on top</button>
                    <button type="button" className="btn btn-secondary bg-muted text-foreground px-4 py-2 rounded-md hover:bg-muted/80">Popover on right</button>
                    <button type="button" className="btn btn-secondary bg-muted text-foreground px-4 py-2 rounded-md hover:bg-muted/80">Popover on bottom</button>
                    <button type="button" className="btn btn-secondary bg-muted text-foreground px-4 py-2 rounded-md hover:bg-muted/80">Popover on left</button>
                </div>
                <CodeBlock language="html" code={`<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
  Popover on top
</button>
...`} />
            </section>

        </DocLayout>
    );
};

export default PopoversPage;
