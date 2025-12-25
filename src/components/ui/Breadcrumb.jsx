import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items }) => {
    return (
        <nav className="flex items-center text-sm text-muted-foreground mb-6 overflow-x-auto whitespace-nowrap pb-2 md:pb-0" aria-label="Breadcrumb">
            <div className="flex items-center hover:text-foreground transition-colors cursor-pointer">
                <Home size={14} className="mr-1" />
                <span>Home</span>
            </div>
            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    <ChevronRight size={14} className="mx-2 text-border" />
                    <span
                        className={`transition-colors ${index === items.length - 1
                                ? 'font-semibold text-foreground'
                                : 'hover:text-foreground cursor-pointer'
                            }`}
                    >
                        {item}
                    </span>
                </div>
            ))}
        </nav>
    );
};

export default Breadcrumb;
