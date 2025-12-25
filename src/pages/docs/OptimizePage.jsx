import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Gauge, Scissors, FileArchive, CheckSquare } from 'lucide-react';

const OptimizePage = () => {
    return (
        <DocLayout
            title="Optimize"
            description="Keep your project lightweight, fast, and responsive by optimizing your CSS compilation."
        >

            {/* 1. OVERVIEW */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Performance First</h2>
                <div className="bg-green-500/10 p-6 rounded-xl border border-green-500/20 mb-6">
                    <div className="flex gap-4 items-center">
                        <Gauge className="text-green-600 dark:text-green-400" size={32} />
                        <div>
                            <h4 className="font-bold text-green-700 dark:text-green-400">Lean & Fast</h4>
                            <p className="text-xs text-green-600/80 dark:text-green-400/80">
                                My Bootstrap is designed to be as light as possible. By default, only essential styles are generated.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. MINIFICATION */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><FileArchive size={24} /> Minification</h2>
                <p className="text-muted-foreground mb-4">
                    Always use the minified version of our CSS logic in production. This reduces the file size by removing whitespace and comments.
                </p>
                <CodeBlock language="html" code={`<!-- Use this in Production -->
<link rel="stylesheet" href="bootstrap.min.css">`} />
            </section>

            {/* 3. TREE SHAKING (UNUSED CSS) */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Scissors size={24} /> Unused CSS</h2>
                <p className="text-muted-foreground mb-4">
                    If you are using a modern bundler like Webpack, Vite, or Parcel, you can leverage PurgeCSS to auto-remove styles you aren't using.
                </p>
                <CodeBlock language="javascript" code={`// purgecss.config.js
module.exports = {
  content: ['src/**/*.html', 'src/**/*.jsx'],
  css: ['src/bootstrap.css']
}`} />
            </section>

            {/* 4. PERFORMANCE CHECKLIST */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><CheckSquare size={24} /> Performance Checklist</h2>
                <ul className="space-y-4">
                    {[
                        "Use minified CSS/JS in production.",
                        "Enable Gzip or Brotli compression on your server.",
                        "Disable unused components via Sass variables.",
                        "Avoid using excessive nested CSS selectors.",
                        "Utilize utility classes instead of writing new CSS."
                    ].map((text, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-muted/20 p-3 rounded-lg border border-border">
                            <CheckSquare size={18} className="text-primary mt-1 shrink-0" />
                            <span className="text-sm font-medium">{text}</span>
                        </div>
                    ))}
                </ul>
            </section>

        </DocLayout>
    );
};

export default OptimizePage;
