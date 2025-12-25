import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { ListOrdered } from 'lucide-react';

const PaginationPage = () => {
    return (
        <DocLayout
            title="Pagination"
            description="Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><ListOrdered size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination flex items-center gap-1">
                            <li className="page-item">
                                <a className="page-link px-3 py-2 border border-border rounded-md hover:bg-muted/50 hover:text-foreground text-primary transition-colors cursor-pointer" href="#">Previous</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link px-3 py-2 border border-border rounded-md hover:bg-muted/50 hover:text-foreground text-primary transition-colors cursor-pointer" href="#">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link px-3 py-2 border border-border rounded-md hover:bg-muted/50 hover:text-foreground text-primary transition-colors cursor-pointer" href="#">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link px-3 py-2 border border-border rounded-md hover:bg-muted/50 hover:text-foreground text-primary transition-colors cursor-pointer" href="#">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link px-3 py-2 border border-border rounded-md hover:bg-muted/50 hover:text-foreground text-primary transition-colors cursor-pointer" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <CodeBlock language="html" code={`<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>`} />
            </section>

            {/* 2. DISABLED AND ACTIVE STATES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Disabled and Active States</h2>
                <p className="text-muted-foreground mb-4">
                    Pagination links are customizable for different circumstances. Use <code>.disabled</code> for links that appear un-clickable and <code>.active</code> to indicate the current page.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <nav aria-label="...">
                        <ul className="pagination flex items-center gap-1">
                            <li className="page-item disabled">
                                <a className="page-link px-3 py-2 border border-border rounded-md bg-muted text-muted-foreground cursor-not-allowed" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link px-3 py-2 border border-border rounded-md hover:bg-muted/50 hover:text-foreground text-primary transition-colors cursor-pointer" href="#">1</a>
                            </li>
                            <li className="page-item active" aria-current="page">
                                <a className="page-link px-3 py-2 border border-primary bg-primary text-white rounded-md transition-colors cursor-default" href="#">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link px-3 py-2 border border-border rounded-md hover:bg-muted/50 hover:text-foreground text-primary transition-colors cursor-pointer" href="#">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link px-3 py-2 border border-border rounded-md hover:bg-muted/50 hover:text-foreground text-primary transition-colors cursor-pointer" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <CodeBlock language="html" code={`<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>`} />
            </section>

        </DocLayout>
    );
};

export default PaginationPage;
