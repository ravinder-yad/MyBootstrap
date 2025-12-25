import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Link } from 'lucide-react';

const ColoredLinksPage = () => {
    return (
        <DocLayout
            title="Colored Links"
            description="Colored links with hover states."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Link size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    You can use the <code>.link-*</code> classes to colorize links. Unlike the <code>.text-*</code> classes, these classes have a <code>:hover</code> and <code>:focus</code> state.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4 space-y-2">
                    <div><a href="#" className="link-primary text-primary hover:text-primary/80 transition-colors">Primary link</a></div>
                    <div><a href="#" className="link-secondary text-secondary-foreground hover:text-secondary-foreground/80 transition-colors">Secondary link</a></div>
                    <div><a href="#" className="link-success text-green-500 hover:text-green-600 transition-colors">Success link</a></div>
                    <div><a href="#" className="link-danger text-red-500 hover:text-red-600 transition-colors">Danger link</a></div>
                    <div><a href="#" className="link-warning text-yellow-500 hover:text-yellow-600 transition-colors">Warning link</a></div>
                    <div><a href="#" className="link-info text-blue-400 hover:text-blue-500 transition-colors">Info link</a></div>
                </div>

                <CodeBlock language="html" code={`<a href="#" class="link-primary">Primary link</a>
<a href="#" class="link-secondary">Secondary link</a>
<a href="#" class="link-success">Success link</a>
<a href="#" class="link-danger">Danger link</a>
<a href="#" class="link-warning">Warning link</a>
<a href="#" class="link-info">Info link</a>`} />
            </section>

            {/* 2. LINK UTILITIES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Link Utilities</h2>
                <p className="text-muted-foreground mb-4">
                    Colored links can also be modified by our link utilities.
                </p>
                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div><a href="#" className="link-primary text-primary hover:text-primary/80 underline-offset-4 decoration-2 decoration-primary/50 hover:decoration-primary transition-all">Custom underline link</a></div>
                </div>
            </section>

        </DocLayout>
    );
};

export default ColoredLinksPage;
