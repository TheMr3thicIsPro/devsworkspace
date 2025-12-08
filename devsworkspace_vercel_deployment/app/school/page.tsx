'use client';

export default function SchoolPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-accent-gradient">
            DevsWorkspace School
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Coming Soon: Learn from industry experts and advance your skills in coding, design, game development, and more.
          </p>
          
          <div className="max-w-2xl mx-auto card glow p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Apply to be a Teacher</h2>
            <p className="text-gray-300 mb-6">
              Are you an experienced developer, designer, or creative professional? Help shape the next generation of creators by teaching on DevsWorkspace.
            </p>
            
            <form className="text-left space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Skills You Want to Teach</label>
                <textarea 
                  className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue"
                  rows={3}
                  placeholder="List the skills, technologies, or subjects you'd like to teach"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Experience</label>
                <textarea 
                  className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue"
                  rows={3}
                  placeholder="Tell us about your professional experience and teaching background"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Links to Your Work</label>
                <input 
                  type="text" 
                  className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-blue"
                  placeholder="Portfolio, GitHub, website, or other relevant links"
                />
              </div>
              
              <button 
                type="submit"
                className="bg-accent-gradient text-white px-6 py-3 rounded-full font-semibold hover:glow transition-all w-full"
              >
                Submit Application
              </button>
            </form>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card glow p-6">
              <h3 className="text-xl font-bold mb-3 text-neon-blue">Coding Courses</h3>
              <p className="text-gray-300">
                From beginner programming to advanced algorithms and frameworks.
              </p>
            </div>
            <div className="card glow p-6">
              <h3 className="text-xl font-bold mb-3 text-neon-blue">Design Masterclasses</h3>
              <p className="text-gray-300">
                UI/UX, graphic design, 3D modeling, and visual storytelling.
              </p>
            </div>
            <div className="card glow p-6">
              <h3 className="text-xl font-bold mb-3 text-neon-blue">Creative Business</h3>
              <p className="text-gray-300">
                Freelancing, entrepreneurship, and building creative careers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}