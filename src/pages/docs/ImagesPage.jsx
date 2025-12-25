import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Image, Maximize, Circle } from 'lucide-react';

const ImagesPage = () => {
    return (
        <DocLayout
            title="Images"
            description="Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes."
        >

            {/* 1. RESPONSIVE IMAGES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Maximize size={24} /> Fluid Images</h2>
                <p className="text-muted-foreground mb-4">
                    Images in Bootstrap are made responsive with <code>.img-fluid</code>. This applies <code>max-width: 100%;</code> and <code>height: auto;</code> to the image so that it scales with the parent width.
                </p>

                <div className="bg-muted p-4 rounded-xl border border-border mb-4">
                    <img src="https://via.placeholder.com/800x400" className="w-full h-auto rounded-lg shadow-sm" alt="Responsive" />
                    <p className="text-center text-xs text-muted-foreground mt-2">Example Fluid Image</p>
                </div>

                <CodeBlock language="html" code={`<img src="..." class="img-fluid" alt="...">`} />
            </section>

            {/* 2. IMAGE THUMBNAILS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Image size={24} /> Image Thumbnails</h2>
                <p className="text-muted-foreground mb-4">
                    In addition to our border-radius utilities, you can use <code>.img-thumbnail</code> to give an image a rounded 1px border appearance.
                </p>

                <div className="mb-4">
                    <img src="https://via.placeholder.com/200" className="p-1 bg-white border rounded shadow-sm" alt="Thumbnail" />
                </div>

                <CodeBlock language="html" code={`<img src="..." class="img-thumbnail" alt="...">`} />
            </section>

            {/* 3. ALIGNMENT */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Aligning Images</h2>
                <p className="text-muted-foreground mb-4">
                    Align images with the helper float classes or text alignment classes. <code>block</code>-level images can be centered using the <code>.mx-auto</code> margin utility class.
                </p>

                <div className="grid md:grid-cols-3 gap-4 bg-muted/20 p-4 rounded-xl border border-border">
                    <div className="text-left">
                        <img src="https://via.placeholder.com/100" className="rounded" alt="Left" />
                        <p className="text-xs mt-1">Float Start</p>
                    </div>
                    <div className="text-center">
                        <img src="https://via.placeholder.com/100" className="rounded mx-auto" alt="Center" />
                        <p className="text-xs mt-1">Mx Auto (Block)</p>
                    </div>
                    <div className="text-right">
                        <div className="flex justify-end">
                            <img src="https://via.placeholder.com/100" className="rounded" alt="Right" />
                        </div>
                        <p className="text-xs mt-1">Float End</p>
                    </div>
                </div>
            </section>

        </DocLayout>
    );
};

export default ImagesPage;
