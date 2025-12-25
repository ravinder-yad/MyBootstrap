import React from 'react';
import Breadcrumb from '../ui/Breadcrumb';

const DocLayout = ({ title, description, children }) => {
    // Basic breadcrumb logic (can be made dynamic)
    const breadcrumbItems = ['Docs', title];

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
            <Breadcrumb items={breadcrumbItems} />
            <div className="mb-10 text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    {description}
                </p>
            </div>
            <div className="space-y-12">
                {children}
            </div>
        </div>
    );
};

export default DocLayout;
