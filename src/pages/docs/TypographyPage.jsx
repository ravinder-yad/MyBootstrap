import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Type, Heading, List, Quote } from 'lucide-react';

const TypographyPage = () => {
    return (
        <DocLayout
            title="Typography"
            description="Documentation and examples for My Bootstrap typography, including global settings, headings, body text, lists, and more."
        >

            {/* 1. COMPONENT SHOWCASE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Heading size={24} /> Headings</h2>
                <p className="text-muted-foreground mb-6">
                    All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.
                </p>

                <div className="bg-card border border-border rounded-xl p-6 space-y-4 mb-4">
                    <h1 className="text-4xl font-light">h1. Bootstrap heading</h1>
                    <h2 className="text-3xl font-light">h2. Bootstrap heading</h2>
                    <h3 className="text-2xl font-light">h3. Bootstrap heading</h3>
                    <h4 className="text-xl font-light">h4. Bootstrap heading</h4>
                    <h5 className="text-lg font-light">h5. Bootstrap heading</h5>
                    <h6 className="text-base font-light">h6. Bootstrap heading</h6>
                </div>
            </section>

            {/* 2. BODY TEXT */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Type size={24} /> Lead & Paragraphs</h2>

                <div className="bg-card border border-border rounded-xl p-6 mb-4">
                    <p className="text-xl font-light text-muted-foreground mb-4">
                        This is a lead paragraph. It stands out from regular text.
                    </p>
                    <p className="text-base mb-4">
                        You can use the mark tag to <mark className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">highlight</mark> text.
                    </p>
                    <p className="text-base mb-4">
                        <del>This line of text is meant to be treated as deleted text.</del>
                    </p>
                    <p className="text-base mb-4">
                        <s>This line of text is meant to be treated as no longer accurate.</s>
                    </p>
                    <p className="text-base mb-4">
                        <ins>This line of text is meant to be treated as an addition to the document.</ins>
                    </p>
                    <p className="text-base mb-4">
                        <u>This line of text will render as underlined.</u>
                    </p>
                    <p className="text-base mb-0">
                        <small className="text-muted-foreground">This line of text is meant to be treated as fine print.</small>
                    </p>
                </div>
            </section>

            {/* 3. BLOCKQUOTES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Quote size={24} /> Blockquotes</h2>
                <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-r-xl">
                    <blockquote className="blockquote mb-4">
                        <p className="mb-4 text-lg italic">"A well-known quote, contained in a blockquote element."</p>
                        <footer className="blockquote-footer text-muted-foreground text-sm">
                            Someone famous in <cite title="Source Title" className="not-italic font-medium">Source Title</cite>
                        </footer>
                    </blockquote>
                </div>
            </section>

            {/* 4. LISTS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><List size={24} /> Lists</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <h4 className="font-bold mb-2">Unstyled</h4>
                        <ul className="list-none pl-0 space-y-1 text-sm text-muted-foreground">
                            <li>Not a list item</li>
                            <li>Just a standard item</li>
                            <li>Another item</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Inline</h4>
                        <ul className="list-none pl-0 flex gap-4 text-sm text-primary">
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Description</h4>
                        <dl className="text-sm">
                            <dt className="font-bold">Description lists</dt>
                            <dd className="pl-4 text-muted-foreground">A description list is perfect for defining terms.</dd>
                        </dl>
                    </div>
                </div>
            </section>

        </DocLayout>
    );
};

export default TypographyPage;
