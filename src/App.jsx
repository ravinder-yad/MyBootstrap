import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import MobileNav from './components/layout/MobileNav';
import Footer from './components/layout/Footer';
import StatusMonitor from './components/dev/StatusMonitor';
import CompilerLogsPage from './pages/docs/CompilerLogsPage';
import usePersistedState from './hooks/usePersistedState';
import routes from './routes';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Default open on desktop
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showStatusMonitor, setShowStatusMonitor] = useState(false);
    const [isDark, setIsDark] = usePersistedState("theme-dark", false);
    const location = useLocation();

    // Toggle Theme
    const toggleTheme = () => setIsDark(!isDark);

    // Apply Theme Class
    React.useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    // Close mobile menu on route change
    React.useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // Define patterns for pages that should NOT have a sidebar (Full Width)
    const isFullWidthPage =
        location.pathname === '/' ||
        location.pathname.startsWith('/examples') ||
        location.pathname.startsWith('/templates') ||
        location.pathname.startsWith('/blog');

    // Show sidebar only if NOT a full width page AND sidebar is toggled open
    const showSidebar = !isFullWidthPage && isSidebarOpen;

    return (
        <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden">
            {/* Top Navigation */}
            <Navbar
                onToggleSidebar={toggleSidebar}
                onToggleMobileMenu={toggleMobileMenu}
                showStatusMonitor={showStatusMonitor}
                setShowStatusMonitor={setShowStatusMonitor}
                isDark={isDark}
                toggleTheme={toggleTheme}
                showSidebarTrigger={!isFullWidthPage}
            />

            {/* Mobile Navigation Drawer */}
            {!isFullWidthPage && (
                <MobileNav
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Main Workspace Layout */}
            <div className="flex flex-1 overflow-hidden relative">

                {/* Sidebar (Desktop) */}
                {!isFullWidthPage && (
                    <aside
                        className={`hidden lg:block lg:relative z-20 h-full border-r border-border bg-card transition-all duration-300 ease-in-out ${showSidebar ? 'w-64 translate-x-0' : 'w-0 -translate-x-full lg:w-0 lg:translate-x-0 opacity-0 lg:opacity-100 overflow-hidden'
                            }`}
                    >
                        <div className="h-full custom-scrollbar overflow-y-auto">
                            <Sidebar
                                activePath={location.pathname}
                            />
                        </div>
                    </aside>
                )}

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto relative scroll-smooth w-full bg-background custom-scrollbar" id="main-content">
                    <div className={isFullWidthPage ? "w-full animate-in fade-in duration-300" : "container mx-auto px-4 py-8 md:px-8 max-w-7xl animate-in fade-in duration-300"}>
                        <Routes>
                            {/* Dynamic Routes from Configuration */}
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<route.component />}
                                />
                            ))}

                            {/* Dev Tools Routes */}
                            <Route path="/dev/logs" element={<CompilerLogsPage />} />

                            {/* Catch-all redirect to Introduction */}
                            <Route path="*" element={<Navigate to="/getting-started/introduction" replace />} />
                        </Routes>
                    </div>

                    {/* Global Footer */}
                    <Footer />

                    {/* Developer Status Monitor Overlay */}
                    {showStatusMonitor && (
                        <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-5">
                            <StatusMonitor onClose={() => setShowStatusMonitor(false)} />
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default App;
