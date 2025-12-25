import React from 'react';
import { AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';

const AboutMigrationPage = () => {
    return (
        <div className="space-y-12">
            {/* Introduction */}
            <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Migration</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Upgrading a framework can be daunting. We are committed to making migration as smooth as possible with detailed guides and codemods where applicable.
                </p>
            </section>

            {/* Why Migrate */}
            <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Why Migrate?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-5 border border-border rounded-lg">
                        <ShieldCheck className="w-8 h-8 text-green-500 mb-3" />
                        <h4 className="font-medium text-foreground mb-2">Security</h4>
                        <p className="text-sm text-muted-foreground">Newer versions include the latest security patches and dependency updates.</p>
                    </div>
                    <div className="p-5 border border-border rounded-lg">
                        <Activity className="w-8 h-8 text-blue-500 mb-3" /> {/* Reusing Activity icon idea or similar */}
                        <h4 className="font-medium text-foreground mb-2">Performance</h4>
                        <p className="text-sm text-muted-foreground">We are constantly optimizing the CSS payload to be smaller and faster.</p>
                    </div>
                    <div className="p-5 border border-border rounded-lg">
                        <ArrowRight className="w-8 h-8 text-purple-500 mb-3" />
                        <h4 className="font-medium text-foreground mb-2">New Features</h4>
                        <p className="text-sm text-muted-foreground">Access the latest components, utilities, and helper classes.</p>
                    </div>
                </div>
            </section>

            {/* Version Compatibility */}
            <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Version Compatibility</h3>
                <div className="overflow-hidden border border-border rounded-lg">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-muted/50 border-b border-border">
                            <tr>
                                <th className="p-4 font-semibold text-foreground">Version</th>
                                <th className="p-4 font-semibold text-foreground">Status</th>
                                <th className="p-4 font-semibold text-foreground">Release Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            <tr className="bg-primary/5">
                                <td className="p-4 font-medium text-foreground">v1.0.0 (Current)</td>
                                <td className="p-4"><span className="text-green-600 font-medium">Stable</span></td>
                                <td className="p-4 text-muted-foreground">Dec 2025</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium text-muted-foreground">v0.x</td>
                                <td className="p-4"><span className="text-orange-600 font-medium">Deprecated</span></td>
                                <td className="p-4 text-muted-foreground">Jan 2025</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Breaking Changes */}
            <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Breaking Changes (v1.0)</h3>
                <div className="p-4 border-l-4 border-orange-500 bg-orange-500/10 rounded-r-lg">
                    <h4 className="font-bold text-orange-700 dark:text-orange-400 flex items-center gap-2 mb-2">
                        <AlertTriangle size={18} />
                        Important Note
                    </h4>
                    <p className="text-sm text-muted-foreground">
                        Since v1.0.0 is the first stable release, there are no breaking changes from a previous stable version. However, if you were using the beta, please check the changelog for renamed utilities.
                    </p>
                </div>
            </section>

        </div>
    );
};
import { Activity } from 'lucide-react'; // Added missing import for icon used

export default AboutMigrationPage;
