'use client';

import { useState } from 'react';
import { authService } from '../services/authService';

export default function FeedPage() {
  const user = authService.getCurrentUser();
  const [postContent, setPostContent] = useState('');

  // Mock posts data
  const mockPosts = [
    {
      id: '1',
      author: {
        name: 'Alex Johnson',
        avatar: '',
        role: 'Web Developer'
      },
      content: 'Just finished building a new React component library for our project. The team is loving the new design system!',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 5
    },
    {
      id: '2',
      author: {
        name: 'Sarah Chen',
        avatar: '',
        role: 'UI/UX Designer'
      },
      content: 'Working on a new dashboard design for a fintech client. Really excited about the dark mode implementation!',
      timestamp: '4 hours ago',
      likes: 42,
      comments: 8
    },
    {
      id: '3',
      author: {
        name: 'Marcus Williams',
        avatar: '',
        role: 'Game Developer'
      },
      content: 'Just released the beta version of our indie puzzle game. Would love feedback from fellow developers!',
      timestamp: '1 day ago',
      likes: 87,
      comments: 12
    }
  ];

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (postContent.trim()) {
      // In a real app, this would submit to an API
      alert('Post submitted! In a real application, this would be sent to the server.');
      setPostContent('');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main feed */}
          <div className="lg:col-span-3">
            {/* Create post card */}
            <div className="card glow p-6 mb-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
                  <span className="text-gray-400">👤</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{user ? `${user.firstName} ${user.lastName}` : 'Developer'}</h3>
                  <p className="text-sm text-gray-400">Share something with the community...</p>
                </div>
              </div>
              
              <form onSubmit={handlePostSubmit}>
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue mb-4"
                  rows={3}
                  placeholder="What's on your mind?"
                />
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4 text-gray-400">
                    <button type="button" className="flex items-center hover:text-neon-blue transition-colors">
                      <span className="mr-2">📷</span> Photo
                    </button>
                    <button type="button" className="flex items-center hover:text-neon-blue transition-colors">
                      <span className="mr-2">📎</span> Attachment
                    </button>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={!postContent.trim()}
                    className="px-6 py-2 bg-accent-gradient text-white rounded-lg font-semibold hover:glow transition-all disabled:opacity-50"
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
            
            {/* Posts feed */}
            <div className="space-y-6">
              {mockPosts.map((post) => (
                <div key={post.id} className="card glow p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
                      <span className="text-gray-400">👤</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{post.author.name}</h3>
                      <p className="text-sm text-gray-400">{post.author.role} • {post.timestamp}</p>
                    </div>
                  </div>
                  
                  <p className="mb-4">{post.content}</p>
                  
                  <div className="flex space-x-6 text-gray-400">
                    <button className="flex items-center hover:text-neon-blue transition-colors">
                      <span className="mr-2">👍</span> Like ({post.likes})
                    </button>
                    <button className="flex items-center hover:text-neon-blue transition-colors">
                      <span className="mr-2">💬</span> Comment ({post.comments})
                    </button>
                    <button className="flex items-center hover:text-neon-blue transition-colors">
                      <span className="mr-2">↗️</span> Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* User profile card */}
            {user && (
              <div className="card glow p-6 mb-6">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center mx-auto mb-4">
                    <span className="text-gray-400 text-2xl">👤</span>
                  </div>
                  <h3 className="font-bold text-lg">{user.firstName} {user.lastName}</h3>
                  <p className="text-gray-400 text-sm mb-4">@{user.username}</p>
                  
                  <div className="flex justify-center space-x-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold">24</div>
                      <div className="text-gray-400">Posts</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold">142</div>
                      <div className="text-gray-400">Following</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold">87</div>
                      <div className="text-gray-400">Followers</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Trending topics */}
            <div className="card glow p-6">
              <h3 className="font-bold text-lg mb-4">Trending Topics</h3>
              <div className="space-y-3">
                <div className="p-3 bg-background-secondary rounded-lg">
                  <p className="font-medium">#NextJS</p>
                  <p className="text-sm text-gray-400">1,245 posts</p>
                </div>
                <div className="p-3 bg-background-secondary rounded-lg">
                  <p className="font-medium">#WebDevelopment</p>
                  <p className="text-sm text-gray-400">892 posts</p>
                </div>
                <div className="p-3 bg-background-secondary rounded-lg">
                  <p className="font-medium">#UIUX</p>
                  <p className="text-sm text-gray-400">756 posts</p>
                </div>
                <div className="p-3 bg-background-secondary rounded-lg">
                  <p className="font-medium">#IndieGames</p>
                  <p className="text-sm text-gray-400">623 posts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}