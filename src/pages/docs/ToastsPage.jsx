import React, { useState } from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Bell, X } from 'lucide-react';

const ToastsPage = () => {
    const [showToast, setShowToast] = useState(true);

    return (
        <DocLayout
            title="Toasts"
            description="Push notifications to your visitors with a toast, a lightweight and easily customizable alert message."
        >

            {/* 1. BASIC EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Bell size={24} /> Basic Example</h2>
                <p className="text-muted-foreground mb-4">
                    Toasts are flexible and extensible.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4 bg-muted/20 relative h-[200px]">
                    {showToast && (
                        <div className="toast show absolute top-4 right-4 bg-card border border-border shadow-lg rounded-lg w-80 animate-in fade-in slide-in-from-top-5 duration-300" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header flex items-center justify-between p-3 border-b border-border bg-muted/50 rounded-t-lg">
                                <strong className="mr-auto font-medium">Bootstrap</strong>
                                <small className="text-muted-foreground">11 mins ago</small>
                                <button type="button" className="btn-close ml-2 text-muted-foreground hover:text-foreground" onClick={() => setShowToast(false)} aria-label="Close">
                                    <X size={16} />
                                </button>
                            </div>
                            <div className="toast-body p-3 text-sm text-foreground">
                                Hello, world! This is a toast message.
                            </div>
                        </div>
                    )}
                    {!showToast && (
                        <button className="btn btn-secondary bg-muted px-4 py-2 rounded-md absolute top-4 right-4" onClick={() => setShowToast(true)}>Show Toast</button>
                    )}
                </div>

                <CodeBlock language="html" code={`<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <strong class="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>`} />
            </section>

            {/* 2. PLACEMENT */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Placement</h2>
                <p className="text-muted-foreground mb-4">
                    Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle.
                </p>
            </section>

        </DocLayout>
    );
};

export default ToastsPage;
