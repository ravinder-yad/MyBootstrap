import React, { useState, useMemo } from 'react';
import { Search, Filter, Trash2, PauseCircle, PlayCircle, Download, X } from "lucide-react";
import LogStream from "../../components/logs/LogStream";

const LOG_LEVELS = ['All', 'Info', 'Success', 'Warning', 'Error', 'Debug'];

// ----------------------------------------------------------------------
// MOCK DATA GENERATOR
// ----------------------------------------------------------------------
const generateMockLogs = (count = 50) => {
    const sources = ['HTML Compiler', 'CSS Compiler', 'JS Bundler', 'React Core', 'Webpack', 'PostCSS'];
    const levels = ['info', 'info', 'info', 'success', 'warning', 'error', 'debug'];
    const messages = {
        info: ['Compiling module...', ' analyzing dependencies', 'Optimization started', 'Hot module replacement enabled', 'Watching for file changes'],
        success: ['Build completed successfully', 'Assets emitted', 'Minification finished', 'Server ready on port 3000'],
        warning: ['Large bundle size detected', 'Unused variable "foo"', 'Missing source map for dependency', 'Deprecation warning: v2 API'],
        error: ['SyntaxError: Unexpected token', 'Module not found: Can\'t resolve "./utils"', 'Build failed with 2 errors', 'Connection refused: localhost:8080'],
        debug: ['[HMR] Updated modules: ["App.jsx"]', 'Memory usage: 145MB', 'Tokenizing input stream...', 'AST traversal complete']
    };

    return Array.from({ length: count }).map((_, i) => {
        const level = levels[Math.floor(Math.random() * levels.length)];
        const source = sources[Math.floor(Math.random() * sources.length)];
        const msgList = messages[level];
        const message = msgList[Math.floor(Math.random() * msgList.length)] + ` #${Math.floor(Math.random() * 1000)}`;

        return {
            id: `log-${i}`,
            timestamp: new Date(Date.now() - i * 1000 * Math.random() * 60).toLocaleTimeString([], { hour12: false }),
            level,
            source,
            message,
            count: Math.random() > 0.9 ? Math.floor(Math.random() * 5) + 1 : 1, // Simulate grouped logs
            details: level === 'error' ? 'Error occurred at line 42:15 in src/components/Navbar.jsx. \nStack trace:\n at parse (parser.js:150)\n at compile (compiler.js:22)' : 'Process executed successfully in 12ms.'
        };
    }).sort((a, b) => b.timestamp.localeCompare(a.timestamp)); // Newest first
};

