import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { BarChart3 } from 'lucide-react';

const ProgressPage = () => {
    return (
        <DocLayout
            title="Progress"
            description="Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels."
        >

            {/* 1. EXAMPLES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><BarChart3 size={24} /> Examples</h2>
                <p className="text-muted-foreground mb-4">
                    Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4 space-y-4">
                    <div className="progress h-4 bg-muted rounded overflow-hidden">
                        <div className="progress-bar bg-primary h-full transition-all duration-500" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress h-4 bg-muted rounded overflow-hidden">
                        <div className="progress-bar bg-primary h-full transition-all duration-500" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress h-4 bg-muted rounded overflow-hidden">
                        <div className="progress-bar bg-primary h-full transition-all duration-500" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress h-4 bg-muted rounded overflow-hidden">
                        <div className="progress-bar bg-primary h-full transition-all duration-500" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress h-4 bg-muted rounded overflow-hidden">
                        <div className="progress-bar bg-primary h-full transition-all duration-500" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
...`} />
            </section>

            {/* 2. LABELS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Labels</h2>
                <p className="text-muted-foreground mb-4">
                    Add labels to your progress bars by placing text within the <code>.progress-bar</code>.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="progress h-4 bg-muted rounded overflow-hidden text-center text-xs text-white">
                        <div className="progress-bar bg-primary h-full transition-all duration-500 flex items-center justify-center" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                </div>
                <CodeBlock language="html" code={`<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>`} />
            </section>

            {/* 3. STRIPED */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Striped</h2>
                <p className="text-muted-foreground mb-4">
                    Add <code>.progress-bar-striped</code> to any <code>.progress-bar</code> to apply a stripe via CSS gradient over the progress bar's background color.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="progress h-4 bg-muted rounded overflow-hidden">
                        <div className="progress-bar progress-bar-striped bg-primary h-full transition-all duration-500" role="progressbar" style={{ width: '10%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <br />
                    <div className="progress h-4 bg-muted rounded overflow-hidden">
                        <div className="progress-bar progress-bar-striped bg-green-500 h-full transition-all duration-500" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </section>

        </DocLayout>
    );
};

export default ProgressPage;
