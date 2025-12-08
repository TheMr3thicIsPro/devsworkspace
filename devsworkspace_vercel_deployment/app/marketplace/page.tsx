'use client';

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-accent-gradient">
            Marketplace
          </h1>
          <button className="bg-accent-gradient text-white px-6 py-2 rounded-full font-semibold hover:glow transition-all">
            Upload Asset
          </button>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="px-4 py-2 rounded-full bg-accent-gradient text-white">
            All Categories
          </button>
          <button className="px-4 py-2 rounded-full bg-background-secondary text-gray-300 hover:text-white">
            UI Kits
          </button>
          <button className="px-4 py-2 rounded-full bg-background-secondary text-gray-300 hover:text-white">
            3D Models
          </button>
          <button className="px-4 py-2 rounded-full bg-background-secondary text-gray-300 hover:text-white">
            Game Assets
          </button>
          <button className="px-4 py-2 rounded-full bg-background-secondary text-gray-300 hover:text-white">
            Templates
          </button>
          <button className="px-4 py-2 rounded-full bg-background-secondary text-gray-300 hover:text-white">
          Plugins
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="card glow overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">Premium UI Kit {item}</h3>
                  <span className="text-neon-blue font-bold">$29</span>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  A modern UI kit with components for dashboards and web applications.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-700 mr-2"></div>
                    <span className="text-gray-400 text-sm">Creator{item}</span>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <span>★</span>
                    <span className="text-gray-400 text-sm ml-1">4.{item}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}