const CompilerLogs = () => {
    // STATE
    const [logs, setLogs] = useState(() => generateMockLogs(35));
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isPaused, setIsPaused] = useState(false);
    const [selectedLog, setSelectedLog] = useState(null);

    // FILTERING LOGIC
    const filteredLogs = useMemo(() => {
        return logs.filter(log => {
            const matchesLevel = selectedLevel === 'All' || log.level.toLowerCase() === selectedLevel.toLowerCase();
            const matchesSearch = log.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
                log.source.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesLevel && matchesSearch;
        });
    }, [logs, selectedLevel, searchQuery]);

    // HANDLERS
    const handleClear = () => setLogs([]);
    const handleRefresh = () => setLogs(generateMockLogs(Math.floor(Math.random() * 20) + 10));

    // RENDER
    return (
        <div className="flex h-full gap-6">

            {/* LEFT: MAIN LOG STREAM */}
            <div className="flex-1 flex flex-col min-w-0 bg-panel border border-border rounded-xl shadow-sm overflow-hidden h-[calc(100vh-180px)]">

                {/* TOOLBAR */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b border-border bg-muted/20 gap-4">

                    {/* Filter Tabs */}
                    <div className="flex items-center gap-1 bg-background p-1 rounded-lg border border-border/50 overflow-x-auto max-w-full">
                        {LOG_LEVELS.map(level => (
                            <button
                                key={level}
                                onClick={() => setSelectedLevel(level)}
                                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap
                                    ${selectedLevel === level
                                        ? 'bg-primary text-primary-foreground shadow-sm'
                                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                    }`}
                            >
                                {level}
                            </button>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-64">
                            <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search logs..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-9 pr-3 py-1.5 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary/50"
                            />
                        </div>
                        <div className="h-4 w-px bg-border mx-1 hidden sm:block"></div>
                        <button
                            onClick={() => setIsPaused(!isPaused)}
                            className={`p-2 rounded-md border transition-colors ${isPaused ? 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20' : 'bg-background hover:bg-muted text-muted-foreground border-border'}`}
                            title={isPaused ? "Resume Stream" : "Pause Stream"}
                        >
                            {isPaused ? <PlayCircle size={16} /> : <PauseCircle size={16} />}
                        </button>
                        <button
                            onClick={handleClear}
                            className="p-2 rounded-md bg-background hover:bg-red-500/10 hover:text-red-500 border border-border hover:border-red-500/20 text-muted-foreground transition-colors"
                            title="Clear Logs"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                </div>

                {/* STREAM AREA */}
                <div className="flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-border/50 bg-background/50">
                    <LogStream
                        logs={filteredLogs}
                        selectedLogId={selectedLog?.id}
                        onLogClick={setSelectedLog}
                    />
                </div>

                {/* FOOTER STATUS */}
                <div className="px-4 py-2 bg-muted/20 border-t border-border flex justify-between items-center text-[10px] text-muted-foreground font-mono">
                    <span>Showing {filteredLogs.length} events</span>
                    <span>Status: {isPaused ? 'PAUSED' : 'LISTENING'}</span>
                </div>
            </div>

            {/* RIGHT: DETAIL PANEL (CONDITIONAL) */}
            {selectedLog && (
                <div className="w-[350px] shrink-0 bg-panel border border-border rounded-xl shadow-lg flex flex-col overflow-hidden animate-in slide-in-from-right-10 duration-200">
                    <div className="p-4 border-b border-border flex items-start justify-between bg-muted/30">
                        <div>
                            <h3 className="font-semibold text-foreground">Log Details</h3>
                            <p className="text-xs text-muted-foreground font-mono mt-1">{selectedLog.id}</p>
                        </div>
                        <button onClick={() => setSelectedLog(null)} className="text-muted-foreground hover:text-foreground">
                            <X size={18} />
                        </button>
                    </div>

                    <div className="p-4 space-y-6 flex-1 overflow-y-auto">

                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message</label>
                            <p className="text-sm font-medium text-foreground">{selectedLog.message}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Source</label>
                                <div className="text-sm border border-border px-2 py-1 rounded bg-background inline-block">
                                    {selectedLog.source}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Time</label>
                                <p className="text-sm font-mono text-muted-foreground">{selectedLog.timestamp}</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Full Output</label>
                            <div className="bg-muted/50 p-3 rounded-md border border-border/50 text-xs font-mono text-muted-foreground break-words whitespace-pre-wrap">
                                {selectedLog.details}
                            </div>
                        </div>

                        {selectedLog.level === 'error' && (
                            <div className="p-3 bg-red-500/5 border border-red-500/20 rounded-lg">
                                <h4 className="text-xs font-bold text-red-500 mb-1 flex items-center gap-2">
                                    <Trash2 size={12} /> Suggested Fix
                                </h4>
                                <p className="text-xs text-red-600/80">
                                    Check the syntax in the specified file. Ensure all imports are correctly resolved relative to the file path.
                                </p>
                            </div>
                        )}

                    </div>

                    <div className="p-4 border-t border-border bg-muted/10">
                        <button className="w-full py-2 flex items-center justify-center gap-2 bg-background border border-border hover:bg-muted text-sm font-medium rounded-md transition-colors">
                            <Download size={14} /> Download Log JSON
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default CompilerLogs;
