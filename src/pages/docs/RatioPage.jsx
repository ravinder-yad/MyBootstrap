import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { MonitorPlay } from 'lucide-react';

const RatioPage = () => {
    return (
        <DocLayout
            title="Ratio"
            description="Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handling video or slideshow embeds based on the width of the parent."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><MonitorPlay size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    Wrap any embed, like an <code>&lt;iframe&gt;</code>, in a parent element with <code>.ratio</code> and an aspect ratio class.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="ratio ratio-16x9 w-full bg-black rounded overflow-hidden relative" style={{ paddingTop: '56.25%' }}>
                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" className="absolute top-0 left-0 w-full h-full" allowFullScreen></iframe>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>`} />
            </section>

            {/* 2. ASPECT RATIOS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Aspect Ratios</h2>
                <p className="text-muted-foreground mb-4">
                    Aspect ratios can be customized with modifier classes. By default the following ratio classes are provided:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="p-4 bg-muted text-center rounded text-sm">.ratio-1x1 (100%)</div>
                    <div className="p-4 bg-muted text-center rounded text-sm">.ratio-4x3 (75%)</div>
                    <div className="p-4 bg-muted text-center rounded text-sm">.ratio-16x9 (56.25%)</div>
                    <div className="p-4 bg-muted text-center rounded text-sm">.ratio-21x9 (42.85%)</div>
                </div>
                <CodeBlock language="html" code={`<div class="ratio ratio-1x1">...</div>
<div class="ratio ratio-4x3">...</div>
<div class="ratio ratio-16x9">...</div>
<div class="ratio ratio-21x9">...</div>`} />
            </section>

            {/* 3. CUSTOM RATIOS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Custom Ratios</h2>
                <p className="text-muted-foreground mb-4">
                    Each <code>.ratio-*</code> class includes a CSS custom property (or CSS variable) in the selector. You can override this variable to create custom aspect ratios on the fly.
                </p>
                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="ratio w-full bg-muted rounded overflow-hidden relative" style={{ '--bs-aspect-ratio': '50%' }}>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-muted-foreground p-0 m-0" style={{ paddingTop: '50%' }}>
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                Custom 2x1 Ratio via CSS Variable
                            </div>
                        </div>
                    </div>
                </div>
                <CodeBlock language="html" code={`<div class="ratio" style="--bs-aspect-ratio: 50%;">
  <div>Custom 2x1 Ratio via CSS Variable</div>
</div>`} />
            </section>

        </DocLayout>
    );
};

export default RatioPage;
