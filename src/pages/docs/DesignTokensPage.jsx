import React from 'react';

const DesignTokensPage = () => {
    const TokenSection = ({ title, desc, children }) => (
        <section className="space-y-4 p-6 bg-card border border-border rounded-xl">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{desc}</p>
            {children}
        </section>
    );

    const ColorToken = ({ name, value, bg }) => (
        <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-lg border border-border shadow-sm ${bg}`}></div>
            <div>
                <div className="font-mono text-xs font-semibold">{name}</div>
                <div className="text-[10px] text-muted-foreground">{value}</div>
            </div>
        </div>
    );

    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    Design tokens are the atoms of our design system. Use them instead of hardcoded values to ensure consistency and easier theming.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Color Tokens */}
                <TokenSection
                    title="Colors"
                    desc="Semantic color tokens that adapt to light and dark modes."
                >
                    <div className="grid grid-cols-2 gap-4">
                        <ColorToken name="--primary" value="hsl(222.2, 47.4%, 11.2%)" bg="bg-primary" />
                        <ColorToken name="--secondary" value="hsl(210, 40%, 96.1%)" bg="bg-secondary" />
                        <ColorToken name="--destructive" value="hsl(0, 84.2%, 60.2%)" bg="bg-destructive" />
                        <ColorToken name="--muted" value="hsl(210, 40%, 96.1%)" bg="bg-muted" />
                        <ColorToken name="--background" value="#ffffff" bg="bg-background" />
                        <ColorToken name="--card" value="#ffffff" bg="bg-card" />
                    </div>
                </TokenSection>

                {/* Spacing Tokens */}
                <TokenSection
                    title="Spacing"
                    desc="Consistent spacing scale for margins, paddings, and gaps."
                >
                    <div className="space-y-3">
                        {[
                            { name: '0.25rem', label: 'xs (1)' },
                            { name: '0.5rem', label: 'sm (2)' },
                            { name: '1rem', label: 'md (4)' },
                            { name: '1.5rem', label: 'lg (6)' },
                            { name: '2rem', label: 'xl (8)' },
                            { name: '3rem', label: '2xl (12)' },
                        ].map((space, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="font-mono text-xs w-16 text-muted-foreground">{space.label}</div>
                                <div className="h-4 bg-primary/20 rounded" style={{ width: space.name }}></div>
                                <div className="text-[10px] text-muted-foreground">{space.name}</div>
                            </div>
                        ))}
                    </div>
                </TokenSection>

                {/* Typography Tokens */}
                <TokenSection
                    title="Typography"
                    desc="Font sizes, weights, and leading."
                >
                    <div className="space-y-4">
                        <div>
                            <span className="text-3xl font-bold tracking-tight">Heading 1</span>
                            <div className="text-[10px] text-muted-foreground font-mono mt-1">text-3xl / font-bold / tracking-tight</div>
                        </div>
                        <div>
                            <span className="text-2xl font-semibold tracking-tight">Heading 2</span>
                            <div className="text-[10px] text-muted-foreground font-mono mt-1">text-2xl / font-semibold / tracking-tight</div>
                        </div>
                        <div>
                            <span className="text-xl font-medium">Heading 3</span>
                            <div className="text-[10px] text-muted-foreground font-mono mt-1">text-xl / font-medium</div>
                        </div>
                        <div>
                            <p className="text-base text-muted-foreground">Body text used for standard paragraphs and descriptions.</p>
                            <div className="text-[10px] text-muted-foreground font-mono mt-1">text-base / text-muted-foreground</div>
                        </div>
                    </div>
                </TokenSection>

                {/* Radius Tokens */}
                <TokenSection
                    title="Radii"
                    desc="Corner rounding values for components."
                >
                    <div className="flex flex-wrap gap-4">
                        <div className="w-16 h-16 border border-primary/50 flex items-center justify-center text-xs rounded-sm">sm</div>
                        <div className="w-16 h-16 border border-primary/50 flex items-center justify-center text-xs rounded-md shadow-sm">md</div>
                        <div className="w-16 h-16 border border-primary/50 flex items-center justify-center text-xs rounded-lg shadow-sm">lg</div>
                        <div className="w-16 h-16 border border-primary/50 flex items-center justify-center text-xs rounded-xl shadow-md">xl</div>
                        <div className="w-16 h-16 border border-primary/50 flex items-center justify-center text-xs rounded-full">full</div>
                    </div>
                </TokenSection>
            </div>
        </div>
    );
};

export default DesignTokensPage;
