import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Palette } from 'lucide-react';

const ColorsPage = () => {
    return (
        <DocLayout
            title="Colors"
            description="Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too."
        >

            {/* 1. TEXT COLORS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Palette size={24} /> Text Color</h2>
                <p className="text-muted-foreground mb-4">
                    Colorize text with color utilities.
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
                    <p className="text-white bg-black p-1 rounded inline-block">.text-white</p>
                </div>

                <CodeBlock language="html" code={`<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-success">.text-success</p>
<p class="text-danger">.text-danger</p>
<p class="text-warning">.text-warning</p>
<p class="text-info">.text-info</p>
<p class="text-light">.text-light</p>
<p class="text-dark">.text-dark</p>
<p class="text-body">.text-body</p>
<p class="text-muted">.text-muted</p>
<p class="text-white">.text-white</p>`} />
            </section>

            {/* 2. OPACITY */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Text Opacity</h2>
                <p className="text-muted-foreground mb-4">
                    Text opacity can be changed using CSS variables or custom theme classes.
                </p>
                <div className="bg-card border border-border p-6 rounded-xl mb-4 space-y-2">
                    <p className="text-primary text-opacity-50">This is primary text with 50% opacity.</p>
                    <p className="text-black dark:text-white opacity-50">This is body text with 50% opacity.</p>
                </div>
                <CodeBlock language="html" code={`<p class="text-primary text-opacity-50">This is 50% opacity primary text</p>
<p class="text-primary text-opacity-25">This is 25% opacity primary text</p>`} />
            </section>

        </DocLayout>
    );
};

export default ColorsPage;
