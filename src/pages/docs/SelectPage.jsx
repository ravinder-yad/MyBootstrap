import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { ChevronDown, List } from 'lucide-react';

const SelectPage = () => {
    return (
        <DocLayout
            title="Form Select"
            description="Trigger option menus with custom Bootstrap styles across browsers and devices."
        >

            {/* 1. DEFAULT SELECT */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><ChevronDown size={24} /> Default Select</h2>
                <p className="text-muted-foreground mb-4">
                    Custom <code>&lt;select&gt;</code> menus need only a custom class, <code>.form-select</code> to trigger the custom styles.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <select className="form-select w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:bg-muted/10" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <CodeBlock language="html" code={`<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`} />
            </section>

            {/* 2. SIZING */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Sizing</h2>
                <div className="space-y-4 mb-4">
                    <select className="form-select w-full p-3 text-lg border border-border rounded-md dark:bg-muted/10">
                        <option selected>Large select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                    </select>
                    <select className="form-select w-full p-2 text-base border border-border rounded-md dark:bg-muted/10">
                        <option selected>Default select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                    </select>
                    <select className="form-select w-full p-1 text-sm border border-border rounded-md dark:bg-muted/10">
                        <option selected>Small select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                    </select>
                </div>
            </section>

            {/* 3. MULTIPLE ATTRIBUTE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><List size={24} /> Multiple Attribute</h2>
                <p className="text-muted-foreground mb-4">
                    The <code>multiple</code> attribute is also supported.
                </p>
                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <select className="form-select w-full p-2 border border-border rounded-md dark:bg-muted/10" multiple aria-label="multiple select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </section>

            {/* 4. DISABLED */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Disabled</h2>
                <select className="form-select w-full p-2 border border-border rounded-md bg-muted text-muted-foreground cursor-not-allowed" aria-label="Disabled select example" disabled>
                    <option selected>Disabled select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                </select>
            </section>

        </DocLayout>
    );
};

export default SelectPage;
