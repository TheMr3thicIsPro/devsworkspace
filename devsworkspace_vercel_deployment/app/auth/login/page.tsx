'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '../../services/authService';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const user = await authService.login(email, password);
      if (user) {
        // Redirect to onboarding if first time, otherwise to feed
        router.push('/feed'); // For now, redirect to feed
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center py-12 px-4">
      <div className="card glow p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-accent-gradient mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-400">
            Sign in to your DevsWorkspace account
          </p>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded-lg text-red-300">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue"
              placeholder="you@example.com"
              required
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-gray-300">Password</label>
              <Link href="#" className="text-neon-blue text-sm hover:underline">
                Forgot password?
              </Link>
            </div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue"
              placeholder="••••••••"
              required
            />
          </div>
          
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 bg-background-secondary border-gray-700 rounded focus:ring-neon-blue"
            />
            <label htmlFor="remember" className="ml-2 text-gray-300">
              Remember me
            </label>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-accent-gradient text-white py-3 rounded-lg font-semibold hover:glow transition-all"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Don't have an account?{' '}
            <Link href="/auth/signup" className="text-neon-blue hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}