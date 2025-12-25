
import { Calendar, User, ArrowRight, Tag, BookOpen, Layers, Zap, PenTool } from 'lucide-react';

export const blogPosts = [
    {
        id: "intro-v1",
        title: "Introducing My Bootstrap v1.0",
        excerpt: "We’re excited to announce the first release of My Bootstrap. Learn about the philosophy, new features, and what’s coming next.",
        content: `
            <p class="lead">After months of development and community feedback, we are thrilled to announce the general availability of My Bootstrap v1.0.</p>
            
            <h2>What is My Bootstrap?</h2>
            <p>My Bootstrap is not just another UI kit. It's a comprehensive design system built for modern web development. We've taken the best parts of utility-first CSS and combined them with robust, pre-built components to help you build faster than ever.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Zero Runtime CSS:</strong> Powered by Tailwind's engine for blazing fast styling.</li>
                <li><strong>Dark Mode First:</strong> Every component is designed with dark mode in mind from day one.</li>
                <li><strong>Accessibility:</strong> WCAG 2.1 AA compliance baked into interactive elements.</li>
            </ul>

            <h2>The Philosophy</h2>
            <p>We believe that developers shouldn't have to choose between speed and quality. With My Bootstrap, you get ready-made templates that look premium out of the box, but are flexible enough to be completely customized.</p>
            
            <blockquote>
                "The goal is to make the start of a project as exciting as the finish."
            </blockquote>

            <h2>What's Next?</h2>
            <p>This is just the beginning. In the coming weeks, we'll be releasing more templates, advanced data-grid components, and a dedicated icon set. Stay tuned!</p>
        `,
        date: "Dec 25, 2025",
        author: "Ravinder",
        category: "Release",
        color: "blue",
        readTime: "3 min read",
        featured: true,
        image: Layers // Placeholder icon
    },
    {
        id: "mastering-grid",
        title: "Mastering Grid Layouts",
        excerpt: "A deep dive into the responsive grid system. How to build complex layouts with just a few utility classes.",
        content: `
            <p>CSS Grid has revolutionized web layout, but it can still be intimidating. My Bootstrap simplifies this with a powerful 12-column system.</p>
            
            <h2>The Basics</h2>
            <p>Our grid system uses a standard 12-column layout. You can define column spans for different breakpoints using simple classes like <code>col-span-12</code> for mobile and <code>md:col-span-6</code> for tablet.</p>
            
            <h3>Responsive Design</h3>
            <p>Responsive design is at the core of our grid. By using breakpoint prefixes, you can completely drastically change your layout without writing a single media query.</p>
            
            <pre><code>&lt;div class="grid grid-cols-1 md:grid-cols-3 gap-4"&gt;
  &lt;div&gt;Column 1&lt;/div&gt;
  &lt;div&gt;Column 2&lt;/div&gt;
  &lt;div&gt;Column 3&lt;/div&gt;
&lt;/div&gt;</code></pre>

            <h2>Advanced Techniques</h2>
            <p>Learn how to use <code>col-start</code> and <code>col-end</code> to create overlapping layouts and magazine-style articles.</p>
        `,
        date: "Dec 20, 2025",
        author: "Team",
        category: "Tutorial",
        color: "indigo",
        readTime: "8 min read",
        featured: false,
        image: BookOpen
    },
    {
        id: "css-variables-future",
        title: "The Future of CSS Variables",
        excerpt: "Why we switched entirely to CSS variables for theming and how you can leverage them in your own projects.",
        content: `
            <p>Static preprocessors are a thing of the past. The future of theming is dynamic, and CSS variables (Custom Properties) are the engine driving this change.</p>
            
            <h2>Why Variables?</h2>
            <p>CSS variables allow values to be updated instantly in the browser. This is what makes our instant Dark Mode toggle possible without reloading or flashing.</p>
            
            <h2>Scoped Styling</h2>
            <p>Unlike SASS variables which compile away, CSS variables exist in the DOM. This means you can scope them to specific containers.</p>
        `,
        date: "Dec 15, 2025",
        author: "Dev Team",
        category: "Engineering",
        color: "purple",
        readTime: "5 min read",
        featured: false,
        image: Zap
    },
    {
        id: "accessible-forms",
        title: "Building Accessible Forms",
        excerpt: "Accessibility is not an afterthought. Here are the best practices for building inclusive forms with our kit.",
        content: `
            <p>Forms are the primary way users interact with your application. Ensuring they are accessible to everyone is critical.</p>
        `,
        date: "Dec 10, 2025",
        author: "A11y Expert",
        category: "Guide",
        color: "green",
        readTime: "6 min read",
        featured: false,
        image: PenTool
    }
];
