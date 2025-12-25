import React from 'react';
import { Info, AlertCircle, AlertTriangle, CheckCircle, Bug } from 'lucide-react';

const LogIcons = {
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    error: AlertCircle,
    debug: Bug
};

const LogColors = {
    info: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    success: 'text-green-500 bg-green-500/10 border-green-500/20',
    warning: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
    error: 'text-red-500 bg-red-500/10 border-red-500/20',
    debug: 'text-purple-500 bg-purple-500/10 border-purple-500/20'
};

const LogItem = ({ log, isSelected, onClick }) => {
    const Icon = LogIcons[log.level] || LogIcons.info;
    const colorClass = LogColors[log.level] || LogColors.info;

    return (
        <div
            onClick={() => onClick(log)}
            className={`
                group flex items-start gap-4 p-3 rounded-lg border cursor-pointer transition-all duration-200
                ${isSelected
                    ? 'bg-accent/50 border-primary ring-1 ring-primary/20 shadow-sm'
                    : 'bg-background border-border/40 hover:bg-muted/30 hover:border-border'
                }
            `}
        >
            {/* Timestamp */}
            <div className="shrink-0 pt-0.5 text-xs font-mono text-muted-foreground w-16 text-right">
                {log.timestamp}
            </div>

            {/* Icon Badge */}
            <div className={`shrink-0 p-1.5 rounded-md ${colorClass}`}>
                <Icon size={16} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wider opacity-80">
                        {log.source}
                    </span>
                    {log.count > 1 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
                            x{log.count}
                        </span>
                    )}
                </div>
                <p className={`text-sm font-medium truncate ${log.level === 'error' ? 'text-red-500' : 'text-foreground'}`}>
                    {log.message}
                </p>
                <div className="mt-1 text-xs text-muted-foreground truncate font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    {log.details || 'Click to view full details'}
                </div>
            </div>

            {/* Metadata (Optional) */}
            <div className="shrink-0 text-[10px] text-muted-foreground hidden sm:block">
                ID: {log.id}
            </div>
        </div>
    );
};

export default LogItem;
