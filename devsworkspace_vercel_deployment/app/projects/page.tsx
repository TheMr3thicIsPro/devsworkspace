'use client';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-accent-gradient">
            Projects & Teams
          </h1>
          <button className="bg-accent-gradient text-white px-6 py-2 rounded-full font-semibold hover:glow transition-all">
            Create Project
          </button>
        </div>
        
        <div className="card glow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Start a New Project</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Project Name</label>
              <input 
                type="text" 
                className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue"
                placeholder="Enter project name"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Description</label>
              <textarea 
                className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue"
                rows={3}
                placeholder="Briefly describe your project"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">Project Type</label>
                <select className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue">
                  <option>Team Collaboration</option>
                  <option>Client Project</option>
                  <option>Personal Project</option>
                  <option>Open Source</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Visibility</label>
                <select className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue">
                  <option>Private</option>
                  <option>Team Only</option>
                  <option>Public</option>
                </select>
              </div>
            </div>
            <button 
              type="submit"
              className="bg-accent-gradient text-white px-6 py-2 rounded-full font-semibold hover:glow transition-all"
            >
              Create Project
            </button>
          </form>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Active Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card glow p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Game Development Project</h3>
                <span className="bg-green-900 text-green-200 px-2 py-1 rounded text-sm">Active</span>
              </div>
              <p className="text-gray-300 mb-4">
                Developing a 2D platformer game using Unity. Looking for artists and sound designers to join our team.
              </p>
              <div className="flex items-center mb-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((avatar) => (
                    <div key={avatar} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-background"></div>
                  ))}
                </div>
                <span className="ml-2 text-gray-400 text-sm">4 team members</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-400 text-sm">Progress</span>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                    <div className="bg-accent-gradient h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
                <span className="text-neon-blue font-semibold">65%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}