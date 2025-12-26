import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { User, LogOut, Settings, ChevronDown } from 'lucide-react';

const UserDropdown = () => {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        setIsOpen(false);
        navigate('/'); // Redirect to home after logout
    };

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!user) return null;

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 p-1 pl-2 pr-1 rounded-full hover:bg-muted border border-transparent hover:border-border transition-all group"
            >
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
                    {user.name.charAt(0)}
                </div>
                <div className="hidden md:block text-left mr-1">
                    <p className="text-xs font-semibold text-foreground leading-none">{user.name.split(' ')[0]}</p>
                </div>
                <ChevronDown size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg py-1 z-50 animate-in fade-in zoom-in-95 duration-200">
                    <div className="px-4 py-3 border-b border-border/50">
                        <p className="text-sm font-medium text-foreground">{user.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    </div>

                    <div className="p-1">
                        <Link
                            to="/profile"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                        >
                            <User size={16} />
                            Your Profile
                        </Link>
                        <Link
                            to="/settings"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                        >
                            <Settings size={16} />
                            Settings
                        </Link>
                    </div>

                    <div className="h-px bg-border/50 my-1"></div>

                    <div className="p-1">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-destructive hover:bg-destructive/10 rounded-md transition-colors"
                        >
                            <LogOut size={16} />
                            Sign out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
