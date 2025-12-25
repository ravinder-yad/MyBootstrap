import React, { useState } from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Package, Terminal, Zap, FileCode } from 'lucide-react';

const JavaScript = () => {
    const [installMethod, setInstallMethod] = useState('npm');

    return (
        <DocLayout
            title="JavaScript"
            description="My Bootstrap uses JavaScript to enable interactive components such as modals, dropdowns, and tooltips."
        >

            {/* 1. WHEN JS IS REQUIRED */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">When is JavaScript required?</h2>
                <p className="text-muted-foreground mb-4">
                    While many components are CSS-only, the following features require our JavaScript to function:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['Modal', 'Dropdown', 'Offcanvas', 'Tooltip', 'Popover', 'Toast', 'Scrollspy', 'Alert (dismiss)', 'Carousel'].map((item) => (
                        <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border">
                            <Zap size={16} className="text-yellow-500" />
                            <span className="font-medium text-sm">{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. INCLUDING JS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Including JavaScript</h2>

                {/* Tabs */}
                <div className="flex items-center gap-2 border-b border-border mb-0">
                    <button onClick={() => setInstallMethod('npm')} className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${installMethod === 'npm' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}>npm</button>
                    <button onClick={() => setInstallMethod('cdn')} className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${installMethod === 'cdn' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}>CDN</button>
                </div>

                <div className="mt-0">
                    {installMethod === 'npm' ? (
                        <CodeBlock language="bash" code="import 'my-bootstrap/dist/js/core.bundle';" />
                    ) : (
                        <CodeBlock language="html" code='<script src="https://cdn.mybootstrap.com/v1.0.0/core.bundle.min.js"></script>' />
                    )}
                </div>
            </section>

            {/* 3. EVENTS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Events</h2>
                <p className="text-muted-foreground mb-4">
                    My Bootstrap provides custom events for most plugins' unique actions.
                </p>
                <div className="overflow-x-auto rounded-xl border border-border">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50 border-b border-border">
                            <tr>
                                <th className="px-6 py-4 font-semibold w-1/3">Event Type</th>
                                <th className="px-6 py-4 font-semibold">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border bg-card">
                            {[
                                { event: "show.bs.*", desc: "Fires immediately when the show instance method is called." },
                                { event: "shown.bs.*", desc: "Fires when the element has been made visible to the user." },
                                { event: "hide.bs.*", desc: "Fires immediately when the hide instance method is called." },
                                { event: "hidden.bs.*", desc: "Fires when the element has finished being hidden." },
                            ].map((row, idx) => (
                                <tr key={idx} className="hover:bg-muted/20 transition-colors">
                                    <td className="px-6 py-4 font-mono text-primary">{row.event}</td>
                                    <td className="px-6 py-4 text-muted-foreground">{row.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 4. REACT USAGE NOTE */}
            <section className="mb-12 bg-blue-500/10 border border-blue-500/20 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-2 font-bold text-blue-600 dark:text-blue-400">
                    <FileCode size={20} />
                    <span>Using React?</span>
                </div>
                <p className="text-sm text-muted-foreground">
                    If you are using React, you don't need to worry about manual initialization or event listeners.
                    Our React components handle all of this internally. Just import and use.
                </p>
            </section>

        </DocLayout>
    );
};

export default JavaScript;
