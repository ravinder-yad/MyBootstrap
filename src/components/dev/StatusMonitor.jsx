import React, { useState, useEffect } from 'react';
import { ShieldCheck, Server, AlertTriangle, Zap, Activity, Clock } from 'lucide-react';
import StatusCard from '../dashboard/StatusCard';
import LogTerminal from '../dashboard/LogTerminal';

const StatusMonitor = () => {
    // ------------------------------------------------------------------------
    // MOCK STATE & SIMULATION LOGIC
    // ------------------------------------------------------------------------
    const [logs, setLogs] = useState([]);
    const [systemHealth, setSystemHealth] = useState('running'); // running, warning, error
    const [performance, setPerformance] = useState({ cpu: 12, memory: 340, buildTime: 450 });

    // Mock initial compilers status
    const compilers = [
        { name: 'HTML Engine', status: 'running', version: 'v1.4.2', lastRun: 'Just now' },
        { name: 'CSS Compiler', status: 'running', version: 'v3.0.1', lastRun: '2s ago' },
        { name: 'JS Bundler', status: 'warning', version: 'v2.1.0', lastRun: '15s ago' }, // Intentionally warning for realism
        { name: 'React Core', status: 'running', version: 'v18.3.0', lastRun: 'Running...' },
    ];

    // Simulate Live Logs
    useEffect(() => {
        const messages = [
            { msg: "Compiling Sidebar.jsx...", type: "info" },
            { msg: "Optimizing assets...", type: "info" },
            { msg: "Warning: Unused import in dashboard/StatusCard.jsx", type: "warning" },
            { msg: "Build successfully completed in 450ms", type: "success" },
            { msg: "Watching for file changes...", type: "info" },
            { msg: "HMR update: /src/App.jsx", type: "success" },
            { msg: "PostCSS processing started", type: "info" },
        ];

        const interval = setInterval(() => {
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            const newLog = {
                timestamp: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
                message: randomMsg.msg,
                type: randomMsg.type === 'warning' ? 'warning' : (randomMsg.msg.includes('success') ? 'success' : 'info')
            };

            setLogs(prev => [...prev.slice(-19), newLog]); // Keep last 20 logs

            // Randomly fluctuate performance metrics for "Live" feel
            setPerformance(prev => ({
                cpu: Math.max(5, Math.min(40, prev.cpu + (Math.random() - 0.5) * 5)).toFixed(1),
                memory: Math.floor(Math.max(200, Math.min(600, prev.memory + (Math.random() - 0.5) * 20))),
                buildTime: prev.buildTime
            }));

        }, 3000); // New event every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const clearLogs = () => setLogs([]);

    // ------------------------------------------------------------------------
    // UI RENDER
    // ------------------------------------------------------------------------
    return (
        <div className="space-y-6 animate-in fade-in duration-500">

            {/* 🟦 ZONE 1: OVERALL SYSTEM HEALTH */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatusCard
                    title="System Health"
                    status={systemHealth}
                    subtext="All systems operational. Listening on port 3000."
                    className="md:col-span-2 border-l-4 border-l-green-500"
                />
                <StatusCard
                    title="Active Sessions"
                    status="running"
                    metrics={[{ label: 'Connected Clients', value: 1 }, { label: 'Websockets', value: 'Active' }]}
                />
                <StatusCard
                    title="Uptime"
                    status="running"
                    metrics={[{ label: 'Session', value: '00:42:15' }, { label: 'Total', value: '3d 12h' }]}
                />
            </div>

            {/* 🟩 ZONE 2: COMPILER STATUS */}
            <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Server size={16} /> Compiler Engine Status
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {compilers.map((compiler, idx) => (
                        <StatusCard
                            key={idx}
                            title={compiler.name}
                            status={compiler.status}
                            subtext={`Version: ${compiler.version}`}
                            metrics={[{ label: 'Last Run', value: compiler.lastRun }]}
                        />
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* 🟨 ZONE 3: LIVE ACTIVITY LOGS */}
                <div className="lg:col-span-2 space-y-3">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                        <Activity size={16} /> Live Activity Feed
                    </h3>
                    <LogTerminal logs={logs} onClear={clearLogs} />
                </div>

                {/* 🟥 ZONE 4 & 5: ERRORS & PERFORMANCE */}
                <div className="space-y-6">

                    {/* Performance Panel */}
                    <div className="rounded-xl border border-border bg-panel p-4">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Zap size={16} /> Performance Metrics
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span>CPU Load</span>
                                    <span className="font-mono">{performance.cpu}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 transition-all duration-500 ease-out" style={{ width: `${performance.cpu}%` }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span>Memory Usage</span>
                                    <span className="font-mono">{performance.memory} MB</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-500 transition-all duration-500 ease-out" style={{ width: `${(performance.memory / 1000) * 100}%` }}></div>
                                </div>
                            </div>
                            <div className="pt-2 flex items-center justify-between border-t border-border/50">
                                <span className="text-xs text-muted-foreground">Last Build Time</span>
                                <span className="text-sm font-bold font-mono text-green-600">{performance.buildTime}ms</span>
                            </div>
                        </div>
                    </div>

                    {/* Error Summary Panel (Hidden if empty, shown for mock) */}
                    <div className="rounded-xl border border-border bg-panel p-4">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                            <AlertTriangle size={16} /> Active Alerts
                        </h3>
                        <div className="space-y-2">
                            <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 text-xs flex gap-2">
                                <AlertTriangle size={14} className="shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold">JS Bundler Warning</p>
                                    <p className="opacity-80">Large chunk size detected (2.4MB)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StatusMonitor;
