'use client';

import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    VANTA: any;
  }
}

export default function Home() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dynamically load Vanta.js scripts
    const loadVanta = async () => {
      // Wait for the component to mount
      await new Promise(resolve => setTimeout(resolve, 100));
      
      if (!vantaRef.current) return;
      
      try {
        // Load Three.js first
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
        
        // Then load Vanta.js
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.net.min.js');
        
        // Initialize Vanta.js NET effect
        if (window.VANTA && window.VANTA.NET && !vantaEffect.current && vantaRef.current) {
          vantaEffect.current = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.50, // Increased scale for mobile devices
            color: 0x693fff,
            backgroundColor: 0x050509,
            points: 15, // Increased number of points for denser pattern
            maxDistance: 25, // Reduced max distance between points for denser pattern
            spacing: 20 // Reduced spacing for denser pattern
          });
          
          // Ensure the loading screen shows for at least 1 second
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }
      } catch (error) {
        console.error('Failed to load Vanta.js:', error);
        // Hide loading screen even if there's an error
        setIsLoading(false);
      }
    };

    // Helper function to load scripts
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve(undefined);
          return;
        }
        
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve(undefined);
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    loadVanta();

    // Cleanup function
    return () => {
      if (vantaEffect.current && vantaEffect.current.destroy) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  useEffect(() => {
    // Update Vanta.js on window resize
    const handleResize = () => {
      if (vantaEffect.current) {
        vantaEffect.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen text-foreground relative overflow-hidden">
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
          <div className="text-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-neon-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-neon-purple border-b-transparent rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Loading DevsWorkspace</h2>
            <p className="text-gray-400">Preparing your creative environment...</p>
          </div>
        </div>
      )}
      
      <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full z-0"></div>
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center py-20 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white bg-clip-text bg-accent-gradient" style={{ textShadow: '0 0 10px rgba(0, 102, 255, 0.5), 0 0 20px rgba(128, 0, 255, 0.5)' }}>
                Build More. Learn More. Earn More.
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl" style={{ textShadow: '0 0 5px rgba(0, 102, 255, 0.3)' }}>
                DevsWorkspace is the modern hub where developers and creators find paid projects, build collaborative teams, launch products, sell assets, and grow inside a community engineered for innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="/signup" 
                  className="bg-accent-gradient text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:glow transition-all text-center"
                >
                  Get Started
                </a>
                <a 
                  href="/explore" 
                  className="border border-neon-blue text-neon-blue px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-neon-blue hover:text-background transition-all text-center"
                >
                  Explore DevsWorkspace →
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              {/* Right side content can go here if needed */}
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-16 px-4 bg-background-secondary">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card glow p-6 hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-3 text-neon-blue">Find Developers</h3>
                <p className="text-gray-300">Clients post what they need and hire verified devs/creatives.</p>
              </div>
              <div className="card glow p-6 hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-3 text-neon-blue">Find Jobs</h3>
                <p className="text-gray-300">Developers browse paid opportunities that match their skills.</p>
              </div>
              <div className="card glow p-6 hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-3 text-neon-blue">Build Teams</h3>
                <p className="text-gray-300">Full studio-style project rooms for multi-role teams.</p>
              </div>
              <div className="card glow p-6 hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-3 text-neon-blue">Sell Assets & Templates</h3>
                <p className="text-gray-300">Asset + template marketplace with 10% platform fee.</p>
              </div>
              <div className="card glow p-6 hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-3 text-neon-blue">Social Feed for Creators</h3>
                <p className="text-gray-300">Devlogs, progress posts, questions, ideas, showcases.</p>
              </div>
              <div className="card glow p-6 hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-3 text-neon-blue">Explore Community Projects</h3>
                <p className="text-gray-300">Browse in-progress games, websites, and teams recruiting.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* For Clients */}
              <div className="card p-8 border neon-border">
                <h3 className="text-2xl font-bold mb-6 text-neon-blue">For Clients</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-accent-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</div>
                    <span>Post what you need (guided job form with skills, budget, references).</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</div>
                    <span>Review matching developers (roles, skills, portfolio, reviews).</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</div>
                    <span>Collaborate in a Studio Workroom (chat, milestones, tasks, files, updates).</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</div>
                    <span>Approve work and release payment through secure payment protection.</span>
                  </li>
                </ul>
              </div>

              {/* For Developers */}
              <div className="card p-8 border neon-border">
                <h3 className="text-2xl font-bold mb-6 text-neon-purple">For Developers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-accent-purple rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</div>
                    <span>Create profile (roles, skills, tools, experience level, portfolio).</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-purple rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</div>
                    <span>Browse jobs matched to your skills and tools.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-purple rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</div>
                    <span>Get hired and work inside Studio Workrooms (tasks, files, feedback, milestones).</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-purple rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</div>
                    <span>Get paid securely and receive reviews for your work.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}