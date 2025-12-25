import React from 'react';
import { CheckCircle, XCircle, FileText } from 'lucide-react';

const AboutLicensePage = () => {
    return (
        <div className="space-y-12">
            {/* Introduction */}
            <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">License</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    My Bootstrap is completely free and open-source. We believe in software freedom.
                    The framework is released under the <strong className="text-foreground">MIT License</strong>.
                </p>
            </section>

            {/* The License */}
            <section className="space-y-6">
                <div className="p-6 bg-muted/30 border border-border rounded-lg font-mono text-sm leading-relaxed overflow-x-auto text-muted-foreground">
                    <p className="mb-4">MIT License</p>
                    <p className="mb-4">Copyright (c) 2025 My Bootstrap Author</p>
                    <p className="mb-4">
                        Permission is hereby granted, free of charge, to any person obtaining a copy
                        of this software and associated documentation files (the "Software"), to deal
                        in the Software without restriction, including without limitation the rights
                        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                        copies of the Software, and to permit persons to whom the Software is
                        furnished to do so, subject to the following conditions:
                    </p>
                    <p className="mb-4">
                        The above copyright notice and this permission notice shall be included in all
                        copies or substantial portions of the Software.
                    </p>
                    <p>
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                        SOFTWARE.
                    </p>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-primary hover:underline">
                    <FileText size={16} />
                    View license on GitHub
                </a>
            </section>

            {/* Permissions */}
            <section className="space-y-8">
                <h3 className="text-2xl font-semibold text-foreground">What You Can Do</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-medium text-foreground">Commercial Use</h4>
                                <p className="text-muted-foreground text-sm">You can use this framework for personal, client, or commercial projects without paying.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-medium text-foreground">Modification</h4>
                                <p className="text-muted-foreground text-sm">You can modify the source code to suit your needs.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-medium text-foreground">Distribution</h4>
                                <p className="text-muted-foreground text-sm">You can distribute copies of the software.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground mb-4 pl-1">Conditions & Limitations</h4>
                        <div className="flex items-start gap-3">
                            <XCircle className="w-6 h-6 text-red-500 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-medium text-foreground">Liability</h4>
                                <p className="text-muted-foreground text-sm">The software is provided "as is". We are not liable for damages.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <XCircle className="w-6 h-6 text-red-500 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-medium text-foreground">Attribution</h4>
                                <p className="text-muted-foreground text-sm">You must include the license notice in substantial portions of the software.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutLicensePage;
