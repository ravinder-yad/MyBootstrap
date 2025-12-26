import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import StatusMonitor from './components/dev/StatusMonitor';
import CompilerLogsPage from './pages/docs/CompilerLogsPage';
import usePersistedState from './hooks/usePersistedState';
import routes from './routes';
import Layout from './components/layout/Layout';

function App() {
    const [showStatusMonitor, setShowStatusMonitor] = useState(false);
    const [isDark, setIsDark] = usePersistedState("theme-dark", false);

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

    return (
        <>
            {/* Theme & Layout Wrapper */}
            <Routes>
                <Route element={<Layout isDark={isDark} toggleTheme={toggleTheme} />}>
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
                </Route>
            </Routes>

            {/* Developer Status Monitor Overlay */}
            {showStatusMonitor && (
                <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-5">
                    <StatusMonitor onClose={() => setShowStatusMonitor(false)} />
                </div>
            )}
        </>
    );
}

export default App;
