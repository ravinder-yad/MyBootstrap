import React, { useEffect, useRef } from 'react';
import { Terminal, AlignLeft, XCircle, Trash2 } from 'lucide-react';

const LogTerminal = ({ logs, onClear }) => {
    const bottomRef = useRef(null);

    // Auto-scroll to bottom directly on render update
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    return (
        <div className="flex flex-col h-[300px] rounded-xl border border-border bg-[#0d1117] overflow-hidden shadow-inner">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <Terminal size={14} />
                    <span>LIVE_ACTIVITY_LOG</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <button
                        onClick={onClear}
                        className="text-xs text-muted-foreground hover:text-red-400 transition-colors flex items-center gap-1"
                        title="Clear Logs"
                    >
                        <Trash2 size={12} />
                        <span>Clear</span>
                    </button>
                </div>
            </div>

            {/* Logs Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1.5 font-mono text-xs scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {logs.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-muted-foreground/30 italic">
                        <AlignLeft size={32} className="mb-2 opacity-20" />
                        <span>Waiting for system events...</span>
                    </div>
                ) : (
                    logs.map((log, index) => (
                        <div key={index} className={`flex items-start gap-3 transition-opacity duration-300 ${index === logs.length - 1 ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}>
                            <span className="text-muted-foreground/50 shrink-0 select-none w-[60px] text-right">
                                {log.timestamp}
                            </span>
                            <span className={`shrink-0 select-none ${log.type === 'error' ? 'text-red-500' : log.type === 'success' ? 'text-green-500' : 'text-blue-500'}`}>
                                {log.type === 'error' ? '✖' : '➜'}
                            </span>
                            <span className={`break-all ${log.type === 'error' ? 'text-red-400' : log.type === 'success' ? 'text-green-400' : 'text-gray-300'}`}>
                                {log.message}
                            </span>
                        </div>
                    ))
                )}
                <div ref={bottomRef} />
            </div>
        </div>
    );
};

export default LogTerminal;
