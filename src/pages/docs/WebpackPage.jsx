import React from 'react';
import DocLayout from '../../components/layout/DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';
import { Settings, FileCog } from 'lucide-react';

const WebpackPage = () => {
    return (
        <DocLayout
            title="Webpack"
            description="Detailed guide for integrating My Bootstrap into a complex Webpack 5+ workflow."
        >

            {/* 1. WHY WEBPACK */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Why Webpack?</h2>
                <p className="text-muted-foreground mb-4">
                    Webpack gives you full control over the asset pipeline. It is ideal for large-scale enterprise applications that require custom loaders, code splitting, and granular optimization.
                </p>
            </section>

            {/* 2. BASIC SETUP */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Basic Setup</h2>
                <p className="text-sm font-semibold mb-2">Required Loaders</p>
                <CodeBlock language="bash" code="npm install style-loader css-loader sass-loader sass --save-dev" />
            </section>

            {/* 3. CONFIGURATION */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Configuration</h2>
                <p className="text-muted-foreground mb-4">Add the following rule to your <code>webpack.config.js</code>:</p>
                <CodeBlock language="javascript" code={`module: {
  rules: [
    {
      test: /\\.s[ac]ss$/i,
      use: [
        // Creates \`style\` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
  ],
},`} />
            </section>

            {/* 4. OPTIMIZATION */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6"><Settings className="inline mr-2" size={20} />Optimization</h2>
                <p className="text-muted-foreground text-sm">
                    For production, consider using <code>MiniCssExtractPlugin</code> to extract CSS into separate files instead of injecting it via JS.
                </p>
            </section>

        </DocLayout>
    );
};

export default WebpackPage;
