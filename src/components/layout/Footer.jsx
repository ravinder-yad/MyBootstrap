import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Facebook, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted/30 border-t border-border mt-auto">
            <div className="container mx-auto px-4 py-12 md:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">

                    {/* 1. BRAND SECTION */}
                    <div className="col-span-2 md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                                B
                            </div>
                            <span className="font-bold text-xl">MyBootstrap</span>
                        </Link>
                        <p className="text-muted-foreground text-sm mb-6 max-w-sm">
                            A powerful, responsive, and modern UI kit built for developers.
                            Designed to be customized and extended with ease.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* 2. LINKS SECTION - DOCS */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Documentation</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/getting-started/introduction" className="text-muted-foreground hover:text-primary transition-colors">
                                    Introduction
                                </Link>
                            </li>
                            <li>
                                <Link to="/getting-started/download" className="text-muted-foreground hover:text-primary transition-colors">
                                    Download
                                </Link>
                            </li>
                            <li>
                                <Link to="/layout/breakpoints" className="text-muted-foreground hover:text-primary transition-colors">
                                    Layout
                                </Link>
                            </li>
                            <li>
                                <Link to="/components/overview" className="text-muted-foreground hover:text-primary transition-colors">
                                    Components
                                </Link>
                            </li>
                            <li>
                                <Link to="/utilities/overview" className="text-muted-foreground hover:text-primary transition-colors">
                                    Utilities
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 3. LINKS SECTION - COMMUNITY */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Community</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/about/team" className="text-muted-foreground hover:text-primary transition-colors">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link to="/about/brand" className="text-muted-foreground hover:text-primary transition-colors">
                                    Brand Assets
                                </Link>
                            </li>
                            <li>
                                <Link to="/getting-started/contribute" className="text-muted-foreground hover:text-primary transition-colors">
                                    Contribute
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    Discussions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 4. LINKS SECTION - LEGAL */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/about/license" className="text-muted-foreground hover:text-primary transition-colors">
                                    License
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    Terms of Use
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm text-center md:text-left">
                        © {currentYear} My Bootstrap. All rights reserved. Code licensed MIT.
                    </p>
                    <p className="text-muted-foreground text-sm flex items-center gap-1">
                        Made with <Heart size={14} className="text-red-500 fill-red-500" /> by the Core Team
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
