import React, { useState } from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Layout } from 'lucide-react';

const NavsTabsPage = () => {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <DocLayout
            title="Navs & Tabs"
            description="Documentation and examples for how to use Bootstrap's included navigation components."
        >

            {/* 1. BASE NAV */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Layout size={24} /> Base Nav</h2>
                <p className="text-muted-foreground mb-4">
                    Navigation available in Bootstrap share general markup and styles, from the base <code>.nav</code> class to the active and disabled states.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <ul className="nav flex gap-4 text-sm font-medium">
                        <li className="nav-item">
                            <a className="nav-link text-primary active border-b-2 border-primary pb-1" aria-current="page" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted-foreground hover:text-foreground transition-colors" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted-foreground hover:text-foreground transition-colors" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled text-muted-foreground/50 cursor-not-allowed" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>

                <CodeBlock language="html" code={`<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>`} />
            </section>

            {/* 2. TABS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Tabs</h2>
                <p className="text-muted-foreground mb-4">
                    Takes the basic nav from above and adds the <code>.nav-tabs</code> class to generate a tabbed interface.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <ul className="nav nav-tabs flex border-b border-border text-sm font-medium mb-4">
                        <li className="nav-item">
                            <button
                                className={`nav-link px-4 py-2 border-t border-l border-r border-transparent rounded-t-md hover:border-border hover:bg-muted/10 transition-colors ${activeTab === 'home' ? 'active bg-background border-border border-b-transparent text-primary' : 'text-muted-foreground'}`}
                                onClick={() => setActiveTab('home')}
                            >
                                Home
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link px-4 py-2 border-t border-l border-r border-transparent rounded-t-md hover:border-border hover:bg-muted/10 transition-colors ${activeTab === 'profile' ? 'active bg-background border-border border-b-transparent text-primary' : 'text-muted-foreground'}`}
                                onClick={() => setActiveTab('profile')}
                            >
                                Profile
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link px-4 py-2 border-t border-l border-r border-transparent rounded-t-md hover:border-border hover:bg-muted/10 transition-colors ${activeTab === 'contact' ? 'active bg-background border-border border-b-transparent text-primary' : 'text-muted-foreground'}`}
                                onClick={() => setActiveTab('contact')}
                            >
                                Contact
                            </button>
                        </li>
                    </ul>

                    <div className="tab-content text-muted-foreground">
                        {activeTab === 'home' && <div className="tab-pane fade show active">Home content...</div>}
                        {activeTab === 'profile' && <div className="tab-pane fade show active">Profile content...</div>}
                        {activeTab === 'contact' && <div className="tab-pane fade show active">Contact content...</div>}
                    </div>
                </div>
                <CodeBlock language="html" code={`<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>`} />
            </section>

        </DocLayout>
    );
};

export default NavsTabsPage;
