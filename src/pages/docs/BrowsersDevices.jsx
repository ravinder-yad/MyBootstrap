import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import { Check, X, Smartphone, Monitor } from 'lucide-react';

const BrowsersDevices = () => {
    return (
        <DocLayout
            title="Browsers & Devices"
            description="My Bootstrap is built to work consistently across modern browsers and devices."
        >
            {/* 1. SUPPORTED BROWSERS TABLE */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Supported Browsers</h2>
                <div className="overflow-x-auto rounded-xl border border-border">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50 border-b border-border">
                            <tr>
                                <th className="px-6 py-4 font-semibold w-1/4">Browser</th>
                                <th className="px-6 py-4 font-semibold text-center w-1/4">Latest</th>
                                <th className="px-6 py-4 font-semibold text-center w-1/4">Previous</th>
                                <th className="px-6 py-4 font-semibold">Notes</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border bg-card">
                            {[
                                { name: "Chrome", latest: true, prev: true, note: "Full support" },
                                { name: "Firefox", latest: true, prev: true, note: "Full support" },
                                { name: "Safari", latest: true, prev: true, note: "macOS & iOS" },
                                { name: "Edge", latest: true, prev: true, note: "Chromium based" },
                                { name: "Opera", latest: true, prev: true, note: "Chromium based" },
                            ].map((row, idx) => (
                                <tr key={idx} className="hover:bg-muted/20 transition-colors">
                                    <td className="px-6 py-4 font-medium">{row.name}</td>
                                    <td className="px-6 py-4 text-center text-green-500"><Check className="mx-auto" size={18} /></td>
                                    <td className="px-6 py-4 text-center text-green-500"><Check className="mx-auto" size={18} /></td>
                                    <td className="px-6 py-4 text-muted-foreground">{row.note}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 2. MOBILE DEVICES */}
            <section className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <Smartphone className="text-primary" size={24} />
                    <h2 className="text-2xl font-bold m-0 border-none">Mobile Devices</h2>
                </div>
                <div className="bg-muted/30 p-6 rounded-xl border border-border">
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                            <Check size={18} className="text-green-500 mt-0.5 shrink-0" />
                            <span><strong>Android:</strong> Chrome, Firefox, and native WebView are fully supported.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check size={18} className="text-green-500 mt-0.5 shrink-0" />
                            <span><strong>iOS:</strong> Safari (WebKit) and Chrome for iOS are fully supported.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check size={18} className="text-green-500 mt-0.5 shrink-0" />
                            <span><strong>Responsive Layouts:</strong> All components are touch-friendly and fluid.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* 3. DESKTOP DEVICES */}
            <section className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <Monitor className="text-primary" size={24} />
                    <h2 className="text-2xl font-bold m-0 border-none">Desktop Devices</h2>
                </div>
                <div className="bg-muted/30 p-6 rounded-xl border border-border">
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                            <Check size={18} className="text-green-500 mt-0.5 shrink-0" />
                            <span><strong>Windows, macOS, Linux:</strong> Consistent rendering across all major OS platforms.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check size={18} className="text-green-500 mt-0.5 shrink-0" />
                            <span><strong>High-DPI Screens:</strong> Vector icons and scalable typography for 4K/Retina displays.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* 4. UNSUPPORTED / LIMITATIONS */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Limitations</h2>
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400">
                    <div className="font-bold flex items-center gap-2 mb-2">
                        <X size={20} /> Internet Explorer is NOT supported
                    </div>
                    <p className="text-sm">
                        My Bootstrap utilizes modern CSS features (Grid, Flexbox, Variables) that are not available in IE11 or older.
                        Please upgrade to a modern browser.
                    </p>
                </div>
            </section>

            {/* 5. ACCESSIBILITY DEVICES (NEW) */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Accessibility Devices</h2>
                <p className="text-muted-foreground mb-4">We support and test against the following screen readers and assistive technologies:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>NVDA</strong> on Windows (Clean install)</li>
                    <li><strong>VoiceOver</strong> on macOS and iOS</li>
                    <li><strong>TalkBack</strong> on Android</li>
                </ul>
            </section>

            {/* 6. TESTING PRECOMMENDATIONS (NEW) */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Testing Recommendations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-card border border-border">
                        <h4 className="font-bold mb-2">Real Devices First</h4>
                        <p className="text-sm text-muted-foreground">Always verify on actual hardware. Emulators cannot perfectly replicate touch events or performance issues.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-card border border-border">
                        <h4 className="font-bold mb-2">Responsive DevTools</h4>
                        <p className="text-sm text-muted-foreground">Use browser DevTools to test breakpoints, but don't rely on them for touch gestures.</p>
                    </div>
                </div>
            </section>

        </DocLayout>
    );
};

export default BrowsersDevices;
