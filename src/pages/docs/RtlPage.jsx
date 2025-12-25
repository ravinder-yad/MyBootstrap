import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import { AlignRight, Languages, AlertTriangle } from 'lucide-react';

const RtlPage = () => {
    return (
        <DocLayout
            title="RTL (Right-to-Left)"
            description="Built-in support for Right-to-Left (RTL) languages like Arabic, Hebrew, Persian, and Urdu."
        >

            {/* 1. OVERVIEW */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                    My Bootstrap supports RTL layouts out of the box. We use <strong>Logical Properties</strong> (e.g., <code>margin-inline-start</code> instead of <code>margin-left</code>) to ensure spacing adapts automatically to the document direction.
                </p>
                <div className="p-4 bg-muted border border-border rounded-lg flex items-center gap-4" dir="rtl">
                    <div className="font-bold text-primary">مثال (Example):</div>
                    <div className="text-sm">هذا النص يظهر من اليمين إلى اليسار تلقائيًا.</div>
                </div>
            </section>

            {/* 2. ENABLING RTL */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Enabling RTL</h2>
                <p className="text-muted-foreground mb-4">
                    To enable RTL, simply add <code>dir="rtl"</code> and an appropriate language attribute (like <code>lang="ar"</code>) to your <code>&lt;html&gt;</code> element.
                </p>
            </section>

            {/* 3. LAYOUT CHANGES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><AlignRight size={24} /> Layout Changes</h2>
                <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span className="text-sm">Grid columns reverse order (Column 1 starts at the right).</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span className="text-sm">Padding and margins automatically flip sides.</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span className="text-sm">Breadcrumbs and pagination arrows point in the correct direction.</span>
                    </li>
                </ul>
            </section>

            {/* 4. LIMITATIONS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Limitations</h2>
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-700 dark:text-yellow-400">
                    <div className="font-bold flex items-center gap-2 mb-2">
                        <AlertTriangle size={18} /> Third-party Plugins
                    </div>
                    <p className="text-sm">
                        While My Bootstrap core is RTL-ready, third-party libraries (charts, carousels) added manually may require their own RTL configuration options.
                    </p>
                </div>
            </section>

        </DocLayout>
    );
};

export default RtlPage;
