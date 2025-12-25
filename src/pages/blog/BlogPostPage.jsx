import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, Clock, ChevronLeft, Share2, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

const BlogPostPage = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    // If post not found, redirect (or show 404)
    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const CategoryIcon = post.image; // Using the icon stored in data

    return (
        <article className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">

            {/* 1. TOP NAV / BACK ACTION */}
            <div className="mb-8">
                <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ChevronLeft size={16} className="mr-1" /> Back to Blog
                </Link>
            </div>

            {/* 2. BLOG HEADER */}
            <header className="max-w-3xl mx-auto text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <span className={`px-3 py-1 rounded-full bg-${post.color || 'blue'}-500/10 text-${post.color || 'blue'}-500 font-bold text-xs uppercase tracking-wider`}>
                        {post.category}
                    </span>
                    <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock size={14} /> {post.readTime}
                    </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
                    {post.title}
                </h1>

                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center border border-border">
                            <User size={16} />
                        </div>
                        <span className="font-medium text-foreground">{post.author}</span>
                    </div>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                        <Calendar size={14} /> {post.date}
                    </span>
                </div>
            </header>

            {/* 3. FEATURED IMAGE / BANNER (Optional, using gradient for now) */}
            <div className={`w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-${post.color || 'blue'}-500/10 to-${post.color || 'blue'}-500/5 border border-border mb-12 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-black/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-white/5" />
                {CategoryIcon && <CategoryIcon size={64} className={`text-${post.color}-500 opacity-50`} />}
            </div>

            {/* 4. CONTENT BODY */}
            <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-blue">
                {/* 
                    Dangerously setting HTML is okay here since the source is internal static data. 
                    In a real app, sanitize this! 
                */}
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* 5. FOOTER / SHARE */}
            <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold">Share this article:</span>
                    <button className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                        <Share2 size={18} />
                    </button>
                    {/* Add social icons as needed */}
                </div>
                <div>
                    {/* Tags or next post link could go here */}
                </div>
            </div>

            {/* 6. CTA */}
            <div className="max-w-4xl mx-auto bg-muted/20 border border-border rounded-xl p-8 md:p-12 text-center mt-20">
                <h3 className="text-2xl font-bold mb-4">Ready to build your next project?</h3>
                <p className="text-muted-foreground mb-8">
                    Get started with My Bootstrap today and build beautiful, accessible interfaces in record time.
                </p>
                <Link to="/getting-started/download" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
                    Download Framework <ArrowRight size={18} className="ml-2" />
                </Link>
            </div>

        </article>
    );
};

export default BlogPostPage;
