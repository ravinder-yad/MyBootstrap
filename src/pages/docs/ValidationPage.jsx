import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { AlertCircle, CheckCircle, Smartphone } from 'lucide-react';

const ValidationPage = () => {
    return (
        <DocLayout
            title="Validation"
            description="Provide valuable, actionable feedback to your users with HTML5 form validation, via browser defaults or custom styles and JavaScript."
        >

            {/* 1. CUSTOM VALIDATION */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><CheckCircle size={24} /> Custom Styles</h2>
                <p className="text-muted-foreground mb-4">
                    For custom Bootstrap form validation messages, you’ll need to add the <code>novalidate</code> boolean attribute to your <code>&lt;form&gt;</code>.
                    This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl space-y-4 mb-4">
                    <div>
                        <label htmlFor="validationCustom01" className="block text-sm font-medium mb-1">First name</label>
                        <input type="text" className="form-control w-full p-2 border border-green-500 rounded-md ring-1 ring-green-500/20 bg-green-500/5" id="validationCustom01" defaultValue="Mark" required />
                        <div className="text-xs text-green-600 dark:text-green-400 mt-1">Looks good!</div>
                    </div>
                    <div>
                        <label htmlFor="validationCustom03" className="block text-sm font-medium mb-1">City</label>
                        <input type="text" className="form-control w-full p-2 border border-red-500 rounded-md ring-1 ring-red-500/20 bg-red-500/5" id="validationCustom03" required />
                        <div className="text-xs text-red-600 dark:text-red-400 mt-1">Please provide a valid city.</div>
                    </div>
                </div>

                <CodeBlock language="html" code={`<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control is-valid" id="validationCustom01" value="Mark" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control is-invalid" id="validationCustom03" required>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
</form>`} />
            </section>

            {/* 2. BROWSER DEFAULTS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Smartphone size={24} /> Browser Defaults</h2>
                <p className="text-muted-foreground mb-4">
                    Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <form className="flex gap-4 items-end">
                        <div className="flex-1">
                            <label htmlFor="validationDefault01" className="block text-sm font-medium mb-1">State</label>
                            <input type="text" className="form-control w-full p-2 border border-border rounded-md dark:bg-muted/10" id="validationDefault01" required />
                        </div>
                        <button className="btn bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-md transition-colors" type="submit">Submit form</button>
                    </form>
                </div>
            </section>

            {/* 3. SERVER SIDE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><AlertCircle size={24} /> Server Side</h2>
                <p className="text-muted-foreground mb-4">
                    We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with <code>.is-invalid</code> and <code>.is-valid</code> classes.
                </p>
            </section>

        </DocLayout>
    );
};

export default ValidationPage;
