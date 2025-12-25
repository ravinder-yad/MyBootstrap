import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Group } from 'lucide-react';

const ButtonGroupPage = () => {
    return (
        <DocLayout
            title="Button Group"
            description="Group a series of buttons together on a single line with the button group, and super-power them with JavaScript."
        >

            {/* 1. BASIC EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Group size={24} /> Basic Example</h2>
                <p className="text-muted-foreground mb-4">
                    Wrap a series of buttons with <code>.btn-group</code>.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="inline-flex rounded-md shadow-sm" role="group" aria-label="Basic example">
                        <button type="button" className="px-4 py-2 bg-primary text-primary-foreground border border-primary-foreground/20 rounded-l-md hover:bg-primary/90 transition-colors">Left</button>
                        <button type="button" className="px-4 py-2 bg-primary text-primary-foreground border-t border-b border-r border-primary-foreground/20 hover:bg-primary/90 transition-colors">Middle</button>
                        <button type="button" className="px-4 py-2 bg-primary text-primary-foreground border-t border-b border-r border-primary-foreground/20 rounded-r-md hover:bg-primary/90 transition-colors">Right</button>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>`} />
            </section>

            {/* 2. OUTLINE VARIANT */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Outline Buttons</h2>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="inline-flex rounded-md shadow-sm" role="group" aria-label="Basic outlined example">
                        <button type="button" className="px-4 py-2 border border-primary text-primary rounded-l-md hover:bg-primary hover:text-primary-foreground transition-colors">Left</button>
                        <button type="button" className="px-4 py-2 border-t border-b border-r border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">Middle</button>
                        <button type="button" className="px-4 py-2 border-t border-b border-r border-primary text-primary rounded-r-md hover:bg-primary hover:text-primary-foreground transition-colors">Right</button>
                    </div>
                </div>
            </section>

            {/* 3. CHECKBOX AND RADIO BUTTON GROUPS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Checkbox and Radio Button Groups</h2>
                <p className="text-muted-foreground mb-4">
                    Combine button-like checkbox and radio toggles into a seamless looking button group.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="inline-flex rounded-md shadow-sm" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check hidden" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                        <label className="btn btn-outline-primary px-4 py-2 border border-primary text-primary rounded-l-md hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors peer-checked:bg-primary peer-checked:text-white" htmlFor="btnradio1">Radio 1</label>

                        <input type="radio" className="btn-check hidden" name="btnradio" id="btnradio2" autoComplete="off" />
                        <label className="btn btn-outline-primary px-4 py-2 border-t border-b border-r border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors" htmlFor="btnradio2">Radio 2</label>

                        <input type="radio" className="btn-check hidden" name="btnradio" id="btnradio3" autoComplete="off" />
                        <label className="btn btn-outline-primary px-4 py-2 border-t border-b border-r border-primary text-primary rounded-r-md hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors" htmlFor="btnradio3">Radio 3</label>
                    </div>
                </div>
            </section>

        </DocLayout>
    );
};

export default ButtonGroupPage;
