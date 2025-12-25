import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Moon, Sun, Smartphone, Monitor } from 'lucide-react';

const ColorModesPage = () => {
    return (
        <DocLayout
            title="Color Modes"
            description="My Bootstrap includes support for light and dark color modes out of the box."
        >

            {/* 1. OVERVIEW */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">How it works</h2>
                <div className="bg-muted/30 p-6 rounded-xl border border-border mb-6">
                    <p className="text-sm text-muted-foreground">
                        Color modes allow you to toggle the entire global theme of your application.
                        We use the <code>data-bs-theme</code> attribute on the <code>&lt;html&gt;</code> element to apply themes.
                    </p>
                </div>
                {/* Visual Preview */}
                <div className="grid grid-cols-2 gap-8">
                    <div className="p-6 bg-white text-slate-800 rounded-xl border border-slate-200 shadow-sm text-center">
                        <Sun className="mx-auto mb-2 text-yellow-500" size={32} />
                        <h4 className="font-bold">Light Mode</h4>
                        <p className="text-xs text-slate-500">Default bright theme.</p>
                    </div>
                    <div className="p-6 bg-slate-900 text-white rounded-xl border border-slate-700 shadow-sm text-center">
                        <Moon className="mx-auto mb-2 text-blue-400" size={32} />
                        <h4 className="font-bold">Dark Mode</h4>
                        <p className="text-xs text-slate-400">Easy on the eyes.</p>
                    </div>
                </div>
            </section>

            {/* 2. AUTO DETECTION */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Smartphone size={24} /> Auto Detection</h2>
                <p className="text-muted-foreground mb-4">
                    By default, we respect the user's operating system setting using the <code>prefers-color-scheme</code> media query.
                </p>
                <CodeBlock language="css" code={`@media (prefers-color-scheme: dark) {
  :root {
    --bs-body-color: #dee2e6;
    --bs-body-bg: #212529;
  }
}`} />
            </section>

            {/* 3. JAVASCRIPT TOGGLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Monitor size={24} /> JavaScript Toggle</h2>
                <p className="text-muted-foreground mb-4">
                    You can override the system default by setting the attribute manually using JavaScript.
                </p>
                <CodeBlock language="javascript" code={`// Set theme to Dark
document.documentElement.setAttribute('data-bs-theme', 'dark');

// Set theme to Light
document.documentElement.setAttribute('data-bs-theme', 'light');

// Set theme to Auto (System)
document.documentElement.setAttribute('data-bs-theme', 'auto');`} />
            </section>

        </DocLayout>
    );
};

export default ColorModesPage;
