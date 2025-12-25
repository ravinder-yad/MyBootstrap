import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { ScrollText } from 'lucide-react';

const ScrollspyPage = () => {
    return (
        <DocLayout
            title="Scrollspy"
            description="Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><ScrollText size={24} /> Example in Navbar</h2>
                <p className="text-muted-foreground mb-4">
                    Scroll the area below the navbar and watch the active class change. The dropdown items will be highlighted as well.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="relative border border-border rounded-lg overflow-hidden h-[300px]">
                        <nav id="navbar-example2" className="navbar bg-muted px-3 mb-3 sticky top-0 z-10 border-b border-border">
                            <a className="navbar-brand font-medium" href="#">Navbar</a>
                            <ul className="nav nav-pills flex gap-2">
                                <li className="nav-item">
                                    <a className="nav-link text-primary" href="#scrollspyHeading1">First</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-muted-foreground" href="#scrollspyHeading2">Second</a>
                                </li>
                            </ul>
                        </nav>
                        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example p-4 overflow-y-auto h-full" tabIndex="0">
                            <h4 id="scrollspyHeading1" className="text-lg font-bold mb-2">First heading</h4>
                            <p className="mb-4 text-muted-foreground">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                            <h4 id="scrollspyHeading2" className="text-lg font-bold mb-2">Second heading</h4>
                            <p className="mb-4 text-muted-foreground">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                            <p className="mb-4 text-muted-foreground">More content to ensure scrolling works effectively. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className="mb-4 text-muted-foreground">Even more content... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>

                <CodeBlock language="html" code={`<nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading1">First</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading2">Second</a>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
  <h4 id="scrollspyHeading1">First heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>...</p>
</div>`} />
            </section>

            {/* 2. HOW IT WORKS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">How It Works</h2>
                <p className="text-muted-foreground mb-4">
                    Scrollspy requires a few requirements to function properly:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>It must be used on a Bootstrap <code>nav</code> component or list group.</li>
                    <li>Scrollspy requires <code>position: relative;</code> on the element you're spying on, usually the <code>&lt;body&gt;</code>.</li>
                    <li>Anchors (<code>&lt;a&gt;</code>) are required and must point to an element with that <code>id</code>.</li>
                </ul>
            </section>

        </DocLayout>
    );
};

export default ScrollspyPage;
