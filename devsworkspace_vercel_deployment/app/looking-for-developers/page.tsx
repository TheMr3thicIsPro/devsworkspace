'use client';

export default function LookingForDevelopersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-accent-gradient">
            Hire Developers
          </h1>
          <button className="bg-accent-gradient text-white px-6 py-2 rounded-full font-semibold hover:glow transition-all">
            Post a Project
          </button>
        </div>
        
        <div className="card glow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Post a New Project</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Project Title</label>
              <input 
                type="text" 
                className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue"
                placeholder="Enter project title"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Description</label>
              <textarea 
                className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue"
                rows={4}
                placeholder="Describe your project in detail"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Category</label>
              <select className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue">
                <option>Web Development</option>
                <option>Game Development</option>
                <option>UI/UX Design</option>
                <option>Mobile App</option>
                <option>Other</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">Minimum Budget ($)</label>
                <input 
                  type="number" 
                  className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue"
                  placeholder="0"
                  min="0"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Maximum Budget ($)</label>
                <input 
                  type="number" 
                  className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue"
                  placeholder="10000"
                  min="0"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Required Skills</label>
              <input 
                type="text" 
                className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue"
                placeholder="e.g. React, Node.js, UI Design"
              />
            </div>
            <button 
              type="submit"
              className="bg-accent-gradient text-white px-6 py-2 rounded-full font-semibold hover:glow transition-all"
            >
              Post Project
            </button>
          </form>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Open Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card glow p-6">
              <h3 className="text-xl font-bold mb-2">Web Application Development</h3>
              <p className="text-gray-300 mb-4">
                Looking for a skilled React developer to build a dashboard application with real-time data visualization.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-900 text-blue-200 px-2 py-1 rounded text-sm">React</span>
                <span className="bg-purple-900 text-purple-200 px-2 py-1 rounded text-sm">Node.js</span>
                <span className="bg-green-900 text-green-200 px-2 py-1 rounded text-sm">MongoDB</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neon-blue font-semibold">$2,500 - $4,000</span>
                <span className="text-gray-400 text-sm">Posted 2 days ago</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}