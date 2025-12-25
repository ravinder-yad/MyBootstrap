import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Image } from 'lucide-react';

const ObjectFitPage = () => {
    return (
        <DocLayout
            title="Object Fit"
            description="Use the object-fit utilities to modify how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container."
        >

            {/* 1. EXAMPLES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Image size={24} /> Examples</h2>
                <p className="text-muted-foreground mb-4">
                    Add the <code>object-fit</code> class variations to images to control their aspect ratio behavior.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                    <div>
                        <img src="https://via.placeholder.com/200" className="object-fit-contain border rounded w-full h-[100px] bg-muted" alt="..." />
                        <code className="text-xs block mt-2 text-center">.object-fit-contain</code>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/200" className="object-fit-cover border rounded w-full h-[100px] bg-muted" alt="..." />
                        <code className="text-xs block mt-2 text-center">.object-fit-cover</code>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/200" className="object-fit-fill border rounded w-full h-[100px] bg-muted" alt="..." />
                        <code className="text-xs block mt-2 text-center">.object-fit-fill</code>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/200" className="object-fit-scale border rounded w-full h-[100px] bg-muted" alt="..." />
                        <code className="text-xs block mt-2 text-center">.object-fit-scale</code>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/200" className="object-fit-none border rounded w-full h-[100px] bg-muted" alt="..." />
                        <code className="text-xs block mt-2 text-center">.object-fit-none</code>
                    </div>
                </div>

                <CodeBlock language="html" code={`<img src="..." class="object-fit-contain" alt="...">
<img src="..." class="object-fit-cover" alt="...">
<img src="..." class="object-fit-fill" alt="...">
<img src="..." class="object-fit-scale" alt="...">
<img src="..." class="object-fit-none" alt="...">`} />
            </section>

        </DocLayout>
    );
};

export default ObjectFitPage;
