import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

const categories = ["All", "Release", "Tutorial", "Engineering", "Guide", "Design", "Performance"];

const BlogPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    // Filter Logic
    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    // Identify Featured Post (First featured one or just the first one)
    const featuredPost = filteredPosts.find(p => p.featured) || filteredPosts[0];

    // Remaining posts for grid (excluding the one shown as featured, if distinct)
    const showFeatured = activeCategory === "All" && featuredPost;
    const gridPosts = showFeatured ? filteredPosts.filter(p => p.id !== featuredPost.id) : filteredPosts;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            {/* 1. HEADER */}
            <div className="text-center max-w-2xl mx-auto pt-8">
                <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-foreground">
                    Blog
                </h1>
                <p className="text-lg text-muted-foreground">
                    Latest news, tutorials, and updates from the My Bootstrap team.
                </p>
            </div>

            {/* 2. CATEGORY FILTERS */}
            <div className="sticky top-[60px] z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 border-b border-border -mx-4 px-4 md:-mx-8 md:px-8">
                <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar scroll-smooth">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border ${activeCategory === cat
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'bg-card text-muted-foreground border-border hover:border-foreground/20 hover:text-foreground'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* 3. FEATURED POST (Only on All view) */}
            {showFeatured && (
                <div className="relative rounded-2xl overflow-hidden border border-border bg-card group hover:shadow-xl transition-all duration-300">
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                    <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium text-xs">
                                    {featuredPost.category}
                                </span>
                                <span className="flex items-center gap-1"><Calendar size={14} /> {featuredPost.date}</span>
                            </div>
                            <h2 className="text-3xl font-bold group-hover:text-primary transition-colors">
                                <Link to={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                            </h2>
                            <p className="text-muted-foreground text-lg line-clamp-2">
                                {featuredPost.excerpt}
                            </p>
                            <div className="pt-4">
                                <Link to={`/blog/${featuredPost.id}`} className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all">
                                    Read Article <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* 4. POST GRID */}
            {gridPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gridPosts.map((post) => (
                        <div key={post.id} className="flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
                            <div className={`h-2 w-full bg-${post.color}-500`} />
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`text-xs font-bold uppercase tracking-wider text-${post.color}-500 bg-${post.color}-500/10 px-2 py-1 rounded`}>
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-muted-foreground">{post.date}</span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                </h3>

                                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                    <span className="text-xs flex items-center gap-1 text-muted-foreground font-medium">
                                        <User size={12} /> {post.author}
                                    </span>
                                    <Link to={`/blog/${post.id}`} className="text-xs font-semibold text-foreground hover:text-primary transition-colors">
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed border-border">
                    <p className="text-muted-foreground">No posts found for this category.</p>
                </div>
            )}

            {/* 5. NEWSLETTER */}
            <div className="bg-muted/30 border border-border rounded-2xl p-8 text-center mt-12">
                <h3 className="text-xl font-bold mb-2">Subscribe to our newsletter</h3>
                <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
                    Get the latest updates and tutorials delivered straight to your inbox.
                </p>
                <div className="flex max-w-sm mx-auto gap-2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                    />
                    <button className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg text-sm hover:bg-primary/90">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
