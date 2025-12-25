import React from 'react';
import { Github, Twitter, Linkedin, Users } from 'lucide-react';

const TeamMemberCard = ({ name, role, description, github, image }) => (
    <div className="p-6 border border-border rounded-lg bg-card text-center hover:border-primary/50 transition-colors group">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-border group-hover:border-primary/50 transition-colors bg-muted/50">
            {/* Placeholder for avatar if no image provided */}
            {image ? (
                <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-muted-foreground/50" />
                </div>
            )}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-primary font-medium text-sm mb-3">{role}</p>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        <div className="flex justify-center gap-3">
            {github && (
                <a href={`https://github.com/${github}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={18} />
                </a>
            )}
        </div>
    </div>
);

const AboutTeamPage = () => {
    return (
        <div className="space-y-12">
            {/* Introduction */}
            <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Team</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    My Bootstrap is maintained by a small group of developers and powered by a growing community. We are passionate about the web and open source.
                </p>
            </section>

            {/* Core Team */}
            <section className="space-y-8">
                <h3 className="text-2xl font-semibold text-foreground">Core Team</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <TeamMemberCard
                        name="The Creator"
                        role="Lead Maintainer"
                        description="Architect of the framework, focusing on core logic and design systems."
                        github="creator"
                    />
                    <TeamMemberCard
                        name="Design Lead"
                        role="UI/UX Designer"
                        description="Crafting the visual language and ensuring pixel-perfect components."
                        github="designer"
                    />
                    <TeamMemberCard
                        name="DevOps Pro"
                        role="Infrastructure"
                        description="Managing builds, deployments, and developer tooling."
                        github="devops"
                    />
                </div>
            </section>

            {/* Community */}
            <section className="py-8 border-t border-border mt-12">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Community Contributors</h3>
                <p className="text-muted-foreground mb-6">
                    A huge shoutout to all the contributors who have helped shape this project.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                        <div key={i} className="h-12 bg-muted/30 rounded-full flex items-center gap-3 px-3 border border-border/50">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold">
                                U{i}
                            </div>
                            <span className="text-sm font-medium text-muted-foreground">User {i}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* How to Join */}
            <section className="p-8 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 text-center space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Want to join us?</h3>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    We are always looking for new contributors. Whether you are a designer, developer, or writer, there is a place for you here.
                </p>
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Read Contribution Guide
                </button>
            </section>
        </div>
    );
};

export default AboutTeamPage;
