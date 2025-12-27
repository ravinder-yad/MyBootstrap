import React, { useEffect } from 'react';
import { X, Book, Layout, Layers, FileText, Home } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar'; // Importing the flexible Sidebar

const MobileNav = ({ isOpen, onClose }) => {
    // Prevent body scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const navItems = [
        { label: 'Home', path: '/', icon: Home },
        { label: 'Docs', path: '/getting-started/introduction', icon: Book },
        { label: 'Examples', path: '/examples', icon: Layout },
        { label: 'Templates', path: '/templates', icon: Layers },
        { label: 'Blog', path: '/blog', icon: FileText },
    ];

    return (
        <div
            className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
        >
            {/* Backdrop / Overlay */}
            <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                onClick={onClose}
            />

            {/* Sidebar Drawer */}
            <div
                className={`absolute left-0 top-0 bottom-0 w-[85%] max-w-[320px] bg-background border-r border-border shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Drawer Header */}
                    <div className="h-[60px] flex items-center justify-between px-4 border-b border-border bg-card">
                        <span className="font-bold text-lg">Menu</span>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {/* 1. Global Navigation Links (Mobile Only) */}
                        <div className="p-3 border-b border-border space-y-1">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.label}
                                    to={item.path}
                                    onClick={onClose}
                                    className={({ isActive }) => `
                                        flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors
                                        ${isActive
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                        }
                                    `}
                                >
                                    <item.icon size={18} />
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>

                        {/* 2. Contextual Sidebar (Docs / Components tree) */}
                        <div className="pt-2">
                            <h3 className="px-6 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                {window.location.pathname.startsWith('/examples') ? 'Categories' : 'Explore'}
                            </h3>
                            <Sidebar
                                className="w-full bg-transparent border-none"
                                onLinkClick={onClose}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
