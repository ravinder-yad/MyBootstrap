import React, { useEffect } from 'react';
import { X } from 'lucide-react';
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

                    {/* Reuse Sidebar Component with Mobile Styles */}
                    <Sidebar
                        className="w-full flex-1 overflow-hidden bg-background" // Override desktop styles
                        onLinkClick={onClose} // Close drawer on link click
                    />
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
