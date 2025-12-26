import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const CodeBlock = ({ code, language = 'bash' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="relative group rounded-lg overflow-hidden border border-border bg-[var(--bg-code)] text-[var(--text-code)] my-4 shadow-sm">
            <div className="flex items-center justify-between px-4 py-2 bg-secondary border-b border-border">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{language}</span>
                <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-md hover:bg-background text-muted-foreground hover:text-foreground transition-colors"
                    title="Copy to clipboard"
                >
                    {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                </button>
            </div>
            <div className="p-4 overflow-x-auto custom-scrollbar">
                <pre className="font-mono text-sm leading-relaxed">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
};

export default CodeBlock;
