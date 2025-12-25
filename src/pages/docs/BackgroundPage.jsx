import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Palette } from 'lucide-react';

const BackgroundPage = () => {
    return (
        <DocLayout
            title="Background"
            description="Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too."
        >

            {/* 1. BACKGROUND COLOR */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Palette size={24} /> Background Color</h2>
                <p className="text-muted-foreground mb-4">
                    Similar to the contextual text color classes, set the background of an element to any contextual class. Background utilities do not set <code>color</code>, so in some cases you’ll want to use <code>.text-*</code> color utilities.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    <div className="p-3 mb-2 bg-primary text-white rounded">.bg-primary</div>
                    <div className="p-3 mb-2 bg-secondary text-secondary-foreground rounded">.bg-secondary</div>
                    <div className="p-3 mb-2 bg-green-500 text-white rounded">.bg-success</div>
                    <div className="p-3 mb-2 bg-red-500 text-white rounded">.bg-danger</div>
                    <div className="p-3 mb-2 bg-yellow-500 text-black rounded">.bg-warning</div>
                    <div className="p-3 mb-2 bg-blue-400 text-black rounded">.bg-info</div>
                    <div className="p-3 mb-2 bg-muted text-muted-foreground rounded">.bg-light</div>
                    <div className="p-3 mb-2 bg-black text-white rounded">.bg-dark</div>
                    <div className="p-3 mb-2 bg-white text-black border rounded">.bg-white</div>
                    <div className="p-3 mb-2 bg-transparent text-black border rounded">.bg-transparent</div>
                </div>

                <CodeBlock language="html" code={`<div class="bg-primary text-white">...</div>
<div class="bg-secondary text-white">...</div>
<div class="bg-success text-white">...</div>
<div class="bg-danger text-white">...</div>
<div class="bg-warning text-dark">...</div>
<div class="bg-info text-dark">...</div>
<div class="bg-light text-dark">...</div>
<div class="bg-dark text-white">...</div>
<div class="bg-white text-dark">...</div>
<div class="bg-transparent text-dark">...</div>`} />
            </section>

            {/* 2. GRADIENT */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Gradient</h2>
                <p className="text-muted-foreground mb-4">
                    By adding a <code>.bg-gradient</code> class, a linear gradient is added as a background image to the backgrounds. This gradient starts with a semi-transparent white which fades out to the bottom.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    <div className="p-3 mb-2 bg-primary bg-gradient-to-b from-white/15 to-transparent text-white rounded">.bg-gradient</div>
                    <div className="p-3 mb-2 bg-secondary bg-gradient-to-b from-white/15 to-transparent text-secondary-foreground rounded">.bg-gradient</div>
                    <div className="p-3 mb-2 bg-green-500 bg-gradient-to-b from-white/15 to-transparent text-white rounded">.bg-gradient</div>
                </div>
                <CodeBlock language="html" code={`<div class="bg-primary bg-gradient text-white">...</div>
<div class="bg-secondary bg-gradient text-white">...</div>
<div class="bg-success bg-gradient text-white">...</div>`} />
            </section>

            {/* 3. OPACITY */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Background Opacity</h2>
                <p className="text-muted-foreground mb-4">
                    You can create specific opacity variations using CSS variables or custom classes if configured in your theme.
                </p>
                <div className="p-3 bg-primary/75 text-white rounded mb-2">.bg-primary with 75% opacity</div>
                <div className="p-3 bg-primary/50 text-white rounded mb-2">.bg-primary with 50% opacity</div>
                <div className="p-3 bg-primary/25 text-white rounded mb-2">.bg-primary with 25% opacity</div>
                <CodeBlock language="html" code={`<div class="bg-primary bg-opacity-75">...</div>
<div class="bg-primary bg-opacity-50">...</div>
<div class="bg-primary bg-opacity-25">...</div>`} />
            </section>

        </DocLayout>
    );
};

export default BackgroundPage;
