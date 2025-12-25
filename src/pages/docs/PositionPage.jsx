import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { MapPin } from 'lucide-react';

const PositionPage = () => {
    return (
        <DocLayout
            title="Position"
            description="Use these shorthand utilities for quickly configuring the position of an element."
        >

            {/* 1. POSITION VALUES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><MapPin size={24} /> Position Values</h2>
                <p className="text-muted-foreground mb-4">
                    Quick positioning classes, though they are not responsive.
                </p>

                <div className="p-6 bg-card border border-border rounded-xl mb-4 space-y-2">
                    <div className="bg-muted p-2 rounded">.position-static</div>
                    <div className="bg-muted p-2 rounded">.position-relative</div>
                    <div className="bg-muted p-2 rounded">.position-absolute</div>
                    <div className="bg-muted p-2 rounded">.position-fixed</div>
                    <div className="bg-muted p-2 rounded">.position-sticky</div>
                </div>

                <CodeBlock language="html" code={`<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>`} />
            </section>

            {/* 2. ARRANGE ELEMENTS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Arrange Elements</h2>
                <p className="text-muted-foreground mb-4">
                    Arrange elements easily with the edge positioning utilities.
                </p>
                <div className="position-relative h-48 bg-muted border border-border rounded mb-4 overflow-hidden">
                    <div className="position-absolute top-0 start-0 w-8 h-8 bg-black dark:bg-white rounded"></div>
                    <div className="position-absolute top-0 end-0 w-8 h-8 bg-black dark:bg-white rounded"></div>
                    <div className="position-absolute top-50 start-50 translate-middle w-8 h-8 bg-black dark:bg-white rounded"></div>
                    <div className="position-absolute bottom-50 end-50 w-8 h-8 bg-black dark:bg-white rounded"></div>
                    <div className="position-absolute bottom-0 start-0 w-8 h-8 bg-black dark:bg-white rounded"></div>
                    <div className="position-absolute bottom-0 end-0 w-8 h-8 bg-black dark:bg-white rounded"></div>
                </div>
                <CodeBlock language="html" code={`<div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>
  <div class="position-absolute top-0 end-0"></div>
  <div class="position-absolute top-50 start-50 translate-middle"></div>
  <div class="position-absolute bottom-50 end-50"></div>
  <div class="position-absolute bottom-0 start-0"></div>
  <div class="position-absolute bottom-0 end-0"></div>
</div>`} />
            </section>

            {/* 3. CENTER ELEMENTS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Center Elements</h2>
                <p className="text-muted-foreground mb-4">
                    In addition, you can also center the elements with the transform utility class <code>.translate-middle</code>.
                </p>
                <div className="position-relative h-32 bg-muted border border-border rounded mb-4">
                    <div className="position-absolute top-50 start-50 translate-middle w-24 h-12 bg-black dark:bg-white rounded text-white dark:text-black flex items-center justify-center text-xs">Centered</div>
                </div>
                <CodeBlock language="html" code={`<div class="position-relative">
  <div class="position-absolute top-50 start-50 translate-middle">
    Centered
  </div>
</div>`} />
            </section>

        </DocLayout>
    );
};

export default PositionPage;
