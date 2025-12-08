'use client';

export default function ChatsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="card glow p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Chats</h1>
              <p className="text-gray-400">Direct messages with clients and developers</p>
            </div>
            <button className="bg-accent-gradient text-white px-4 py-2 rounded-lg font-semibold hover:glow transition-all">
              New Chat
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chat List */}
            <div className="lg:col-span-1">
              <div className="card glow p-4 h-full">
                <h2 className="text-xl font-bold mb-4">Conversations</h2>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((chat) => (
                    <div key={chat} className="flex items-center p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
                      <div className="bg-gray-700 w-12 h-12 rounded-full mr-3"></div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold truncate">User {chat}</p>
                        <p className="text-gray-400 text-sm truncate">Last message preview...</p>
                      </div>
                      <div className="text-xs text-gray-500">2h</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Chat Window */}
            <div className="lg:col-span-2">
              <div className="card glow p-4 h-full flex flex-col">
                <div className="flex items-center p-3 border-b border-gray-800">
                  <div className="bg-gray-700 w-10 h-10 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Selected User</p>
                    <p className="text-gray-400 text-sm">Online</p>
                  </div>
                </div>
                
                <div className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex justify-end">
                      <div className="bg-accent-gradient text-white p-3 rounded-lg max-w-xs lg:max-w-md">
                        Hello! How is the project coming along?
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gray-800 text-foreground p-3 rounded-lg max-w-xs lg:max-w-md">
                        It's going well! I've completed the frontend components.
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-accent-gradient text-white p-3 rounded-lg max-w-xs lg:max-w-md">
                        That's great! When can we schedule the next review?
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 border-t border-gray-800">
                  <div className="flex">
                    <input 
                      type="text" 
                      placeholder="Type a message..." 
                      className="flex-1 bg-background-secondary border border-gray-700 rounded-l-lg px-4 py-2 focus:outline-none focus:border-neon-blue"
                    />
                    <button className="bg-accent-gradient text-white px-6 py-2 rounded-r-lg font-semibold hover:glow transition-all">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}