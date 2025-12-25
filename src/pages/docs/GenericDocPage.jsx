import React from 'react';
import DocLayout from '../../components/layout/DocLayout';

const GenericDocPage = ({ title }) => {
    return (
        <DocLayout
            title={title}
            description={`Documentation for ${title} is currently being written.`}
        >
            <div className="space-y-6">
                <div className="p-6 bg-muted/30 rounded-xl border border-border border-dashed">
                    <p className="text-muted-foreground italic">
                        This is a placeholder page for <strong>{title}</strong>.
                        In a full implementation, this page would contain detailed documentation,
                        code examples, and API references specific to {title}.
                    </p>
                </div>

                {/* Mock Content to make it look full */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">Overview</h3>
                    <p>
                        My Bootstrap provides a robust set of tools for handling {title.toLowerCase()}.
                        It is designed to be flexible, responsive, and easy to customize.
                    </p>

                    <h3 className="text-xl font-bold">Usage</h3>
                    <div className="bg-slate-950 text-slate-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        {`// Example usage of ${title}\nimport { ${title.replace(/\s/g, '')} } from 'my-bootstrap';`}
                    </div>
                </div>
            </div>
        </DocLayout>
    );
};

export default GenericDocPage;
