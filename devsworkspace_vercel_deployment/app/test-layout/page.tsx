'use client';

import { useEffect, useState } from 'react';
import { authService } from '../services/authService';
import { User } from '../models/User';

export default function TestLayoutPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  
  useEffect(() => {
    // Update state when component mounts
    setIsAuthenticated(authService.isAuthenticated());
    setCurrentUser(authService.getCurrentUser());
  }, []);
  
  const toggleAuth = () => {
    authService.setAuthenticated(!authService.isAuthenticated());
    setIsAuthenticated(authService.isAuthenticated());
    setCurrentUser(authService.getCurrentUser());
  };
  
  const refreshState = () => {
    setIsAuthenticated(authService.isAuthenticated());
    setCurrentUser(authService.getCurrentUser());
  };
  
  const forceSignOut = () => {
    authService.clearAllAuthData();
    setIsAuthenticated(false);
    setCurrentUser(null);
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="card glow p-8 mb-8">
          <h1 className="text-3xl font-bold mb-6">Layout Test Page</h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Current State</h2>
            <div className="p-4 bg-background-secondary rounded-lg mb-4">
              <p className="text-lg">
                Authentication Status: <span className={`font-bold ${authService.isAuthenticated() ? 'text-green-400' : 'text-red-400'}`}>
                  {authService.isAuthenticated() ? 'Authenticated' : 'Not Authenticated'}
                </span>
              </p>
            </div>
            
            {authService.getCurrentUser() && (
              <div className="p-4 bg-background-secondary rounded-lg">
                <p className="text-lg">
                  Current User: <span className="font-bold text-neon-blue">{authService.getCurrentUser()?.username}</span>
                </p>
                <p className="text-gray-400 mt-2">
                  Email: {authService.getCurrentUser()?.email}
                </p>
              </div>
            )}
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Test Controls</h2>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={toggleAuth}
                className="px-6 py-3 bg-accent-gradient text-white rounded-lg font-semibold hover:glow transition-all"
              >
                Toggle Authentication State
              </button>
              
              <button
                onClick={refreshState}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all"
              >
                Refresh State
              </button>
              
              <button
                onClick={forceSignOut}
                className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all"
              >
                Force Sign Out & Clear All Auth Data
              </button>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Expected Behavior</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>When <span className="text-green-400">Authenticated</span>: Discord-style sidebar layout should be visible</li>
              <li>When <span className="text-red-400">Not Authenticated</span>: Traditional top navbar layout should be visible</li>
              <li>You can now see your current user information when authenticated</li>
              <li>Use the Refresh State button to manually update the displayed authentication status</li>
              <li>Use "Force Sign Out" to completely clear all authentication data</li>
            </ul>
          </div>
        </div>
        
        <div className="card glow p-8">
          <h2 className="text-xl font-semibold mb-4">Instructions</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-300">
            <li>Click the "Toggle Authentication State" button above</li>
            <li>Notice how the layout switches between the traditional navbar and the Discord-style sidebar</li>
            <li>When authenticated, you should see a sign-out button in the sidebar</li>
            <li>If you're stuck signed in, click "Force Sign Out & Clear All Auth Data"</li>
            <li>Click the "Refresh State" button if the display doesn't update automatically</li>
          </ol>
        </div>
      </div>
    </div>
  );
}