import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Move } from 'lucide-react';

const PositionHelpersPage = () => {
    return (
        <DocLayout
            title="Position"
            description="Use these shorthand utilities for quickly configuring the position of an element."
        >

            {/* 1. POSITION VALUES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Move size={24} /> Position Values</h2>
                <p className="text-muted-foreground mb-4">
                    Quick positioning classes are available, though they are not responsive.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="flex flex-wrap gap-2">
                        <div className="p-2 bg-muted text-xs rounded">.position-static</div>
                        <div className="p-2 bg-muted text-xs rounded">.position-relative</div>
                        <div className="p-2 bg-muted text-xs rounded">.position-absolute</div>
                        <div className="p-2 bg-muted text-xs rounded">.position-fixed</div>
                        <div className="p-2 bg-muted text-xs rounded">.position-sticky</div>
                    </div>
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
                    Arrange elements easily with the edge positioning utilities. The format is <code>&#123;property&#125;-&#123;position&#125;</code>.
                </p>
                <div className="bg-card border border-border p-6 rounded-xl mb-4 relative h-[200px] bg-muted/20">
                    <div className="position-absolute top-0 start-0 w-8 h-8 bg-primary rounded"></div>
                    <div className="position-absolute top-0 end-0 w-8 h-8 bg-primary rounded"></div>
                    <div className="position-absolute top-50 start-50 translate-middle w-8 h-8 bg-primary rounded"></div>
                    <div className="position-absolute bottom-50 end-50 w-8 h-8 bg-secondary rounded"></div>
                    <div className="position-absolute bottom-0 start-0 w-8 h-8 bg-primary rounded"></div>
                    <div className="position-absolute bottom-0 end-0 w-8 h-8 bg-primary rounded"></div>
                </div>

                <CodeBlock language="html" code={`<div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>
  <div class="position-absolute top-0 end-0"></div>
  <div class="position-absolute top-50 start-50"></div>
  <div class="position-absolute bottom-50 end-50"></div>
  <div class="position-absolute bottom-0 start-0"></div>
  <div class="position-absolute bottom-0 end-0"></div>
</div>`} />
            </section>

            {/* 3. CENTER ELEMENTS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Center Elements</h2>
                <p className="text-muted-foreground mb-4">
                    In addition, you can also transform the element to center it via the transform utility class <code>.translate-middle</code>.
                </p>
                <div className="bg-card border border-border p-6 rounded-xl mb-4 relative h-[200px] bg-muted/20">
                    <div className="position-absolute top-50 start-50 translate-middle w-24 h-12 bg-primary text-primary-foreground flex items-center justify-center rounded">Centered</div>
                </div>
                <CodeBlock language="html" code={`<div class="position-relative">
  <div class="position-absolute top-50 start-50 translate-middle"></div>
</div>`} />
            </section>

        </DocLayout>
    );
};

export default PositionHelpersPage;
