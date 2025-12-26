import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'; // added useNavigate
import Navbar from './Navbar';
import Sidebar from '../sidebar/Sidebar';
import Footer from './Footer';

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate(); // added hook

    // 1. Determine if we are on a "Docs" route
    // The user specified /docs/* but existing routes seem to use /getting-started, /components etc.
    // Based on sidebar.config.js, docs routes are:
    // /getting-started/*, /customize/*, /layout/*, /content/*, /forms/*, /components/*, /helpers/*, /utilities/*, /extend/*, /about/*
    // AND /ui/* for UI library if we consider that "docs-like" sidebar behavior.
    // The user said: "When I click on Docs (/docs and all /docs/* routes)" -> BUT current routes are flattened.
    // I will assume ANY route that IS NOT Home, Examples, Templates, Blog is a "Docs" route.

    const isSpecialPage =
        location.pathname === '/' ||
        location.pathname.startsWith('/examples') ||
        location.pathname.startsWith('/templates') ||
        location.pathname.startsWith('/blog');

    const isDocsRoute = !isSpecialPage;

    // 2. Sidebar State
    // Default open if on docs, closed otherwise.
    const [sidebarOpen, setSidebarOpen] = useState(isDocsRoute);

    // Sync state with route changes
    useEffect(() => {
        setSidebarOpen(isDocsRoute);
    }, [isDocsRoute]);

    // 3. Mobile Hamburger Logic
    const toggleSidebar = () => {
        if (!isDocsRoute) return;
        setSidebarOpen(!sidebarOpen);
    };

    // Auto-close on mobile link click
    const handleLinkClick = () => {
        if (window.innerWidth < 1024 && isDocsRoute) { // using 1024px (lg) as breakpoint based on existing App.jsx
            setSidebarOpen(false);
        }
    };

    // 4. Layout Classes
    // If docs route AND sidebar is open -> push content? 
    // Existing Sidebar.jsx was fixed/sticky. 
    // Let's us the pattern from the plan: 
    // Sidebar rendered if isDocsRoute. 
    // Main content margin if sidebar open (desktop).

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Navbar
                onLogoClick={() => navigate("/")}
                onHamburgerClick={toggleSidebar}
                showHamburger={isDocsRoute}
            // Pass other props if Navbar needs them, e.g. theme toggle 
            // (assuming ThemeProvider or props drilling from App)
            />

            <div className="flex flex-1 relative overflow-hidden">
                {/* Sidebar - Only Rendered on Docs Routes */}
                {isDocsRoute && (
                    <Sidebar
                        open={sidebarOpen}
                        onLinkClick={handleLinkClick}
                        className={`
                            fixed inset-y-0 left-0 z-40
                            transform transition-transform duration-300 ease-in-out
                            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                            lg:transform-none
                            ${!sidebarOpen && 'lg:hidden'} 
                            w-64 border-r border-border bg-card/60 backdrop-blur-sm
                            h-[calc(100vh-60px)] top-[60px]
                        `}
                    // Note: Sidebar component needs to handle 'className' or we wrap it
                    />
                )}

                {/* Main Content */}
                <main className={`flex-1 overflow-y-auto w-full transition-all duration-300 ${isDocsRoute && sidebarOpen ? 'lg:ml-64' : ''}`}>
                    {/* 
                        If sidebar is 'relative' on desktop, flex-1 takes remaining space automatically.
                        If sidebar is 'fixed' (mobile), main takes full width.
                     */}
                    <div className={isDocsRoute ? "container mx-auto px-4 py-8 max-w-7xl animate-in fade-in active" : "w-full animate-in fade-in"}>
                        <Outlet />
                    </div>
                    {/* Footer is usually inside main or below? existing App had it inside main */}
                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default Layout;
