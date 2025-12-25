import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Box, Play } from 'lucide-react';

const ParcelPage = () => {
    return (
        <DocLayout
            title="Parcel"
            description="A guide for using My Bootstrap with Parcel, the zero-configuration web application bundler."
        >

            {/* 1. OVERVIEW */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Zero Configuration</h2>
                <p className="text-muted-foreground mb-4">
                    Parcel works out of the box with minimal setup. It automatically detects SCSS/CSS imports and bundles them.
                </p>
            </section>

            {/* 2. SETUP */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Setup</h2>
                <p className="text-sm font-semibold mb-2">1. Install Parcel</p>
                <CodeBlock language="bash" code="npm install --save-dev parcel" />

                <p className="text-sm font-semibold mb-2 mt-4">2. Install My Bootstrap</p>
                <CodeBlock language="bash" code="npm install my-bootstrap @popperjs/core" />
            </section>

            {/* 3. USING MY BOOTSTRAP */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Usage</h2>
                <p className="text-sm font-semibold mb-2">Import in your JS entry file (e.g., <code>index.js</code>)</p>
                <CodeBlock language="javascript" code={`// Import all of My Bootstrap's CSS
import 'my-bootstrap/dist/css/bootstrap.min.css';

// Import My Bootstrap's JS
import * as bootstrap from 'my-bootstrap';`} />
            </section>

            {/* 4. PRODUCTION BUILD */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Production</h2>
                <p className="text-muted-foreground mb-4">
                    Run <code>npx parcel build index.html</code>. Parcel will automatically optimize, minify, and hash your assets for production.
                </p>
            </section>

        </DocLayout>
    );
};

export default ParcelPage;
