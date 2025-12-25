import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Link2 } from 'lucide-react';

const LinkPage = () => {
    return (
        <DocLayout
            title="Link"
            description="Style links with specific utility classes."
        >

            {/* 1. EXAMPLES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Link2 size={24} /> Link Opacity</h2>
                <p className="text-muted-foreground mb-4">
                    Change the alpha opacity of the link <code>rgba()</code> color value.
                </p>

                <div className="space-y-2 mb-4">
                    <p><a href="#" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Link underline opacity 25</a></p>
                    <p><a href="#" className="link-primary link-offset-2 link-underline-opacity-50 link-underline-opacity-100-hover">Link underline opacity 50</a></p>
                    <p><a href="#" className="link-primary link-offset-2 link-underline-opacity-75 link-underline-opacity-100-hover">Link underline opacity 75</a></p>
                    <p><a href="#" className="link-primary link-offset-2 link-underline-opacity-100 link-underline-opacity-100-hover">Link underline opacity 100</a></p>
                </div>

                <CodeBlock language="html" code={`<a href="#" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Link underline opacity 25</a>
<a href="#" class="link-primary link-offset-2 link-underline-opacity-50 link-underline-opacity-100-hover">Link underline opacity 50</a>
<a href="#" class="link-primary link-offset-2 link-underline-opacity-75 link-underline-opacity-100-hover">Link underline opacity 75</a>
<a href="#" class="link-primary link-offset-2 link-underline-opacity-100 link-underline-opacity-100-hover">Link underline opacity 100</a>`} />
            </section>

            {/* 2. LINK OFFSET */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Link Offset</h2>
                <p className="text-muted-foreground mb-4">
                    Change the underline offset.
                </p>
                <div className="space-y-2 mb-4">
                    <p><a href="#" className="link-primary link-offset-1">Offset 1 link</a></p>
                    <p><a href="#" className="link-primary link-offset-2">Offset 2 link</a></p>
                    <p><a href="#" className="link-primary link-offset-3">Offset 3 link</a></p>
                </div>
                <CodeBlock language="html" code={`<a href="#" class="link-primary link-offset-1">Offset 1 link</a>
<a href="#" class="link-primary link-offset-2">Offset 2 link</a>
<a href="#" class="link-primary link-offset-3">Offset 3 link</a>`} />
            </section>

        </DocLayout>
    );
};

export default LinkPage;
