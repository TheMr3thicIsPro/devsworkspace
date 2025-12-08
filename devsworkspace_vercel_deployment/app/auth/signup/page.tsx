'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '../../services/authService';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (!agreeToTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy');
      return;
    }
    
    try {
      // Split name into first and last name
      const nameParts = name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      const userData = {
        username: email.split('@')[0],
        email,
        firstName,
        lastName,
        isDeveloper: true, // Default for now
        roles: [], // Will be set during onboarding
        skills: [], // Will be set during onboarding
        experienceLevel: 'Beginner' as const, // Will be set during onboarding
        goals: [], // Will be set during onboarding
        languages: [], // Will be set during onboarding
        timezone: '' // Will be set during onboarding
      };
      
      const user = await authService.signup(userData, password);
      if (user) {
        // Redirect to onboarding
        router.push('/onboarding');
      } else {
        setError('Failed to create account. Please try again.');
      }
    } catch (err) {
      setError('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center py-12 px-4">
      <div className="card glow p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-accent-gradient mb-2">
            Create Account
          </h1>
          <p className="text-gray-400">
            Join DevsWorkspace to connect with developers and creators
          </p>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded-lg text-red-300">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue"
              placeholder="John Doe"
              required
            />
          </div>
          
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
            <label className="block text-gray-300 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue"
              placeholder="••••••••"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Confirm Password</label>
            <input 
              type="password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue"
              placeholder="••••••••"
              required
            />
          </div>
          
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="terms"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="w-4 h-4 bg-background-secondary border-gray-700 rounded focus:ring-neon-blue"
              required
            />
            <label htmlFor="terms" className="ml-2 text-gray-300">
              I agree to the <Link href="#" className="text-neon-blue hover:underline">Terms of Service</Link> and <Link href="#" className="text-neon-blue hover:underline">Privacy Policy</Link>
            </label>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-accent-gradient text-white py-3 rounded-lg font-semibold hover:glow transition-all"
          >
            Create Account
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-neon-blue hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}