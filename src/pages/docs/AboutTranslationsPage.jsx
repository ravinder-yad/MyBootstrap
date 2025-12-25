import React from 'react';
import { Globe, BookOpen, MessageCircle } from 'lucide-react';

const AboutTranslationsPage = () => {
    return (
        <div className="space-y-12">
            {/* Introduction */}
            <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Translations</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    My Bootstrap is used globally. We are working to make the documentation available in multiple languages to support our diverse community.
                </p>
            </section>

            {/* Available Languages */}
            <section className="space-y-8">
                <h3 className="text-2xl font-semibold text-foreground">Available Languages</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* English */}
                    <div className="p-6 border border-border rounded-lg bg-card flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 text-xl font-bold">
                            En
                        </div>
                        <h4 className="text-lg font-bold mb-1">English</h4>
                        <p className="text-sm text-muted-foreground mb-4">Official Documentation</p>
                        <span className="px-3 py-1 bg-green-500/10 text-green-600 text-xs font-medium rounded-full">Complete</span>
                    </div>

                    {/* Hindi */}
                    <div className="p-6 border border-border rounded-lg bg-card flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4 text-xl font-bold">
                            Hi
                        </div>
                        <h4 className="text-lg font-bold mb-1">Hindi (हिंदी)</h4>
                        <p className="text-sm text-muted-foreground mb-4">Community Translation</p>
                        <span className="px-3 py-1 bg-yellow-500/10 text-yellow-600 text-xs font-medium rounded-full">In Progress</span>
                    </div>

                    {/* French (Placeholder) */}
                    <div className="p-6 border border-border border-dashed rounded-lg bg-muted/10 flex flex-col items-center text-center opacity-70">
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                            <Globe size={20} className="text-muted-foreground" />
                        </div>
                        <h4 className="text-lg font-bold mb-1">Your Language?</h4>
                        <p className="text-sm text-muted-foreground mb-4">Help us translate!</p>
                    </div>
                </div>
            </section>

            {/* How to Contribute */}
            <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">How to Contribute</h3>
                <p className="text-muted-foreground">
                    Translations are maintained by the community. If you are fluent in English and another language, we would love your help.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex gap-4 p-4 border border-border rounded-lg">
                        <BookOpen className="text-primary shrink-0 mt-1" />
                        <div>
                            <h4 className="font-medium text-foreground mb-1">1. Read the Guide</h4>
                            <p className="text-sm text-muted-foreground">Check our contribution guidelines for translators to understand the process and tone.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 border border-border rounded-lg">
                        <MessageCircle className="text-primary shrink-0 mt-1" />
                        <div>
                            <h4 className="font-medium text-foreground mb-1">2. Join Discussions</h4>
                            <p className="text-sm text-muted-foreground">Join the `i18n` channel on our community server to coordinate with other translators.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutTranslationsPage;
