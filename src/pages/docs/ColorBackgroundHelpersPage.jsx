import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Palette } from 'lucide-react';

const ColorBackgroundHelpersPage = () => {
    return (
        <DocLayout
            title="Color & Background"
            description="Set background colors, text colors, and more with our comprehensive color and background utilities."
        >

            {/* 1. TEXT COLORS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Palette size={24} /> Text Colors</h2>
                <p className="text-muted-foreground mb-4">
                    Colorize text with color utilities. If you want to colorize links, you can use the <code>.link-*</code> helper classes.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4 space-y-2">
                    <p className="text-primary">.text-primary</p>
                    <p className="text-secondary-foreground">.text-secondary</p>
                    <p className="text-green-500">.text-success</p>
                    <p className="text-red-500">.text-danger</p>
                    <p className="text-yellow-500">.text-warning</p>
                    <p className="text-blue-400">.text-info</p>
                    <p className="text-muted-foreground">.text-muted</p>
                    <p className="text-black dark:text-white bg-white dark:bg-black p-1 rounded inline-block">.text-body</p>
                </div>

                <CodeBlock language="html" code={`<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-success">.text-success</p>
...`} />
            </section>

            {/* 2. BACKGROUND COLORS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Background Colors</h2>
                <p className="text-muted-foreground mb-4">
                    Similar to text, easily set the background of an element to any contextual class.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4 space-y-2 text-white text-sm">
                    <div className="p-3 bg-primary rounded">.bg-primary</div>
                    <div className="p-3 bg-secondary text-secondary-foreground rounded">.bg-secondary</div>
                    <div className="p-3 bg-green-500 rounded">.bg-success</div>
                    <div className="p-3 bg-red-500 rounded">.bg-danger</div>
                    <div className="p-3 bg-yellow-500 text-black rounded">.bg-warning</div>
                    <div className="p-3 bg-blue-400 text-black rounded">.bg-info</div>
                    <div className="p-3 bg-muted text-muted-foreground rounded">.bg-light</div>
                    <div className="p-3 bg-black rounded">.bg-dark</div>
                </div>
                <CodeBlock language="html" code={`<div class="bg-primary text-white">.bg-primary</div>
<div class="bg-secondary text-white">.bg-secondary</div>
<div class="bg-success text-white">.bg-success</div>
...`} />
            </section>

        </DocLayout>
    );
};

export default ColorBackgroundHelpersPage;
