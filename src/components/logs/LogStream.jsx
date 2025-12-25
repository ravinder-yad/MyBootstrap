import React from 'react';
import LogItem from './LogItem';
import { Ghost } from 'lucide-react';

const LogStream = ({ logs, selectedLogId, onLogClick }) => {
    if (logs.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground anime-in fade-in zoom-in-95 duration-300">
                <div className="p-4 rounded-full bg-muted mb-4">
                    <Ghost size={48} className="opacity-20" />
                </div>
                <p className="text-lg font-medium">No logs found</p>
                <p className="text-sm opacity-60">Try adjusting your filters or triggering an event.</p>
            </div>
        );
    }

    return (
        <div className="space-y-2 pb-20">
            {logs.map((log) => (
                <LogItem
                    key={log.id}
                    log={log}
                    isSelected={selectedLogId === log.id}
                    onClick={onLogClick}
                />
            ))}
        </div>
    );
};

export default LogStream;
