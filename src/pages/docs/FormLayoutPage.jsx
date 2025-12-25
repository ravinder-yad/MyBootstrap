import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Layout, Columns, AlignJustify } from 'lucide-react';

const FormLayoutPage = () => {
    return (
        <DocLayout
            title="Form Layout"
            description="Give your forms some structure—from inline to horizontal to custom grid layouts—with our form layout classes."
        >

            {/* 1. GUTTERS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Layout size={24} /> Layout with Grid</h2>
                <p className="text-muted-foreground mb-4">
                    More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl space-y-4 mb-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <input type="text" className="form-control w-full p-2 border border-border rounded-md dark:bg-muted/10" placeholder="First name" aria-label="First name" />
                        </div>
                        <div>
                            <input type="text" className="form-control w-full p-2 border border-border rounded-md dark:bg-muted/10" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
  </div>
</div>`} />
            </section>

            {/* 2. HORIZONTAL FORM */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><AlignJustify size={24} /> Horizontal Form</h2>
                <p className="text-muted-foreground mb-4">
                    Create horizontal forms with the grid by padding the <code>.col-form-label</code> class so that labels center vertically with their associated form controls.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="flex flex-col md:flex-row items-center mb-3">
                        <label htmlFor="inputEmail3" className="md:w-1/6 text-sm font-medium">Email</label>
                        <div className="flex-1 w-full">
                            <input type="email" className="form-control w-full p-2 border border-border rounded-md dark:bg-muted/10" id="inputEmail3" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center mb-3">
                        <label htmlFor="inputPassword3" className="md:w-1/6 text-sm font-medium">Password</label>
                        <div className="flex-1 w-full">
                            <input type="password" className="form-control w-full p-2 border border-border rounded-md dark:bg-muted/10" id="inputPassword3" />
                        </div>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="row mb-3">
  <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-10">
    <input type="email" class="form-control" id="inputEmail3">
  </div>
</div>`} />
            </section>

            {/* 3. COLUMN SIZING */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Columns size={24} /> Column Sizing</h2>
                <div className="bg-card border border-border p-6 rounded-xl space-y-4 mb-4">
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-12 md:col-span-7">
                            <input type="text" className="form-control w-full p-2 border border-border rounded-md dark:bg-muted/10" placeholder="City" aria-label="City" />
                        </div>
                        <div className="col-span-12 md:col-span-3">
                            <input type="text" className="form-control w-full p-2 border border-border rounded-md dark:bg-muted/10" placeholder="State" aria-label="State" />
                        </div>
                        <div className="col-span-12 md:col-span-2">
                            <input type="text" className="form-control w-full p-2 border border-border rounded-md dark:bg-muted/10" placeholder="Zip" aria-label="Zip" />
                        </div>
                    </div>
                </div>
            </section>

        </DocLayout>
    );
};

export default FormLayoutPage;
