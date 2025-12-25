import React, { useState } from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { ChevronDown, Layers } from 'lucide-react';

const AccordionPage = () => {
    // Mock state for interactive example
    const [openItem, setOpenItem] = useState(1);

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <DocLayout
            title="Accordion"
            description="Build vertically collapsing accordions in combination with our Collapse JavaScript plugin."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Layers size={24} /> Basic Example</h2>
                <p className="text-muted-foreground mb-4">
                    Click the accordions below to expand/collapse the accordion content.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="accordion rounded-lg border border-border overflow-hidden">

                        {/* Item 1 */}
                        <div className="accordion-item border-b border-border last:border-0">
                            <h2 className="accordion-header m-0">
                                <button
                                    className={`accordion-button w-full flex items-center justify-between p-4 text-left text-sm font-medium transition-colors ${openItem === 1 ? 'bg-primary/10 text-primary' : 'bg-card hover:bg-muted/50'}`}
                                    type="button"
                                    onClick={() => toggleItem(1)}
                                >
                                    Accordion Item #1
                                    <ChevronDown className={`transform transition-transform duration-200 ${openItem === 1 ? 'rotate-180' : ''}`} size={16} />
                                </button>
                            </h2>
                            <div className={`accordion-collapse transition-all duration-300 overflow-hidden ${openItem === 1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="accordion-body p-4 text-sm text-muted-foreground bg-card">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                                </div>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="accordion-item border-b border-border last:border-0">
                            <h2 className="accordion-header m-0">
                                <button
                                    className={`accordion-button w-full flex items-center justify-between p-4 text-left text-sm font-medium transition-colors ${openItem === 2 ? 'bg-primary/10 text-primary' : 'bg-card hover:bg-muted/50'}`}
                                    type="button"
                                    onClick={() => toggleItem(2)}
                                >
                                    Accordion Item #2
                                    <ChevronDown className={`transform transition-transform duration-200 ${openItem === 2 ? 'rotate-180' : ''}`} size={16} />
                                </button>
                            </h2>
                            <div className={`accordion-collapse transition-all duration-300 overflow-hidden ${openItem === 2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="accordion-body p-4 text-sm text-muted-foreground bg-card">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                                </div>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="accordion-item last:border-0">
                            <h2 className="accordion-header m-0">
                                <button
                                    className={`accordion-button w-full flex items-center justify-between p-4 text-left text-sm font-medium transition-colors ${openItem === 3 ? 'bg-primary/10 text-primary' : 'bg-card hover:bg-muted/50'}`}
                                    type="button"
                                    onClick={() => toggleItem(3)}
                                >
                                    Accordion Item #3
                                    <ChevronDown className={`transform transition-transform duration-200 ${openItem === 3 ? 'rotate-180' : ''}`} size={16} />
                                </button>
                            </h2>
                            <div className={`accordion-collapse transition-all duration-300 overflow-hidden ${openItem === 3 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="accordion-body p-4 text-sm text-muted-foreground bg-card">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">...</div>
    </div>
  </div>
  ...
</div>`} />
            </section>

            {/* 2. FLUSH */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Flush Accordion</h2>
                <p className="text-muted-foreground mb-4">
                    Add <code>.accordion-flush</code> to remove the default <code>background-color</code>, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="accordion accordion-flush space-y-2">
                        <div className="border-b border-border pb-2">
                            <div className="text-sm font-medium">Flush Item #1</div>
                        </div>
                        <div className="border-b border-border pb-2">
                            <div className="text-sm font-medium">Flush Item #2</div>
                        </div>
                    </div>
                </div>
            </section>

        </DocLayout>
    );
};

export default AccordionPage;
