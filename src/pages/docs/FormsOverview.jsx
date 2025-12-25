import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import { Check, Layout, AlertCircle, Eye } from 'lucide-react';

const FormsOverview = () => {
    return (
        <DocLayout
            title="Forms"
            description="Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms."
        >

            {/* 1. PHILOSOPHY */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Philosophy</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 p-6 rounded-xl border border-border">
                        <h3 className="font-semibold mb-2 flex items-center gap-2"><Layout size={18} /> Mobile-First Layouts</h3>
                        <p className="text-sm text-muted-foreground">
                            Form controls block-level by default for easier touch interaction on mobile devices.
                        </p>
                    </div>
                    <div className="bg-muted/30 p-6 rounded-xl border border-border">
                        <h3 className="font-semibold mb-2 flex items-center gap-2"><Eye size={18} /> Accessible by Default</h3>
                        <p className="text-sm text-muted-foreground">
                            All inputs paired with labels, proper ARIA attributes, and high-contrast focus states.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. SUPPORTED CONTROLS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Supported Controls</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Input (Text, Email, Password)', 'Select (Native & Custom)', 'Checks & Radios', 'Range Slider', 'Textarea', 'File Upload', 'Switch / Toggle', 'Input Groups'].map((item) => (
                        <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-card border border-border">
                            <Check size={16} className="text-green-500 shrink-0" />
                            <span className="text-sm font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. LAYOUT & VALIDATION */}
            <section className="mb-12 flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">Layout System</h2>
                    <ul className="space-y-3 text-muted-foreground">
                        <li>• <strong>Vertical Forms:</strong> Standard stacked layout (default).</li>
                        <li>• <strong>Horizontal Forms:</strong> Labels and inputs side-by-side using Grid.</li>
                        <li>• <strong>Inline Forms:</strong> Compact single-line forms for simple inputs.</li>
                        <li>• <strong>Floating Labels:</strong> Modern Material-style labels inside inputs.</li>
                    </ul>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">Validation</h2>
                    <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-center gap-2 text-red-500"><AlertCircle size={16} /> <strong>Error State:</strong> Red border, icon, and text.</li>
                        <li className="flex items-center gap-2 text-green-500"><Check size={16} /> <strong>Success State:</strong> Green border and icon.</li>
                        <li>• <strong>Browser Defaults:</strong> Fully supported fallback.</li>
                        <li>• <strong>Server-side:</strong> Easy integration with backend errors.</li>
                    </ul>
                </div>
            </section>

            {/* 4. DESIGN IDEAS */}
            <section className="mb-12 bg-slate-950 text-slate-300 p-8 rounded-2xl border border-slate-800">
                <h2 className="text-xl font-bold text-white mb-6">30 Form Design Concepts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-sm font-mono">
                    {[
                        "Simple Login", "Signup Form", "Contact Form", "Feedback Form", "Newsletter Form",
                        "Inline Form", "Horizontal Form", "Multi-column Form", "Card-based Form", "Stepper Wizard",
                        "Search Bar", "Filter Panel", "Upload Dropzone", "Date Picker", "Payment Form",
                        "Floating Labels", "Icon Inputs", "Validation Heavy", "Auto-save Form", "Minimal Form",
                        "Multi-step Wizard", "Conditional Fields", "Survey Form", "Settings Panel", "Profile Edit",
                        "Dark Mode Form", "Brand Colored", "Glassmorphism", "High Contrast", "Voice Input Form"
                    ].map((idea, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <span className="text-slate-600">{(idx + 1).toString().padStart(2, '0')}.</span>
                            <span className="text-slate-200">{idea}</span>
                        </div>
                    ))}
                </div>
            </section>

        </DocLayout>
    );
};

export default FormsOverview;
