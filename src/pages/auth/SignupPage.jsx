import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Lock, Mail, User, Loader2 } from 'lucide-react';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await login(email, password); // Mock signup currently just logs in
            navigate('/');
        } catch (err) {
            setError("Failed to create account");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="max-w-md w-full space-y-8 p-8 bg-card rounded-xl border border-border shadow-lg">
                <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-lg mx-auto flex items-center justify-center mb-4">
                        <span className="text-primary-foreground font-bold text-2xl">B</span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-foreground">Create Account</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Join the community today
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1">
                                Full Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-muted/50 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                                    placeholder="Lionel Messi"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1">
                                Email address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-muted/50 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                                    placeholder="messi@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-muted/50 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            required
                            className="h-4 w-4 text-primary focus:ring-primary border-input rounded"
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
                            I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a>
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {loading ? (
                            <Loader2 className="animate-spin w-5 h-5 mr-2" />
                        ) : (
                            "Sign Up"
                        )}
                    </button>

                    {error && <p className="text-destructive text-sm text-center">{error}</p>}
                </form>

                <div className="text-center text-sm text-muted-foreground">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-primary hover:text-primary/80">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
