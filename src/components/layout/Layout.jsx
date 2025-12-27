import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from '../sidebar/Sidebar';
import MobileNav from './MobileNav';
import Footer from './Footer';

const Layout = ({ isDark, toggleTheme }) => {
    const location = useLocation();
    const navigate = useNavigate();

    // 1. Route Logic (Docs vs Full Width)
    // "Docs" routes act as the default unless we are on a specific "Special Page"
    const isSpecialPage =
        location.pathname === '/' ||
        location.pathname.startsWith('/examples') ||
        location.pathname.startsWith('/templates') ||
        location.pathname.startsWith('/blog') ||
        location.pathname.startsWith('/login') ||
        location.pathname.startsWith('/signup') ||
        location.pathname.startsWith('/profile');

    const isDocsRoute = !isSpecialPage;

    // 2. Mobile Nav State (Drawer)
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    // Auto-close mobile nav on route change
    useEffect(() => {
        setIsMobileNavOpen(false);
    }, [location.pathname]);

    // 3. Desktop Sidebar State
    // Default open on docs, closed otherwise. 
    // On Desktop, "Closed" means hidden/collapsed.
    // For now, we'll keep it simple: On Docs route -> It is distinct column.

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
            {/* Top Navbar */}
            <Navbar
                onHamburgerClick={() => setIsMobileNavOpen(true)}
                showHamburger={true} // Always show hamburger on mobile (controlled by CSS in Navbar)
                showSidebarTrigger={isDocsRoute} // Only relevant if we want a specific sidebar toggle
                isDark={isDark}
                toggleTheme={toggleTheme}
            />

            {/* Mobile Navigation Drawer (Overlay) */}
            <MobileNav
                isOpen={isMobileNavOpen}
                onClose={() => setIsMobileNavOpen(false)}
            />

            <div className="flex flex-1 relative">
                {/* Desktop Sidebar - ONLY on Docs Routes */}
                {isDocsRoute && (
                    <aside className="hidden lg:block w-[280px] border-r border-border h-[calc(100vh-60px)] sticky top-[60px] overflow-hidden bg-background/50 backdrop-blur-sm z-30">
                        <Sidebar
                            className="h-full w-full"
                        />
                    </aside>
                )}

                {/* Main Content Area */}
                <main className={`flex-1 min-w-0 flex flex-col ${isDocsRoute ? '' : 'w-full'}`}>
                    <div className={isDocsRoute ? "container mx-auto px-4 py-8 max-w-5xl animate-in fade-in slide-in-from-bottom-2 duration-500" : "flex-1 w-full animate-in fade-in duration-500"}>
                        <Outlet />
                    </div>

                    {/* Footer - Global but bottom of content */}
                    {!isDocsRoute && <Footer />}
                    {/* On Docs, maybe footer is inside the container? Or global? 
                        User spec says "FOOTER (global)". 
                        Let's keep it here for now.
                    */}
                    {isDocsRoute && (
                        <div className="mt-auto border-t border-border mt-12">
                            <Footer />
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Layout;
