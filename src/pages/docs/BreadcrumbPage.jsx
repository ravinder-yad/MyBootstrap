import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { ChevronRight, Home } from 'lucide-react';

const BreadcrumbPage = () => {
    return (
        <DocLayout
            title="Breadcrumb"
            description="Indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><ChevronRight size={24} /> Example</h2>

                <div className="bg-card border border-border p-6 rounded-xl space-y-4 mb-4">
                    <nav aria-label="breadcrumb">
                        <ol className="flex items-center text-sm text-muted-foreground">
                            <li className="breadcrumb-item active text-foreground" aria-current="page">Home</li>
                        </ol>
                    </nav>

                    <nav aria-label="breadcrumb">
                        <ol className="flex items-center text-sm text-muted-foreground">
                            <li className="breadcrumb-item hover:text-primary cursor-pointer">Home</li>
                            <li className="mx-2 text-muted-foreground/50">/</li>
                            <li className="breadcrumb-item active text-foreground" aria-current="page">Library</li>
                        </ol>
                    </nav>

                    <nav aria-label="breadcrumb">
                        <ol className="flex items-center text-sm text-muted-foreground">
                            <li className="breadcrumb-item hover:text-primary cursor-pointer">Home</li>
                            <li className="mx-2 text-muted-foreground/50">/</li>
                            <li className="breadcrumb-item hover:text-primary cursor-pointer">Library</li>
                            <li className="mx-2 text-muted-foreground/50">/</li>
                            <li className="breadcrumb-item active text-foreground" aria-current="page">Data</li>
                        </ol>
                    </nav>
                </div>

                <CodeBlock language="html" code={`<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>`} />
            </section>

            {/* 2. DIVIDERS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Dividers</h2>
                <p className="text-muted-foreground mb-4">
                    Dividers are automatically added in CSS through <code>::before</code> and <code>content</code>. You can change them via CSS variables.
                </p>
                <div className="bg-muted p-4 rounded-lg border border-border text-sm">
                    <strong>Note:</strong> In My Bootstrap, we use a simple text slash <code>/</code> by default for maximum compatibility.
                </div>
            </section>

        </DocLayout>
    );
};

export default BreadcrumbPage;
