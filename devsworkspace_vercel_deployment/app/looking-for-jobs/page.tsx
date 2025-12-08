'use client';

export default function LookingForJobsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-accent-gradient">
            Find Jobs
          </h1>
          <button className="bg-accent-gradient text-white px-6 py-2 rounded-full font-semibold hover:glow transition-all">
            Post Availability
          </button>
        </div>
        
        <div className="card glow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Advertise Your Services</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Headline</label>
              <input 
                type="text" 
                className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue"
                placeholder="e.g. Full-Stack Developer Available for Freelance Work"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Description</label>
              <textarea 
                className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue"
                rows={4}
                placeholder="Tell clients about your skills, experience, and what kind of work you're looking for"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Your Roles</label>
              <select className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue">
                <option>Web Developer</option>
                <option>UI/UX Designer</option>
                <option>Game Developer</option>
                <option>Mobile Developer</option>
                <option>Full-Stack Developer</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Skills & Tools</label>
              <input 
                type="text" 
                className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue"
                placeholder="e.g. React, Node.js, Figma, AWS"
              />
            </div>
            <button 
              type="submit"
              className="bg-accent-gradient text-white px-6 py-2 rounded-full font-semibold hover:glow transition-all"
            >
              Post Availability
            </button>
          </form>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Available Developers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card glow p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-700 mr-3"></div>
                <div>
                  <h3 className="font-bold">Alex Johnson</h3>
                  <p className="text-sm text-gray-400">Senior Web Developer</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Full-stack developer with 8 years of experience in React, Node.js, and cloud technologies. Available for freelance projects.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-900 text-blue-200 px-2 py-1 rounded text-sm">React</span>
                <span className="bg-purple-900 text-purple-200 px-2 py-1 rounded text-sm">Node.js</span>
                <span className="bg-green-900 text-green-200 px-2 py-1 rounded text-sm">AWS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neon-blue font-semibold">$50 - $80/hr</span>
                <span className="text-gray-400 text-sm">Available now</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}