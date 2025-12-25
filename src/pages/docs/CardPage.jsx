import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { CreditCard, Image } from 'lucide-react';

const CardPage = () => {
    return (
        <DocLayout
            title="Card"
            description="Bootstrap's cards provide a flexible and extensible content container with multiple variants and options."
        >

            {/* 1. EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><CreditCard size={24} /> Example</h2>
                <p className="text-muted-foreground mb-4">
                    Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="w-[18rem] bg-card border border-border rounded-lg shadow-sm">
                        <img src="https://via.placeholder.com/286x180" className="w-full rounded-t-lg" alt="..." />
                        <div className="p-4">
                            <h5 className="text-lg font-bold mb-2">Card title</h5>
                            <p className="text-sm text-muted-foreground mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors inline-block">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`} />
            </section>

            {/* 2. BODY CONTENT */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Body Content</h2>
                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="w-[18rem] bg-card border border-border rounded-lg shadow-sm p-4">
                        <div className="card-body">
                            This is some text within a card body.
                        </div>
                    </div>
                </div>
                <CodeBlock language="html" code={`<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>`} />
            </section>

            {/* 3. HEADER AND FOOTER */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Header and Footer</h2>
                <p className="text-muted-foreground mb-4">
                    Add an optional header and/or footer within a card.
                </p>
                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="w-[18rem] bg-card border border-border rounded-lg shadow-sm text-center">
                        <div className="bg-muted/50 p-3 border-b border-border text-sm font-medium rounded-t-lg">
                            Featured
                        </div>
                        <div className="p-4">
                            <h5 className="text-lg font-bold mb-2">Special title treatment</h5>
                            <p className="text-sm text-muted-foreground mb-4">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors inline-block">Go somewhere</a>
                        </div>
                        <div className="bg-muted/30 p-3 border-t border-border text-xs text-muted-foreground rounded-b-lg">
                            2 days ago
                        </div>
                    </div>
                </div>
            </section>

        </DocLayout>
    );
};

export default CardPage;
