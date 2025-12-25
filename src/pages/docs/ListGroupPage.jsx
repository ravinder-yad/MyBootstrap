import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { List } from 'lucide-react';

const ListGroupPage = () => {
    return (
        <DocLayout
            title="List Group"
            description="List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within."
        >

            {/* 1. BASIC EXAMPLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><List size={24} /> Basic Example</h2>
                <p className="text-muted-foreground mb-4">
                    The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <ul className="list-group w-[18rem] border border-border rounded-lg overflow-hidden">
                        <li className="list-group-item px-4 py-3 border-b border-border last:border-0 hover:bg-muted/30 transition-colors">An item</li>
                        <li className="list-group-item px-4 py-3 border-b border-border last:border-0 hover:bg-muted/30 transition-colors">A second item</li>
                        <li className="list-group-item px-4 py-3 border-b border-border last:border-0 hover:bg-muted/30 transition-colors">A third item</li>
                        <li className="list-group-item px-4 py-3 border-b border-border last:border-0 hover:bg-muted/30 transition-colors">A fourth item</li>
                        <li className="list-group-item px-4 py-3 border-b border-border last:border-0 hover:bg-muted/30 transition-colors">And a fifth one</li>
                    </ul>
                </div>

                <CodeBlock language="html" code={`<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>`} />
            </section>

            {/* 2. FLUSH */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Flush</h2>
                <p className="text-muted-foreground mb-4">
                    Add <code>.list-group-flush</code> to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <ul className="list-group list-group-flush w-[18rem] border-0">
                        <li className="list-group-item px-4 py-3 border-b border-border last:border-0 hover:bg-muted/30 transition-colors">An item</li>
                        <li className="list-group-item px-4 py-3 border-b border-border last:border-0 hover:bg-muted/30 transition-colors">A second item</li>
                        <li className="list-group-item px-4 py-3 border-b border-border last:border-0 hover:bg-muted/30 transition-colors">A third item</li>
                    </ul>
                </div>
                <CodeBlock language="html" code={`<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>`} />
            </section>

        </DocLayout>
    );
};

export default ListGroupPage;
