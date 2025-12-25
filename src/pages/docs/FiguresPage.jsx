import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Image, Type, Info } from 'lucide-react';

const FiguresPage = () => {
    return (
        <DocLayout
            title="Figures"
            description="Documentation and examples for displaying related images and text with the figure component in My Bootstrap."
        >

            {/* 1. BASIC USAGE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Image size={24} /> Basic Figure</h2>
                <p className="text-muted-foreground mb-4">
                    Anytime you need to display a piece of content—like an image with an optional caption, consider using a <code>&lt;figure&gt;</code>.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4 text-center">
                    <figure className="inline-block">
                        <img src="https://via.placeholder.com/400x300" className="img-fluid rounded mb-2" alt="A generic square placeholder." />
                        <figcaption className="text-muted-foreground text-sm italic">
                            A caption for the above image.
                        </figcaption>
                    </figure>
                </div>

                <CodeBlock language="html" code={`<figure class="figure">
  <img src="..." class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>`} />
            </section>

            {/* 2. ALIGNMENT */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Type size={24} /> Aligning Captions</h2>
                <p className="text-muted-foreground mb-4">
                    Aligning the figure's caption is easy with our text utilities.
                </p>

                <div className="bg-muted p-4 rounded-xl border border-border mb-4">
                    <div className="text-right">
                        <figcaption className="text-muted-foreground text-sm">A right-aligned caption.</figcaption>
                    </div>
                </div>

                <CodeBlock language="html" code={`<figure class="figure">
  <img src="..." class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
</figure>`} />
            </section>

            {/* 3. SEMANTICS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Info size={24} /> Semantic HTML</h2>
                <p className="text-muted-foreground mb-4">
                    Using semantic tags like <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> improves accessibility and provides meaningful structure to your content for screen readers and SEO.
                </p>
            </section>

        </DocLayout>
    );
};

export default FiguresPage;
