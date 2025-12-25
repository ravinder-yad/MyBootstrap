import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Type, Mail, Lock, AlignLeft } from 'lucide-react';

const FormControlPage = () => {
    return (
        <DocLayout
            title="Form Control"
            description="Give textual form controls like <input>s and <textarea>s an upgrade with custom styles, sizing, focus states, and more."
        >

            {/* 1. KEY EXAMPLES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Type size={24} /> Example Inputs</h2>

                <div className="bg-card border border-border p-6 rounded-xl space-y-4 mb-4">
                    <div>
                        <label htmlFor="exampleInputEmail1" className="block text-sm font-medium mb-1">Email address</label>
                        <input type="email" className="form-control w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:bg-muted/10" id="exampleInputEmail1" placeholder="name@example.com" />
                        <p className="text-xs text-muted-foreground mt-1">We'll never share your email with anyone else.</p>
                    </div>
                    <div>
                        <label htmlFor="exampleInputPassword1" className="block text-sm font-medium mb-1">Password</label>
                        <input type="password" className="form-control w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:bg-muted/10" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Password</label>
  <input type="password" class="form-control" id="exampleInputPassword1">
</div>`} />
            </section>

            {/* 2. TEXTAREA */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><AlignLeft size={24} /> Textarea</h2>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <label htmlFor="exampleFormControlTextarea1" className="block text-sm font-medium mb-1">Example textarea</label>
                    <textarea className="form-control w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:bg-muted/10" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <CodeBlock language="html" code={`<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>`} />
            </section>

            {/* 3. SIZING */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Sizing</h2>
                <div className="space-y-4 mb-4">
                    <input className="form-control w-full p-3 text-lg border border-border rounded-md dark:bg-muted/10" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
                    <input className="form-control w-full p-2 text-base border border-border rounded-md dark:bg-muted/10" type="text" placeholder="Default input" aria-label="default input example" />
                    <input className="form-control w-full p-1 text-sm border border-border rounded-md dark:bg-muted/10" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example" />
                </div>
            </section>

            {/* 4. DISABLED & READONLY */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 items-center gap-2 flex"><Lock size={24} /> Disabled & Readonly</h2>
                <div className="space-y-4 mb-4">
                    <input className="form-control w-full p-2 border border-border rounded-md bg-muted text-muted-foreground cursor-not-allowed" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled />
                    <input className="form-control w-full p-2 border border-border rounded-md bg-muted/20" type="text" value="Readonly input here..." aria-label="readonly input example" readOnly />
                </div>
            </section>

        </DocLayout>
    );
};

export default FormControlPage;
