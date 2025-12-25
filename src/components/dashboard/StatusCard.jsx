import React from 'react';
import { Activity, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const StatusIcons = {
    running: CheckCircle,
    warning: AlertCircle,
    error: XCircle,
    idle: Activity
};

const StatusColors = {
    running: 'text-green-500 bg-green-500/10 border-green-500/20',
    warning: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
    error: 'text-red-500 bg-red-500/10 border-red-500/20',
    idle: 'text-muted-foreground bg-muted border-border'
};

const StatusCard = ({ title, status = 'idle', subtext, metrics = [], className = '' }) => {
    const Icon = StatusIcons[status] || StatusIcons.idle;
    const colorClass = StatusColors[status] || StatusColors.idle;

    return (
        <div className={`p-4 rounded-xl border bg-panel shadow-sm transition-all duration-200 hover:shadow-md ${className} ${status === 'error' ? 'ring-1 ring-red-500/30' : ''}`}>
            <div className="flex items-start justify-between mb-3">
                <div>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span className={`w-2 h-2 rounded-full ${status === 'running' ? 'animate-pulse bg-green-500' : (status === 'error' ? 'bg-red-500' : 'bg-yellow-500')}`}></span>
                        <span className="text-lg font-bold text-foreground capitalize">{status}</span>
                    </div>
                </div>
                <div className={`p-2 rounded-lg ${colorClass}`}>
                    <Icon size={20} />
                </div>
            </div>

            {subtext && (
                <p className="text-xs text-muted-foreground mb-4 font-mono">{subtext}</p>
            )}

            {metrics.length > 0 && (
                <div className="space-y-2 pt-3 border-t border-border/50">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">{metric.label}</span>
                            <span className="font-mono font-medium text-foreground">{metric.value}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default StatusCard;
