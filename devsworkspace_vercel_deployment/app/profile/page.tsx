'use client';

import { useEffect, useState } from 'react';
import { authService } from '../services/authService';
import { User } from '../models/User';

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the current user from the auth service
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground py-8 flex items-center justify-center">
        <div className="text-white">Loading profile...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background text-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="card glow p-6 mb-8">
            <h1 className="text-2xl font-bold mb-4">Profile Not Found</h1>
            <p className="text-gray-300 mb-4">
              You need to be logged in to view your profile.
            </p>
            <a 
              href="/auth/login" 
              className="bg-accent-gradient text-white px-4 py-2 rounded-full text-sm font-semibold hover:glow transition-all inline-block"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="card glow p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="w-24 h-24 rounded-full bg-gray-700 mb-4 md:mb-0 md:mr-6 flex items-center justify-center">
              <span className="text-2xl font-bold">
                {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
              </span>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">{user.firstName} {user.lastName}</h1>
              <p className="text-neon-blue mb-2">
                {user.roles && user.roles.length > 0 ? user.roles.join(', ') : 'Developer'}
              </p>
              <p className="text-gray-300 mb-4">
                {user.bio || 'No bio available.'}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {user.skills && user.skills.slice(0, 4).map((skill, index) => (
                  <span key={index} className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button className="bg-accent-gradient text-white px-4 py-2 rounded-full text-sm font-semibold hover:glow transition-all">
                  Hire Me
                </button>
                <button className="border border-neon-blue text-neon-blue px-4 py-2 rounded-full text-sm font-semibold hover:bg-neon-blue hover:text-background transition-all">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex overflow-x-auto gap-4 mb-8 pb-2">
          <button className="px-4 py-2 rounded-full bg-accent-gradient text-white whitespace-nowrap">
            Overview
          </button>
          <button className="px-4 py-2 rounded-full bg-background-secondary text-gray-300 hover:text-white whitespace-nowrap">
            Portfolio
          </button>
          <button className="px-4 py-2 rounded-full bg-background-secondary text-gray-300 hover:text-white whitespace-nowrap">
            Projects
          </button>
          <button className="px-4 py-2 rounded-full bg-background-secondary text-gray-300 hover:text-white whitespace-nowrap">
            Reviews
          </button>
          <button className="px-4 py-2 rounded-full bg-background-secondary text-gray-300 hover:text-white whitespace-nowrap">
            Posts
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card glow p-6">
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-300 mb-4">
              {user.bio || 'No bio available.'}
            </p>
            <div className="text-gray-300">
              <p><strong>Member since:</strong> {user.joinDate ? new Date(user.joinDate).toLocaleDateString() : 'Unknown'}</p>
              <p><strong>Location:</strong> {user.location || 'Not specified'}</p>
              <p><strong>Languages:</strong> {user.languages && user.languages.length > 0 ? user.languages.join(', ') : 'Not specified'}</p>
            </div>
          </div>
          
          <div className="card glow p-6">
            <h3 className="text-xl font-bold mb-4">Skills & Tools</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold mb-1">Skills</h4>
                <p className="text-gray-300 text-sm">
                  {user.skills && user.skills.length > 0 ? user.skills.join(', ') : 'No skills specified'}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Experience Level</h4>
                <p className="text-gray-300 text-sm">
                  {user.experienceLevel || 'Not specified'}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Availability</h4>
                <p className="text-gray-300 text-sm">
                  {user.availabilityStatus || 'Not specified'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="card glow p-6">
            <h3 className="text-xl font-bold mb-4">Stats</h3>
            <div className="space-y-4">
              <div>
                <p className="text-2xl font-bold text-neon-blue">
                  {user.projectsPosted ? user.projectsPosted.length : 0}
                </p>
                <p className="text-gray-300">Projects Posted</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-neon-blue">
                  {user.projectsWorkedOn ? user.projectsWorkedOn.length : 0}
                </p>
                <p className="text-gray-300">Projects Worked On</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-neon-blue">
                  {user.reviews ? user.reviews.length : 0}
                </p>
                <p className="text-gray-300">Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}