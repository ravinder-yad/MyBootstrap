import React, { useState } from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { ChevronDown, Menu } from 'lucide-react';

const DropdownsPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Close on blur logic (simplified)
    const handleBlur = (e) => {
        // In a real app we would check if relatedTarget is within the dropdown
        setTimeout(() => setIsOpen(false), 200);
    };

    return (
        <DocLayout
            title="Dropdowns"
            description="Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin."
        >

            {/* 1. SINGLE BUTTON */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Menu size={24} /> Single Button</h2>
                <p className="text-muted-foreground mb-4">
                    Any single <code>.btn</code> can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with either <code>&lt;button&gt;</code> elements.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4 h-60">
                    <div className="dropdown relative inline-block">
                        <button
                            className="btn bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/80 transition-colors flex items-center gap-2"
                            type="button"
                            id="dropdownMenuButton1"
                            aria-expanded={isOpen}
                            onClick={() => setIsOpen(!isOpen)}
                            onBlur={handleBlur}
                        >
                            Dropdown button
                            <ChevronDown size={16} />
                        </button>
                        {isOpen && (
                            <ul className="dropdown-menu absolute top-full left-0 mt-1 min-w-[10rem] bg-card border border-border rounded-md shadow-lg py-1 z-50 text-sm" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item block w-full px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer" href="#">Action</a></li>
                                <li><a className="dropdown-item block w-full px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer" href="#">Another action</a></li>
                                <li><a className="dropdown-item block w-full px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer" href="#">Something else here</a></li>
                            </ul>
                        )}
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>`} />
            </section>

            {/* 2. SPLIT BUTTON */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Split Button</h2>
                <p className="text-muted-foreground mb-4">
                    Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of <code>.dropdown-toggle-split</code> for proper spacing around the dropdown caret.
                </p>
            </section>

        </DocLayout>
    );
};

export default DropdownsPage;
