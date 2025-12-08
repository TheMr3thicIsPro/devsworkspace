'use client';

export default function FriendsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="card glow p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Friends</h1>
              <p className="text-gray-400">Manage your network of developers and collaborators</p>
            </div>
            <button className="bg-accent-gradient text-white px-4 py-2 rounded-lg font-semibold hover:glow transition-all">
              Add Friend
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((friend) => (
              <div key={friend} className="card glow p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gray-700 w-20 h-20 rounded-full mb-4"></div>
                  <h3 className="text-xl font-bold mb-1">Friend {friend}</h3>
                  <p className="text-neon-blue text-sm mb-3">Web Developer</p>
                  <p className="text-gray-400 text-sm mb-4">Specializing in React and Node.js</p>
                  
                  <div className="flex gap-2">
                    <button className="bg-accent-gradient text-white px-4 py-2 rounded-lg text-sm font-semibold hover:glow transition-all">
                      Message
                    </button>
                    <button className="bg-background-secondary border border-gray-700 text-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all">
                      Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="card glow p-6">
          <h2 className="text-2xl font-bold mb-4">Friend Requests</h2>
          <div className="space-y-4">
            {[1, 2].map((request) => (
              <div key={request} className="flex items-center justify-between p-4 bg-background-secondary rounded-lg">
                <div className="flex items-center">
                  <div className="bg-gray-700 w-12 h-12 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">User Request {request}</p>
                    <p className="text-gray-400 text-sm">Sent 2 days ago</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-all">
                    Accept
                  </button>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-all">
                    Decline
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