import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { RefreshCcw, Monitor, Type } from 'lucide-react';

const RebootPage = () => {
    return (
        <DocLayout
            title="Reboot"
            description="Reboot, a collection of element-specific CSS changes in a single file, kickstart Bootstrap to provide an elegant, consistent, and simple baseline to build upon."
        >

            {/* 1. OVERVIEW */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Why Reboot?</h2>
                <div className="bg-muted/30 p-6 rounded-xl border border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                        Reboot builds upon Normalize.css, providing many HTML elements with somewhat opinionated styles using only element selectors.
                        Additional styling is done only with classes. For example, we normalize some <code>table</code> styles for a simpler baseline and later provide <code>.table</code>, <code>.table-bordered</code>, and so on.
                    </p>
                </div>
            </section>

            {/* 2. BASE STYLES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><RefreshCcw size={24} /> Base Styles</h2>
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold mb-2">Box Sizing</h4>
                        <p className="text-sm text-muted-foreground mb-2">We set the global <code>box-sizing</code> to <code>border-box</code> on every element.</p>
                        <CodeBlock language="css" code={`*,
*::before,
*::after {
  box-sizing: border-box;
}`} />
                    </div>

                    <div>
                        <h4 className="font-bold mb-2">Body Defaults</h4>
                        <p className="text-sm text-muted-foreground mb-2">We declare a default background-color and color on the <code>&lt;body&gt;</code>.</p>
                        <CodeBlock language="css" code={`body {
  margin: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}`} />
                    </div>
                </div>
            </section>

            {/* 3. BROWSER CONSISTENCY */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Monitor size={24} /> Browser Consistency</h2>
                <p className="text-muted-foreground mb-4">
                    Reboot corrects inconsistencies across modern browsers like Chrome, Firefox, and Safari.
                    It ensures that elements like headings, lists, and forms rendering identically regardless of the user's platform.
                </p>
            </section>

            {/* 4. TYPOGRAPHY RESET */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Type size={24} /> Typography Reset</h2>
                <p className="text-muted-foreground mb-4">
                    We remove the top margin from headings and paragraphs to give you more control using utility classes.
                </p>
                <CodeBlock language="css" code={`h1, h2, h3, h4, h5, h6, p {
  margin-top: 0;
  margin-bottom: 1rem;
}`} />
            </section>

        </DocLayout>
    );
};

export default RebootPage;
