import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { MousePointerClick, ArrowRight, Github } from 'lucide-react';

const IconLinkPage = () => {
    return (
        <DocLayout
            title="Icon Link"
            description="Quickly align and animate icons within links."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><MousePointerClick size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    Link with text and an icon. Uses inline-flex and styling to align items.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4 space-y-4">
                    <div>
                        <a className="icon-link flex items-center gap-2 text-primary hover:underline decoration-primary decoration-1 underline-offset-4" href="#">
                            <Github size={16} />
                            Icon link
                        </a>
                    </div>
                    <div>
                        <a className="icon-link flex items-center gap-2 text-primary hover:underline decoration-primary decoration-1 underline-offset-4 group" href="#">
                            Icon link with arrow
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>

                <CodeBlock language="html" code={`<a class="icon-link" href="#">
  <svg class="bi" aria-hidden="true"><use xlink:href="#box-seam"></use></svg>
  Icon link
</a>

<a class="icon-link icon-link-hover" href="#">
  Icon link
  <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
</a>`} />
            </section>

            {/* 2. STYLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Style</h2>
                <p className="text-muted-foreground mb-4">
                    The <code>.icon-link</code> class creates a flex container with some gap and alignment.
                </p>
            </section>

        </DocLayout>
    );
};

export default IconLinkPage;
