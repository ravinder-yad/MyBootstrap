import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { FileCode, Layers, Settings, Workflow } from 'lucide-react';

const SassPage = () => {
    return (
        <DocLayout
            title="Sass"
            description="Utilize our source Sass files to take advantage of variables, maps, mixins, and more."
        >

            {/* 1. WHY SASS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Why Sass?</h2>
                <div className="bg-muted/30 p-6 rounded-xl border border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                        Sass (Syntactically Awesome Style Sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
                        My Bootstrap uses Sass to enable modular and customizable architecture.
                    </p>
                    <div className="flex gap-4 items-center">
                        <Layers className="text-primary" size={32} />
                        <div>
                            <h4 className="font-bold">Source of Truth</h4>
                            <p className="text-xs text-muted-foreground">All styles originate from <code>.scss</code> files, giving you full control over the build.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. ARCHITECTURE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">File Structure</h2>
                <p className="text-muted-foreground mb-4">
                    Whenever possible, avoid modifying My Bootstrap's core files. Instead, create your own <code>custom.scss</code> and import Bootstrap.
                </p>
                <CodeBlock language="scss" code={`// Your custom variables
$primary: #8000ff;

// Import My Bootstrap
@import "my-bootstrap/scss/bootstrap";`} />
            </section>

            {/* 3. VARIABLES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Settings size={24} /> Variables</h2>
                <p className="text-muted-foreground mb-4">
                    Every Sass variable in My Bootstrap includes the <code>!default</code> flag allowing you to override the variable’s default value in your own Sass without modifying our source code.
                </p>
                <CodeBlock language="scss" code={`$body-bg: #fff !default;
$body-color: #333 !default;
$border-radius: 0.375rem !default;`} />
            </section>

            {/* 4. MAPS & MIXINS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Workflow size={24} /> Maps & Mixins</h2>
                <p className="text-muted-foreground mb-4">
                    Use our semantic maps to generate classes and mixins to reuse styles.
                </p>
                <CodeBlock language="scss" code={`// Example: Theme Colors Map
$theme-colors: (
  "primary":    $primary,
  "secondary":  $secondary,
  "success":    $success,
  "info":       $info,
  "warning":    $warning,
  "danger":     $danger,
  "light":      $light,
  "dark":       $dark
) !default;`} />
            </section>

        </DocLayout>
    );
};

export default SassPage;
