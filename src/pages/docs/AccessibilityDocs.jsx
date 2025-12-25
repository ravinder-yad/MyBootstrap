import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import { Keyboard, Eye, MousePointer2 } from 'lucide-react';

const AccessibilityDocs = () => {
    return (
        <DocLayout
            title="Accessibility"
            description="Guidance on creating inclusive interfaces that are usable by everyone, including people using screen readers and assistive technologies."
        >

            {/* 1. KEY PILLARS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Key Pillars</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-xl border border-border bg-card">
                        <Keyboard size={32} className="text-primary mb-4" />
                        <h3 className="font-bold text-lg mb-2">Keyboard Navigation</h3>
                        <p className="text-sm text-muted-foreground">
                            Ensure all interactive elements can be reached and activated using only a keyboard (Tab, Enter, Space).
                        </p>
                    </div>
                    <div className="p-6 rounded-xl border border-border bg-card">
                        <Eye size={32} className="text-primary mb-4" />
                        <h3 className="font-bold text-lg mb-2">Screen Readers</h3>
                        <p className="text-sm text-muted-foreground">
                            Use semantic HTML and ARIA roles so that users with visual impairments can understand the UI structure.
                        </p>
                    </div>
                    <div className="p-6 rounded-xl border border-border bg-card">
                        <MousePointer2 size={32} className="text-primary mb-4" />
                        <h3 className="font-bold text-lg mb-2">Color Contrast</h3>
                        <p className="text-sm text-muted-foreground">
                            Maintain sufficient contrast ratios between text and background colors for readability.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. CHECKLIST */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Developer Checklist</h2>
                <div className="bg-muted/30 rounded-xl border border-border divide-y divide-border">
                    <div className="p-4 flex gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center text-primary text-[10px] font-bold">1</div>
                        <div>
                            <h4 className="font-bold">Semantic HTML</h4>
                            <p className="text-sm text-muted-foreground">Prefer native elements <code>&lt;button&gt;</code> over <code>&lt;div onClick&gt;</code>.</p>
                        </div>
                    </div>
                    <div className="p-4 flex gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center text-primary text-[10px] font-bold">2</div>
                        <div>
                            <h4 className="font-bold">Focus Management</h4>
                            <p className="text-sm text-muted-foreground">Never remove focus outlines (<code>outline: none</code>) without providing a visible alternative.</p>
                        </div>
                    </div>
                    <div className="p-4 flex gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center text-primary text-[10px] font-bold">3</div>
                        <div>
                            <h4 className="font-bold">Form Labels</h4>
                            <p className="text-sm text-muted-foreground">Ensure every input has an associated <code>&lt;label&gt;</code> or <code>aria-label</code>.</p>
                        </div>
                    </div>
                    <div className="p-4 flex gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center text-primary text-[10px] font-bold">4</div>
                        <div>
                            <h4 className="font-bold">Alt Text</h4>
                            <p className="text-sm text-muted-foreground">Provide descriptive <code>alt</code> text for all meaningful images.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FOCUS MANAGEMENT */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Focus Management</h2>
                <p className="text-muted-foreground mb-4">
                    My Bootstrap includes default focus ring styles that are high-contrast and visible.
                    For modals and offcanvas menus, we implement **focus trapping** to keep the user within the active dialog, ensuring they don't tab into the background content.
                </p>
            </section>

        </DocLayout>
    );
};

export default AccessibilityDocs;
