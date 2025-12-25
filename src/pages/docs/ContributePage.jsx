import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import { Heart, GitPullRequest, MessageSquare, BookOpen } from 'lucide-react';

const ContributePage = () => {
    return (
        <DocLayout
            title="Contribute"
            description="Help us make My Bootstrap better! Contributions are welcome and appreciated."
        >

            {/* 1. WELCOME */}
            <section className="mb-12 text-center py-8 bg-muted/30 rounded-xl border border-border">
                <Heart className="mx-auto text-red-500 mb-4" size={48} />
                <h2 className="text-2xl font-bold mb-2">We Love Contributors</h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    Whether you're fixing a typo, adding a new component, or suggesting a design improvement, your help matters.
                </p>
            </section>

            {/* 2. WAYS TO CONTRIBUTE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Ways to Contribute</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-xl border border-border bg-card hover:bg-muted/30 transition-colors">
                        <BookOpen size={24} className="text-primary mb-3" />
                        <h3 className="font-bold mb-2">Documentation</h3>
                        <p className="text-sm text-muted-foreground">Fix spelling, improve examples, or write new guides.</p>
                    </div>
                    <div className="p-6 rounded-xl border border-border bg-card hover:bg-muted/30 transition-colors">
                        <GitPullRequest size={24} className="text-primary mb-3" />
                        <h3 className="font-bold mb-2">Code & bugs</h3>
                        <p className="text-sm text-muted-foreground">Submit PRs for bug fixes or new feature implementations.</p>
                    </div>
                    <div className="p-6 rounded-xl border border-border bg-card hover:bg-muted/30 transition-colors">
                        <MessageSquare size={24} className="text-primary mb-3" />
                        <h3 className="font-bold mb-2">Discussions</h3>
                        <p className="text-sm text-muted-foreground">Join the conversation and help others in the community.</p>
                    </div>
                </div>
            </section>

            {/* 3. SUBMITTING PR */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Submitting a PR</h2>
                <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
                    <li><strong className="text-foreground">Fork</strong> the repository to your own GitHub account.</li>
                    <li><strong className="text-foreground">Clone</strong> the project to your local machine.</li>
                    <li>Create a new <strong className="text-foreground">Branch</strong> <code>git checkout -b fix/issue-name</code>.</li>
                    <li>Make your changes and ensure tests pass.</li>
                    <li><strong className="text-foreground">Push</strong> to your fork and submit a Pull Request.</li>
                </ol>
            </section>

            {/* 4. GUIDELINES */}
            <section className="mb-12 bg-muted p-6 rounded-xl border border-border">
                <h3 className="font-bold mb-4">Golden Rules</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Follow the existing code style and naming conventions.</li>
                    <li>• Keep changes small and focused on a single issue.</li>
                    <li>• Be respectful and kind in all communications.</li>
                </ul>
            </section>

        </DocLayout>
    );
};

export default ContributePage;
