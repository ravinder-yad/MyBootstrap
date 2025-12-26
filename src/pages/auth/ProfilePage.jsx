import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Shield, Camera, Pencil } from 'lucide-react';

const ProfilePage = () => {
    const { user, updateProfile } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user?.name || '');

    if (!user) {
        return <div className="p-8 text-center">Loading profile...</div>;
    }

    const handleSave = () => {
        updateProfile({ name });
        setIsEditing(false);
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">

                {/* 1. Profile Header */}
                <div className="p-6 md:p-8 bg-muted/20 border-b border-border flex flex-col md:flex-row items-center gap-6">
                    <div className="relative group cursor-pointer">
                        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold border-4 border-background shadow-sm">
                            {user.name.charAt(0)}
                        </div>
                        <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Camera className="w-6 h-6 text-white" />
                        </div>
                    </div>

                    <div className="text-center md:text-left flex-1">
                        <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
                        <p className="text-muted-foreground">{user.email}</p>
                        <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {user.role}
                        </div>
                    </div>

                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="px-4 py-2 bg-background border border-border hover:bg-muted text-foreground rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                    >
                        <Pencil size={16} />
                        {isEditing ? 'Cancel' : 'Edit Profile'}
                    </button>
                </div>

                {/* 2. Info Sections */}
                <div className="p-6 md:p-8 space-y-8">

                    {/* Personal Info */}
                    <section>
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <User size={20} className="text-muted-foreground" />
                            Personal Information
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-1">
                                    Full Name
                                </label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-3 py-2 bg-background border border-input rounded-md focus:ring-2 focus:ring-primary outline-none"
                                    />
                                ) : (
                                    <div className="text-foreground font-medium">{user.name}</div>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-1">
                                    Email Address
                                </label>
                                <div className="text-foreground font-medium flex items-center gap-2">
                                    {user.email}
                                    <span className="text-xs bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full">Verified</span>
                                </div>
                            </div>
                        </div>
                        {isEditing && (
                            <div className="mt-4 flex justify-end">
                                <button
                                    onClick={handleSave}
                                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium"
                                >
                                    Save Changes
                                </button>
                            </div>
                        )}
                    </section>

                    <div className="h-px bg-border/50"></div>

                    {/* Account Details */}
                    <section>
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Shield size={20} className="text-muted-foreground" />
                            Security & Account
                        </h3>
                        <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h4 className="font-medium text-foreground">Password</h4>
                                    <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                                </div>
                                <button className="text-sm text-primary font-medium hover:underline">Change</button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium text-foreground">Two-Factor Authentication</h4>
                                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                                </div>
                                <button className="text-sm text-primary font-medium hover:underline">Enable</button>
                            </div>
                        </div>
                    </section>

                    <div className="h-px bg-border/50"></div>

                    {/* Danger Zone */}
                    <section>
                        <h3 className="text-lg font-semibold text-destructive mb-2">Danger Zone</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Once you delete your account, there is no going back. Please be certain.
                        </p>
                        <button className="px-4 py-2 border border-destructive text-destructive hover:bg-destructive/10 rounded-md text-sm font-medium transition-colors">
                            Delete Account
                        </button>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
