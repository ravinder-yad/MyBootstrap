import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { ArrowUpRight } from 'lucide-react';

const SpacingPage = () => {
    return (
        <DocLayout
            title="Spacing"
            description="Bootstrap includes a wide range of shorthand responsive margin, padding,and gap utility classes to modify an element's appearance."
        >

            {/* 1. NOTATION */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><ArrowUpRight size={24} /> Notation</h2>
                <p className="text-muted-foreground mb-4">
                    Spacing utilities that apply to all breakpoints, from <code>xs</code> to <code>xxl</code>, have no breakpoint abbreviation in them. This is because those classes are applied from <code>min-width: 0</code> and up, and thus are not bound by a media query. The format is <code>property-sides-size</code>.
                </p>

                <h3 className="font-bold mt-6 mb-2">Property</h3>
                <ul className="list-disc list-inside text-muted-foreground mb-4">
                    <li><code>m</code> - for classes that set <code>margin</code></li>
                    <li><code>p</code> - for classes that set <code>padding</code></li>
                </ul>

                <h3 className="font-bold mt-6 mb-2">Sides</h3>
                <ul className="list-disc list-inside text-muted-foreground mb-4">
                    <li><code>t</code> - for <code>margin-top</code> or <code>padding-top</code></li>
                    <li><code>b</code> - for <code>margin-bottom</code> or <code>padding-bottom</code></li>
                    <li><code>s</code> - (start) for <code>margin-left</code> or <code>padding-left</code> in LTR</li>
                    <li><code>e</code> - (end) for <code>margin-right</code> or <code>padding-right</code> in LTR</li>
                    <li><code>x</code> - for both <code>*-left</code> and <code>*-right</code></li>
                    <li><code>y</code> - for both <code>*-top</code> and <code>*-bottom</code></li>
                    <li><code>blank</code> - for all 4 sides</li>
                </ul>

                <h3 className="font-bold mt-6 mb-2">Size</h3>
                <ul className="list-disc list-inside text-muted-foreground mb-4">
                    <li><code>0</code> - for classes that eliminate the margin or padding by setting it to <code>0</code></li>
                    <li><code>1</code> - (by default) for classes that set the margin or padding to <code>$spacer * .25</code></li>
                    <li><code>2</code> - (by default) for classes that set the margin or padding to <code>$spacer * .5</code></li>
                    <li><code>3</code> - (by default) for classes that set the margin or padding to <code>$spacer</code></li>
                    <li><code>4</code> - (by default) for classes that set the margin or padding to <code>$spacer * 1.5</code></li>
                    <li><code>5</code> - (by default) for classes that set the margin or padding to <code>$spacer * 3</code></li>
                    <li><code>auto</code> - for classes that set the margin to auto</li>
                </ul>

            </section>

            {/* 2. EXAMPLES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Examples</h2>
                <div className="p-6 bg-card border border-border rounded-xl mb-4">
                    <div className="mt-0 mb-4 pt-4 pb-0 bg-muted border rounded">
                        <p className="mb-0 text-center text-sm">.mt-0 .mb-4 .pt-4 .pb-0</p>
                    </div>
                    <div className="mx-auto p-4 bg-primary text-white text-center rounded w-50">
                        .mx-auto (Centered)
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="mt-0 mb-4 pt-4 pb-0">...</div>

<!-- Centering horizontally -->
<div class="mx-auto" style="width: 200px;">
  Centered element
</div>`} />
            </section>

            {/* 3. GAP */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Gap</h2>
                <p className="text-muted-foreground mb-4">
                    When using <code>display: flex</code>, you can use <code>gap</code> utilities on the parent container.
                </p>
                <div className="d-flex gap-3 bg-muted p-3 mb-4 rounded">
                    <div className="p-2 bg-primary text-white border rounded">Item 1</div>
                    <div className="p-2 bg-primary text-white border rounded">Item 2</div>
                    <div className="p-2 bg-primary text-white border rounded">Item 3</div>
                </div>
                <CodeBlock language="html" code={`<div class="d-flex gap-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`} />
            </section>

        </DocLayout>
    );
};

export default SpacingPage;
