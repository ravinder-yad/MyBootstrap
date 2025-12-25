import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { MessageCircle } from 'lucide-react';

const TooltipsPage = () => {
    return (
        <DocLayout
            title="Tooltips"
            description="Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-bs-attributes for local title storage."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><MessageCircle size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    Hover over the links below to see tooltips:
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4 text-center">
                    <p className="text-muted-foreground">
                        Tight pants next level keffiyeh <a href="#" className="text-primary underline decoration-dotted decoration-primary underline-offset-4 group relative" data-bs-toggle="tooltip" title="Default tooltip">
                            you probably
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">Default tooltip</span>
                        </a> haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <a href="#" className="text-primary underline decoration-dotted decoration-primary underline-offset-4 group relative" data-bs-toggle="tooltip" title="Another tooltip">
                            have a
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">Another tooltip</span>
                        </a> terry richardson vinyl chambray.
                    </p>
                </div>

                <div className="bg-yellow-500/10 p-4 border border-yellow-500/20 rounded-lg text-sm text-yellow-700 dark:text-yellow-400 mb-4">
                    <strong>Note:</strong> Real tooltips require the initialization of the Bootstrap Tooltip plugin via JavaScript in your application.
                </div>

                <CodeBlock language="html" code={`<p class="muted">
  Tight pants next level keffiyeh <a href="#" data-bs-toggle="tooltip" title="Default tooltip">you probably</a> haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <a href="#" data-bs-toggle="tooltip" title="Another tooltip">have a</a> terry richardson vinyl chambray.
</p>`} />
            </section>

            {/* 2. FOUR DIRECTIONS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Four Directions</h2>
                <p className="text-muted-foreground mb-4">
                    Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4 flex gap-4 flex-wrap justify-center">
                    <button type="button" className="btn btn-secondary bg-muted text-foreground px-4 py-2 rounded-md hover:bg-muted/80 relative group">
                        Tooltip on top
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">Tooltip on top</span>
                    </button>
                    <button type="button" className="btn btn-secondary bg-muted text-foreground px-4 py-2 rounded-md hover:bg-muted/80 relative group">
                        Tooltip on right
                        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">Tooltip on right</span>
                    </button>
                    <button type="button" className="btn btn-secondary bg-muted text-foreground px-4 py-2 rounded-md hover:bg-muted/80 relative group">
                        Tooltip on bottom
                        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">Tooltip on bottom</span>
                    </button>
                    <button type="button" className="btn btn-secondary bg-muted text-foreground px-4 py-2 rounded-md hover:bg-muted/80 relative group">
                        Tooltip on left
                        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">Tooltip on left</span>
                    </button>
                </div>
                <CodeBlock language="html" code={`<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
...`} />
            </section>

        </DocLayout>
    );
};

export default TooltipsPage;
