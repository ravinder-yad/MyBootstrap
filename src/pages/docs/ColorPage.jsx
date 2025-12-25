import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import { Palette, Copy } from 'lucide-react';

const ColorPage = () => {

    // Copy to clipboard helper logic would go here in a real app

    const colors = [
        { name: "Primary", hex: "#0d6efd", class: "bg-blue-600", text: "text-white" },
        { name: "Secondary", hex: "#6c757d", class: "bg-gray-500", text: "text-white" },
        { name: "Success", hex: "#198754", class: "bg-green-600", text: "text-white" },
        { name: "Danger", hex: "#dc3545", class: "bg-red-600", text: "text-white" },
        { name: "Warning", hex: "#ffc107", class: "bg-yellow-500", text: "text-black" },
        { name: "Info", hex: "#0dcaf0", class: "bg-cyan-500", text: "text-black" },
        { name: "Light", hex: "#f8f9fa", class: "bg-gray-100", text: "text-black" },
        { name: "Dark", hex: "#212529", class: "bg-slate-900", text: "text-white" },
    ];

    return (
        <DocLayout
            title="Color"
            description="My Bootstrap is supported by an extensive color system that themes our styles and components."
        >

            {/* 1. CORE PALETTE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Palette size={24} /> Theme Colors</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {colors.map((color) => (
                        <div key={color.name} className="group cursor-pointer">
                            <div className={`h-24 rounded-t-xl ${color.class} flex items-center justify-center shadow-sm`}>
                                <div className={`opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all ${color.text}`}>
                                    <Copy size={20} />
                                </div>
                            </div>
                            <div className="p-4 bg-card border border-border rounded-b-xl border-t-0">
                                <h4 className="font-bold text-sm">{color.name}</h4>
                                <code className="text-xs text-muted-foreground">{color.hex}</code>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. SEMANTIC MEANING */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Semantic Usage</h2>
                <p className="text-muted-foreground mb-4">
                    Colors in My Bootstrap are not just decoration; they convey meaning.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-blue-50 border border-blue-100 dark:bg-blue-900/10 dark:border-blue-800">
                        <strong className="text-blue-700 dark:text-blue-400">Primary:</strong> Main brand color, used for primary actions and active states.
                    </div>
                    <div className="p-4 rounded-lg bg-green-50 border border-green-100 dark:bg-green-900/10 dark:border-green-800">
                        <strong className="text-green-700 dark:text-green-400">Success:</strong> Indicates a successful or positive action.
                    </div>
                    <div className="p-4 rounded-lg bg-red-50 border border-red-100 dark:bg-red-900/10 dark:border-red-800">
                        <strong className="text-red-700 dark:text-red-400">Danger:</strong> Indicates a dangerous or negative action.
                    </div>
                    <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-100 dark:bg-yellow-900/10 dark:border-yellow-800">
                        <strong className="text-yellow-700 dark:text-yellow-400">Warning:</strong> Indicates a warning that might need attention.
                    </div>
                </div>
            </section>

        </DocLayout>
    );
};

export default ColorPage;
