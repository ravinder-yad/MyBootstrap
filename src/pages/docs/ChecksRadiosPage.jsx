import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { CheckSquare, Circle, ToggleLeft } from 'lucide-react';

const ChecksRadiosPage = () => {
    return (
        <DocLayout
            title="Checks & Radios"
            description="Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component."
        >

            {/* 1. CHECKBOX */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><CheckSquare size={24} /> Checks</h2>

                <div className="bg-card border border-border p-6 rounded-xl space-y-2 mb-4">
                    <div className="form-check flex items-center gap-2">
                        <input className="form-check-input w-4 h-4 text-primary bg-background border border-border rounded focus:ring-2 focus:ring-primary/20" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label text-sm" htmlFor="flexCheckDefault">
                            Default checkbox
                        </label>
                    </div>
                    <div className="form-check flex items-center gap-2">
                        <input className="form-check-input w-4 h-4 text-primary bg-primary border border-primary rounded focus:ring-2 focus:ring-primary/20" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
                        <label className="form-check-label text-sm" htmlFor="flexCheckChecked">
                            Checked checkbox
                        </label>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>`} />
            </section>

            {/* 2. RADIOS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Circle size={24} /> Radios</h2>

                <div className="bg-card border border-border p-6 rounded-xl space-y-2 mb-4">
                    <div className="form-check flex items-center gap-2">
                        <input className="form-check-input w-4 h-4 text-primary bg-background border border-border rounded-full focus:ring-2 focus:ring-primary/20" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label text-sm" htmlFor="flexRadioDefault1">
                            Default radio
                        </label>
                    </div>
                    <div className="form-check flex items-center gap-2">
                        <input className="form-check-input w-4 h-4 text-primary bg-primary border-4 border-background ring-1 ring-primary rounded-full focus:ring-2 focus:ring-primary/20" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                        <label className="form-check-label text-sm" htmlFor="flexRadioDefault2">
                            Default checked radio
                        </label>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>`} />
            </section>

            {/* 3. SWITCHES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><ToggleLeft size={24} /> Switches</h2>
                <p className="text-muted-foreground mb-4">
                    A switch has the markup of a custom checkbox but uses the <code>.form-switch</code> class to render a toggle switch.
                </p>

                <div className="bg-card border border-border p-6 rounded-xl mb-4">
                    <div className="form-check form-switch flex items-center gap-2">
                        <input className="form-check-input w-9 h-5 bg-background border border-border rounded-full appearance-none cursor-pointer focus:ring-2 focus:ring-primary/20 checked:bg-primary checked:border-primary relative after:absolute after:top-[2px] after:left-[2px] after:bg-muted-foreground/30 after:w-4 after:h-4 after:rounded-full after:transition-all checked:after:translate-x-full checked:after:bg-white checked:after:border-white" type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label text-sm" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                    </div>
                </div>

                <CodeBlock language="html" code={`<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>`} />
            </section>

        </DocLayout>
    );
};

export default ChecksRadiosPage;
