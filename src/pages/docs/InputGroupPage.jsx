import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Group, AtSign, DollarSign } from 'lucide-react';

const InputGroupPage = () => {
    return (
        <DocLayout
            title="Input Group"
            description="Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs."
        >

            {/* 1. BASIC EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Group size={24} /> Basic Example</h2>

                <div className="bg-card border border-border p-6 rounded-xl space-y-4 mb-4">
                    <div className="input-group flex">
                        <span className="input-group-text bg-muted border border-border border-r-0 rounded-l-md px-3 py-2 text-muted-foreground flex items-center">@</span>
                        <input type="text" className="form-control flex-1 p-2 border border-border rounded-r-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:bg-muted/10" placeholder="Username" aria-label="Username" />
                    </div>

                    <div className="input-group flex">
                        <input type="text" className="form-control flex-1 p-2 border border-border rounded-l-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:bg-muted/10" placeholder="Recipient's username" aria-label="Recipient's username" />
                        <span className="input-group-text bg-muted border border-border border-l-0 rounded-r-md px-3 py-2 text-muted-foreground flex items-center">@example.com</span>
                    </div>

                    <div className="input-group flex">
                        <span className="input-group-text bg-muted border border-border border-r-0 rounded-l-md px-3 py-2 text-muted-foreground flex items-center"><DollarSign size={16} /></span>
                        <input type="text" className="form-control flex-1 p-2 border border-border rounded-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:bg-muted/10" aria-label="Amount (to the nearest dollar)" />
                        <span className="input-group-text bg-muted border border-border border-l-0 rounded-r-md px-3 py-2 text-muted-foreground flex items-center">.00</span>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>`} />
            </section>

            {/* 2. BUTTON ADDONS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Button Addons</h2>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="input-group flex">
                        <button className="btn btn-outline-secondary px-4 py-2 border border-border border-r-0 rounded-l-md bg-muted hover:bg-muted/80 text-foreground transition-colors" type="button" id="button-addon1">Button</button>
                        <input type="text" className="form-control flex-1 p-2 border border-border rounded-r-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:bg-muted/10" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
</div>`} />
            </section>

        </DocLayout>
    );
};

export default InputGroupPage;
