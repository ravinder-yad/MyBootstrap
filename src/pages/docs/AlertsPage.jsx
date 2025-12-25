import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react';

const AlertsPage = () => {
    return (
        <DocLayout
            title="Alerts"
            description="Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."
        >

            {/* 1. EXAMPLES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Info size={24} /> Examples</h2>
                <p className="text-muted-foreground mb-4">
                    Alerts are available for any length of text, as well as an optional dismiss button.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl space-y-4 mb-4">
                    <div className="alert bg-primary/10 text-primary border border-primary/20 p-4 rounded-md flex items-center gap-3" role="alert">
                        <Info size={18} />
                        <div>A simple primary alert—check it out!</div>
                    </div>
                    <div className="alert bg-muted text-muted-foreground border border-border p-4 rounded-md flex items-center gap-3" role="alert">
                        <Info size={18} />
                        <div>A simple secondary alert—check it out!</div>
                    </div>
                    <div className="alert bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 p-4 rounded-md flex items-center gap-3" role="alert">
                        <CheckCircle size={18} />
                        <div>A simple success alert—check it out!</div>
                    </div>
                    <div className="alert bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 p-4 rounded-md flex items-center gap-3" role="alert">
                        <XCircle size={18} />
                        <div>A simple danger alert—check it out!</div>
                    </div>
                    <div className="alert bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20 p-4 rounded-md flex items-center gap-3" role="alert">
                        <AlertTriangle size={18} />
                        <div>A simple warning alert—check it out!</div>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>`} />
            </section>

            {/* 2. DISMISSING */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Dismissing</h2>
                <p className="text-muted-foreground mb-4">
                    Add a dismiss button and the <code>.alert-dismissible</code> class, which adds extra padding to the right of the alert and positions the <code>.btn-close</code> button.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="alert bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20 p-4 rounded-md flex items-center justify-between gap-3" role="alert">
                        <div className="flex items-center gap-3">
                            <AlertTriangle size={18} />
                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                        </div>
                        <button type="button" className="text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-200" aria-label="Close">
                            <XCircle size={18} />
                        </button>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`} />
            </section>

        </DocLayout>
    );
};

export default AlertsPage;
