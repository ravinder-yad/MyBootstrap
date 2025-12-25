import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { MousePointerClick } from 'lucide-react';

const ButtonsPage = () => {
    return (
        <DocLayout
            title="Buttons"
            description="Use Bootstrap's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."
        >

            {/* 1. VARIANTS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><MousePointerClick size={24} /> Variants</h2>
                <p className="text-muted-foreground mb-4">
                    Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl flex flex-wrap gap-4 mb-4">
                    <button type="button" className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">Primary</button>
                    <button type="button" className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">Secondary</button>
                    <button type="button" className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors">Success</button>
                    <button type="button" className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors">Danger</button>
                    <button type="button" className="px-4 py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition-colors">Warning</button>
                    <button type="button" className="px-4 py-2 rounded-md bg-blue-400 text-white hover:bg-blue-500 transition-colors">Info</button>
                    <button type="button" className="px-4 py-2 rounded-md bg-muted text-foreground hover:bg-muted/80 transition-colors">Light</button>
                    <button type="button" className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black transition-colors">Dark</button>
                    <button type="button" className="px-4 py-2 rounded-md text-primary hover:underline hover:bg-primary/10 transition-colors">Link</button>
                </div>

                <CodeBlock language="html" code={`<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
...`} />
            </section>

            {/* 2. OUTLINE BUTTONS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Outline Buttons</h2>
                <p className="text-muted-foreground mb-4">
                    In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the <code>.btn-outline-*</code> ones to remove all background images and colors on any button.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl flex flex-wrap gap-4 mb-4">
                    <button type="button" className="px-4 py-2 rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">Primary</button>
                    <button type="button" className="px-4 py-2 rounded-md border border-secondary text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors">Secondary</button>
                    <button type="button" className="px-4 py-2 rounded-md border border-green-500 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white transition-colors">Success</button>
                </div>
            </section>

            {/* 3. SIZES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Sizes</h2>
                <div className="bg-card border border-border p-6 rounded-xl flex items-center gap-4 mb-4">
                    <button type="button" className="px-6 py-3 text-lg rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">Large button</button>
                    <button type="button" className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">Normal button</button>
                    <button type="button" className="px-2 py-1 text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">Small button</button>
                </div>
                <CodeBlock language="html" code={`<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-primary btn-sm">Small button</button>`} />
            </section>

        </DocLayout>
    );
};

export default ButtonsPage;
