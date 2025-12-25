import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Braces, Globe, Component, Variable } from 'lucide-react';

const CssVariablesPage = () => {
    return (
        <DocLayout
            title="CSS Variables"
            description="Use My Bootstrap's CSS custom properties for fast and futuristic real-time theming."
        >

            {/* 1. WHY CSS VARIABLES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Runtime Power</h2>
                <p className="text-muted-foreground mb-6">
                    Unlike Sass variables which are compiled away at build time, CSS variables (custom properties) exist in your browser at runtime.
                    This allows you to change values dynamically using JavaScript or Media Queries instantly.
                </p>
            </section>

            {/* 2. ROOT VARIABLES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Globe size={24} /> Root Variables</h2>
                <p className="text-muted-foreground mb-4">
                    We define a standard set of globally available variables in the <code>:root</code> pseudo-class.
                </p>
                <CodeBlock language="css" code={`:root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-font-sans-serif: system-ui, -apple-system, sans-serif;
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}`} />
            </section>

            {/* 3. COMPONENT VARIABLES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Component size={24} /> Component Scoping</h2>
                <p className="text-muted-foreground mb-4">
                    My Bootstrap 5.0+ makes heavy use of local variables to avoid global pollution. For example, our <code>.table</code> component defines its own local vars:
                </p>
                <CodeBlock language="css" code={`.table {
  --bs-table-bg: transparent;
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: #212529;
  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
  --bs-table-active-color: #212529;
  --bs-table-active-bg: rgba(0, 0, 0, 0.1);
  --bs-table-hover-color: #212529;
  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
}`} />
            </section>

            {/* 4. OVERRIDING EXAMPLES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Variable size={24} /> How to Override</h2>
                <p className="text-muted-foreground mb-4">
                    You can override a variable globally or within a specific scope.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold mb-2 text-sm">Global Override</h4>
                        <CodeBlock language="css" code={`body {
  --bs-body-bg: #8000ff;
  --bs-body-color: #fff;
}`} />
                    </div>
                    <div>
                        <h4 className="font-bold mb-2 text-sm">Local Override</h4>
                        <CodeBlock language="css" code={`.custom-component {
  --bs-primary: #ff0000;
}`} />
                    </div>
                </div>
            </section>

        </DocLayout>
    );
};

export default CssVariablesPage;
