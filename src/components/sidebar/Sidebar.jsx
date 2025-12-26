import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Using NavLink for active styling
import { Activity, Terminal, Layers, Component, Layout, Type, Grid, Palette, Download, ChevronDown, ChevronRight, Settings, FileCode } from 'lucide-react';
import { sidebarConfig } from '../../sidebar.config';

// 1. Icon Mapping (String -> Component)
const iconMap = {
    Activity,
    Terminal,
    Layers,
    Component,
    Layout,
    Type,
    Grid,
    Palette,
    Download,
    Settings,
    FileCode
};

// 2. Sidebar Item Component (Recursive)
const SidebarItem = ({ item, level = 0, onLinkClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;
    const Icon = item.icon ? iconMap[item.icon] : (hasChildren ? Layers : FileCode);

    // Toggle Logic for Parent Items
    const handleToggle = (e) => {
        if (hasChildren) {
            e.preventDefault(); // Prevent navigation if it's just a folder
            setIsOpen(!isOpen);
        }
    };

    // Dynamic Padding based on level (Indent)
    const paddingLeft = `${(level * 12) + 12}px`;

    // Common Classes
    const baseClasses = `flex items-center px-3 py-2 my-1 mx-2 rounded-md cursor-pointer transition-all duration-200 select-none text-sm group`;

    // Parent Item (No Link, just Toggle)
    if (hasChildren) {
        return (
            <div className="w-full">
                <div
                    className={`${baseClasses} text-foreground/80 hover:bg-muted hover:text-foreground`}
                    style={{ paddingLeft }}
                    onClick={handleToggle}
                >
                    <span className="mr-3 flex items-center opacity-70 group-hover:opacity-100">
                        {Icon && <Icon size={18} />}
                    </span>
                    <span className="flex-1 truncate">{item.label || item}</span>
                    <span className="opacity-50 flex items-center ml-auto">
                        {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </span>
                </div>
                {/* Recursive Children */}
                {isOpen && (
                    <div className="ml-3 border-l border-border/40 pl-1">
                        {item.children.map((child, index) => (
                            <SidebarItem key={index} item={child} level={level + 1} onLinkClick={onLinkClick} />
                        ))}
                    </div>
                )}
            </div>
        );
    }

    // Leaf Item (Link)
    return (
        <NavLink
            to={item.path || '#'} // Fallback to # if no path (should not happen for Docs)
            onClick={onLinkClick} // Trigger close on mobile
            className={({ isActive }) => `
                ${baseClasses}
                ${isActive
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-foreground/80 hover:bg-muted hover:text-foreground'
                }
            `}
            style={{ paddingLeft }}
        >
            <span className="mr-3 flex items-center">
                {/* Icon is usually only on top level or specific items, leaf might just be text or dot */}
                {Icon && <Icon size={18} className="opacity-70 group-hover:opacity-100" />}
            </span>
            <span className="flex-1 truncate">{item.label || item}</span>
        </NavLink>
    );
};

// 3. Main Sidebar Component
const Sidebar = ({ className, onLinkClick }) => {
    const location = window.location.pathname;

    let activeSection = "Docs";
    if (location.startsWith("/ui")) activeSection = "UI Library";
    else if (location.startsWith("/examples")) activeSection = "Examples";
    // Check if we are in a docs route but NOT in UI or Examples (already handled)
    // The default "Docs" covers Getting Started, Customize, etc.

    const filteredConfig = sidebarConfig.filter(group =>
        group.navSection === activeSection || !group.navSection
    );

    return (
        <aside className={`${className} flex flex-col bg-card/60 backdrop-blur-sm border-r border-border`}>
            <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6 custom-scrollbar">
                {filteredConfig.length > 0 ? (
                    filteredConfig.map((section, index) => (
                        <div key={index} className="space-y-1 mb-6">
                            <h3 className="text-[11px] uppercase tracking-wider text-muted-foreground/80 font-bold px-3 mb-2 mt-4">
                                {section.section}
                            </h3>
                            <div className="space-y-0.5">
                                {section.items.map((item, idx) => (
                                    <SidebarItem key={idx} item={item} onLinkClick={onLinkClick} />
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="px-4 py-8 text-center text-muted-foreground text-sm">
                        <p>No items found.</p>
                    </div>
                )}
            </div>

            {/* User Profile / Footer */}
            <div className="mt-auto px-3 pt-6 pb-4 border-t border-border/50 bg-secondary/10">
                <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 cursor-pointer transition-all border border-transparent hover:border-border">
                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">
                        RD
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">Ravinder</span>
                        <span className="text-[10px] text-muted-foreground">Free Plan</span>
                    </div>
                    <Settings size={14} className="ml-auto text-muted-foreground/70" />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
