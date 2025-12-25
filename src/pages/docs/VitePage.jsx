import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Zap, Package } from 'lucide-react';

const VitePage = () => {
    return (
        <DocLayout
            title="Vite"
            description="Guide on setting up My Bootstrap with Vite, a lightning-fast modern build tool."
        >

            {/* 1. WHY VITE */}
            <section className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="p-3 bg-purple-500/10 text-purple-500 rounded-lg"><Zap size={24} /></span>
                    <h2 className="text-2xl font-bold m-0 border-none">Why Vite?</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                    Vite offers an instant development server start and lightning-fast Hot Module Replacement (HMR).
                    It is the recommended tool for using My Bootstrap with React or Vue.
                </p>
            </section>

            {/* 2. INSTALLATION */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Installation</h2>
                <p className="text-sm font-semibold mb-2">1. Create a Project</p>
                <CodeBlock language="bash" code="npm create vite@latest my-app -- --template react" />

                <p className="text-sm font-semibold mb-2 mt-4">2. Install My Bootstrap</p>
                <CodeBlock language="bash" code="npm install my-bootstrap @popperjs/core" />
            </section>

            {/* 3. USING MY BOOTSTRAP */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Usage</h2>
                <p className="text-sm font-semibold mb-2">Import CSS in <code>main.jsx</code></p>
                <CodeBlock language="javascript" code={`import 'my-bootstrap/dist/css/bootstrap.min.css';
import 'my-bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)`} />
            </section>

            {/* 4. COMMON ISSUES */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Common Issues</h2>
                <div className="bg-muted p-4 rounded-lg border border-border">
                    <h4 className="font-bold text-sm mb-1">CSS Order Priority</h4>
                    <p className="text-xs text-muted-foreground">
                        Ensure you import your custom CSS <strong>after</strong> the bootstrap import to override styles correctly.
                    </p>
                </div>
            </section>

        </DocLayout>
    );
};

export default VitePage;
