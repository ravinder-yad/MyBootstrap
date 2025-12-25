import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Menu, Search, Sun, LayoutPanelTop } from 'lucide-react';

const NavbarDocs = () => {
    return (
        <DocLayout
            title="Navbar"
            description="Documentation and examples for the powerful, responsive navigation header."
        >

            {/* 1. BASIC STRUCTURE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Basic Structure</h2>
                <div className="p-4 bg-muted border border-border rounded-lg mb-4 flex items-center justify-between">
                    <div className="font-bold flex items-center gap-2"><LayoutPanelTop /> Brand</div>
                    <div className="hidden md:flex gap-4 text-sm text-muted-foreground">
                        <span>Home</span>
                        <span>Features</span>
                        <span>Pricing</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-1 rounded bg-background border"><Search size={16} /></button>
                        <button className="p-1 rounded bg-background border md:hidden"><Menu size={16} /></button>
                    </div>
                </div>
                <p className="text-muted-foreground mb-4">
                    Navbars require a wrapping <code>.navbar</code> with a responsive collapse plugin for mobile views.
                </p>
                <CodeBlock language="html" code={`<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
      </ul>
    </div>
  </div>
</nav>`} />
            </section>

            {/* 2. RESPONSIVE BEHAVIOR */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Responsive Behavior</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Use <code>.navbar-expand-{'{breakpoint}'}</code> to determine when the navbar collapses.</li>
                    <li><strong>Desktop:</strong> Full horizontal navigation links.</li>
                    <li><strong>Tablet/Mobile:</strong> Hamburger menu toggles a vertical drawer.</li>
                    <li>Offcanvas support available for advanced drawer menus.</li>
                </ul>
            </section>

            {/* 3. DESIGN IDEAS */}
            <section className="mb-12 bg-slate-950 text-slate-300 p-8 rounded-2xl border border-slate-800">
                <h2 className="text-xl font-bold text-white mb-6">30 Navbar Design Concepts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-sm font-mono">
                    {[
                        "Docs Classic", "Minimal Text", "Logo Only", "Centered Brand", "Versioned Nav",
                        "Dashboard Nav", "Sidebar Linked", "Search Focused", "Icon Actions", "User Profile Nav",
                        "Mega Menu", "Multi-level", "Scroll Aware", "Transparent > Solid", "Sticky Reveal",
                        "Mobile Drawer", "Bottom Nav", "Tablet Adaptive", "Collapsible Search", "Icon First",
                        "Dark Mode Only", "Light Mode Only", "Gradient Nav", "Glassmorphism", "High Contrast",
                        "Docs + API", "Multi-language", "Auth Based", "Product Landing", "Framework Home"
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

export default NavbarDocs;
