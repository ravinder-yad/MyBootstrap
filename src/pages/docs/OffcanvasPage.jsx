import React, { useState } from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { PanelLeft, X } from 'lucide-react';

const OffcanvasPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DocLayout
            title="Offcanvas"
            description="Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin."
        >

            {/* 1. LIVE DEMO */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><PanelLeft size={24} /> Live Demo</h2>
                <p className="text-muted-foreground mb-4">
                    Use the buttons below to show and hide an offcanvas element via JavaScript.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <button
                        className="btn btn-primary px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                        type="button"
                        onClick={() => setIsOpen(true)}
                    >
                        Button with data-bs-target
                    </button>

                    {/* Offcanvas Overlay and Panel */}
                    <div
                        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                        onClick={() => setIsOpen(false)}
                    ></div>

                    <div className={`fixed top-0 left-0 bottom-0 z-50 w-80 bg-card border-r border-border shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="offcanvas-header flex items-center justify-between p-4 border-b border-border">
                            <h5 className="offcanvas-title font-medium text-lg">Offcanvas</h5>
                            <button type="button" className="btn-close text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)} aria-label="Close">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="offcanvas-body p-4 text-muted-foreground">
                            <div>
                                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                            </div>
                            <div className="dropdown mt-3">
                                <button className="btn btn-secondary bg-muted text-foreground px-4 py-2 rounded-md w-full text-left flex items-center justify-between" type="button">
                                    Dropdown button
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <CodeBlock language="html" code={`<a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Link with href
</a>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>`} />
            </section>

            {/* 2. PLACEMENT */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Placement</h2>
                <p className="text-muted-foreground mb-4">
                    There's no default placement for offcanvas components, so you must add one of the modifier classes like <code>.offcanvas-start</code>, <code>.offcanvas-end</code>, <code>.offcanvas-top</code>, or <code>.offcanvas-bottom</code>.
                </p>
            </section>

        </DocLayout>
    );
};

export default OffcanvasPage;
