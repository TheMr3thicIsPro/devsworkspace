'use client';

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-accent-gradient">
          Explore DevsWorkspace
        </h1>
        
        <div className="flex overflow-x-auto gap-4 mb-8 pb-2">
          <button className="px-4 py-2 rounded-full bg-accent-gradient text-white whitespace-nowrap">
            For You
          </button>
          <button className="px-4 py-2 rounded-full bg-background-secondary text-gray-300 hover:text-white whitespace-nowrap">
            Trending
          </button>
          <button className="px-4 py-2 rounded-full bg-background-secondary text-gray-300 hover:text-white whitespace-nowrap">
            Looking For Developers
          </button>
          <button className="px-4 py-2 rounded-full bg-background-secondary text-gray-300 hover:text-white whitespace-nowrap">
            Looking For Jobs
          </button>
          <button className="px-4 py-2 rounded-full bg-background-secondary text-gray-300 hover:text-white whitespace-nowrap">
            Projects / Teams
          </button>
          <button className="px-4 py-2 rounded-full bg-background-secondary text-gray-300 hover:text-white whitespace-nowrap">
            Showcases
          </button>
          <button className="px-4 py-2 rounded-full bg-background-secondary text-gray-300 hover:text-white whitespace-nowrap">
            Learning / School
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="card glow p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-700 mr-3"></div>
                <div>
                  <h3 className="font-semibold">User {item}</h3>
                  <p className="text-sm text-gray-400">Posted 2 hours ago</p>
                </div>
              </div>
              <p className="mb-4 text-gray-300">
                This is a sample post content to demonstrate the explore page layout. 
                Users will be able to see various posts, projects, and content here.
              </p>
              <div className="flex justify-between text-sm text-gray-400">
                <span>👍 24</span>
                <span>💬 8</span>
                <span>🔄 3</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}