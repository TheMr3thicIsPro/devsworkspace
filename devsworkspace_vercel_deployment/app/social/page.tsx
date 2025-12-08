'use client';

import Link from 'next/link';

export default function SocialPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="card glow p-6 mb-8">
          <h1 className="text-3xl font-bold mb-2">Social Hub</h1>
          <p className="text-gray-400 mb-6">Connect with developers, collaborate on projects, and stay updated with the community.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Chats Card */}
            <Link href="/social/chats" className="card glow p-6 hover:bg-background-secondary transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold">Chats</h2>
              </div>
              <p className="text-gray-300 mb-4">Direct messages with clients and developers. Private conversations for your projects.</p>
              <div className="text-neon-blue text-sm font-semibold">Access your chats →</div>
            </Link>
            
            {/* Friends Card */}
            <Link href="/social/friends" className="card glow p-6 hover:bg-background-secondary transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold">Friends</h2>
              </div>
              <p className="text-gray-300 mb-4">Add friends, view your connections, and manage your network of developers and collaborators.</p>
              <div className="text-neon-blue text-sm font-semibold">Manage friends →</div>
            </Link>
            
            {/* Community Card */}
            <Link href="/social/community" className="card glow p-6 hover:bg-background-secondary transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold">Community</h2>
              </div>
              <p className="text-gray-300 mb-4">Share updates, ask for help, discuss projects, and engage with the developer community.</p>
              <div className="text-neon-blue text-sm font-semibold">Join discussions →</div>
            </Link>
          </div>
        </div>
        
        <div className="card glow p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start p-4 bg-background-secondary rounded-lg">
                <div className="bg-gray-700 w-10 h-10 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">User {item} posted an update</p>
                  <p className="text-gray-400 text-sm">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}