'use client';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="card glow p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Community</h1>
              <p className="text-gray-400">Share updates, ask for help, and engage with the developer community</p>
            </div>
            <button className="bg-accent-gradient text-white px-4 py-2 rounded-lg font-semibold hover:glow transition-all">
              New Post
            </button>
          </div>
          
          {/* Create Post */}
          <div className="card glow p-6 mb-6">
            <div className="flex">
              <div className="bg-gray-700 w-12 h-12 rounded-full mr-4"></div>
              <div className="flex-1">
                <textarea 
                  placeholder="What's happening in your projects today?" 
                  className="w-full bg-background-secondary border border-gray-700 rounded-lg p-4 mb-4 focus:outline-none focus:border-neon-blue resize-none"
                  rows={3}
                ></textarea>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-neon-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-neon-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  <button className="bg-accent-gradient text-white px-6 py-2 rounded-lg font-semibold hover:glow transition-all">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Community Posts */}
          <div className="space-y-6">
            {[1, 2, 3, 4].map((post) => (
              <div key={post} className="card glow p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-gray-700 w-12 h-12 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">Community User {post}</p>
                    <p className="text-gray-400 text-sm">Posted 2 hours ago</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">
                  Just finished working on an exciting new feature for my project! It's a real-time collaboration tool that allows developers to work together seamlessly. Would love to hear your thoughts and feedback!
                </p>
                
                <div className="flex gap-4 mb-4">
                  <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-purple-900 text-purple-200 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-green-900 text-green-200 px-3 py-1 rounded-full text-sm">Collaboration</span>
                </div>
                
                <div className="flex gap-6 pt-4 border-t border-gray-800">
                  <button className="flex items-center text-gray-400 hover:text-neon-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    24
                  </button>
                  <button className="flex items-center text-gray-400 hover:text-neon-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    8
                  </button>
                  <button className="flex items-center text-gray-400 hover:text-neon-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}