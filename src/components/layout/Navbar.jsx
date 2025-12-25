import React, { useMemo, useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Search, Github, Moon, Sun } from 'lucide-react';
import { sidebarConfig } from '../../sidebar.config';

const Navbar = ({ onToggleSidebar, onToggleMobileMenu, isDark, toggleTheme, showSidebarTrigger = true }) => {
    const location = useLocation();
    const navigate = useNavigate();

    // 🔍 SEARCH STATE
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef(null);

    // 🔄 FLATTEN CONFIG FOR SEARCH INDEX
    const searchIndex = useMemo(() => {
        const index = [];
        sidebarConfig.forEach(section => {
            if (section.items) {
                section.items.forEach(item => {
                    if (item.path) {
                        index.push({ title: item.label, path: item.path, category: section.section });
                    }
                    if (item.children) {
                        item.children.forEach(child => {
                            index.push({ title: child.label, path: child.path, category: item.label });
                        });
                    }
                });
            }
        });
        return index;
    }, []);

    // 🔎 HANDLE SEARCH INPUT
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim().length > 0) {
            const results = searchIndex.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase())
            ).slice(0, 8); // Limit to top 8 results
            setSearchResults(results);
            setShowResults(true);
        } else {
            setShowResults(false);
        }
    };

    // 🚀 NAVIGATE TO RESULT
    const handleResultClick = (path) => {
        navigate(path);
        setSearchQuery('');
        setShowResults(false);
    };

    // 🖱️ CLOSE ON CLICK OUTSIDE
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResults(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="h-[60px] border-b border-border flex items-center justify-between px-4 sm:px-6 bg-background/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">

            {/* 🟦 LEFT: BRAND & NAV LINKS */}
            <div className="flex items-center gap-6 lg:gap-8">
                {/* 1. Mobile Menu & Brand */}
                <div className="flex items-center gap-3">
                    {showSidebarTrigger && (
                        <button
                            onClick={onToggleMobileMenu}
                            className="lg:hidden p-2 -ml-2 mr-2 text-muted-foreground hover:bg-muted rounded-md"
                            title="Toggle Menu"
                        >
                            <Menu size={20} />
                        </button>
                    )}

                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground shadow-sm group-hover:shadow-md transition-all">
                            <span className="font-bold text-lg select-none">B</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight hidden sm:block">
                            MyBootstrap
                        </span>
                    </Link>
                </div>

                {/* 2. Primary Navigation (Desktop) */}
                <nav className="hidden md:flex items-center gap-1">

                    {/* Docs Link */}
                    <NavLink
                        to="/getting-started/introduction"
                        className={({ isActive }) => `px-3 py-2 text-sm font-medium rounded-md transition-colors
                            ${isActive ||
                                location.pathname.startsWith('/getting-started') ||
                                location.pathname.startsWith('/layout') ||
                                location.pathname.startsWith('/content') ||
                                location.pathname.startsWith('/forms') ||
                                location.pathname.startsWith('/components') ||
                                location.pathname.startsWith('/utilities')
                                ? 'text-primary bg-primary/10'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                            }`}
                    >
                        Docs
                    </NavLink>

                    <NavLink
                        to="/examples"
                        className={({ isActive }) => `px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
                    >
                        Examples
                    </NavLink>
                    <NavLink
                        to="/templates"
                        className={({ isActive }) => `px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
                    >
                        Templates
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className={({ isActive }) => `px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
                    >
                        Blog
                    </NavLink>
                </nav>
            </div>


            {/* 🟨 CENTER: GLOBAL SEARCH */}
            <div className="flex-1 max-w-md px-4 hidden sm:block relative" ref={searchRef}>
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Search docs..."
                        value={searchQuery}
                        onChange={handleSearch}
                        onFocus={() => searchQuery.length > 0 && setShowResults(true)}
                        className="w-full h-10 pl-10 pr-12 bg-muted/50 border border-transparent rounded-full text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:bg-background focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
                        <kbd className="hidden lg:inline-flex h-5 items-center gap-1 rounded border border-border bg-muted font-mono text-[10px] font-medium text-muted-foreground px-1.5">
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </div>
                </div>

                {/* SEARCH RESULTS DROPDOWN */}
                {showResults && (
                    <div className="absolute top-full left-4 right-4 mt-2 bg-card border border-border rounded-lg shadow-xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                        {searchResults.length > 0 ? (
                            <ul className="py-2">
                                {searchResults.map((result, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => handleResultClick(result.path)}
                                            className="w-full text-left px-4 py-2 hover:bg-muted transition-colors flex items-center justify-between group"
                                        >
                                            <span className="font-medium text-sm group-hover:text-primary transition-colors">{result.title}</span>
                                            <span className="text-xs text-muted-foreground bg-muted-foreground/10 px-2 py-0.5 rounded">{result.category}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="p-4 text-center text-sm text-muted-foreground">
                                No results found for "{searchQuery}"
                            </div>
                        )}
                    </div>
                )}
            </div>


            {/* 🟪 RIGHT: ACTIONS & UTILITIES */}
            <div className="flex items-center gap-2 sm:gap-4 pl-4">

                {/* Version Badge */}
                <span className="hidden lg:block text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
                    v1.0.0
                </span>

                <div className="h-4 w-px bg-border hidden sm:block"></div>

                <div className="flex items-center gap-1">
                    <a
                        href="https://github.com/ravinder-yad"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                        title="GitHub"
                    >
                        <Github size={20} />
                    </a>

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                    >
                        {isDark ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </div>

                <button
                    className="hidden sm:block ml-2 bg-foreground text-background hover:bg-foreground/90 px-4 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm"
                    onClick={() => window.open('https://getbootstrap.com', '_blank')}
                >
                    Download
                </button>
            </div>

        </header>
    );
};

export default Navbar;
