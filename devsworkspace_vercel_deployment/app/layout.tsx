import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthLayoutWrapper from "./components/AuthLayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevsWorkspace",
  description: "All-in-one platform for developers, designers, and creators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <AuthLayoutWrapper>
          {children}
        </AuthLayoutWrapper>
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <nav className="bg-background-secondary border-b border-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-white">
          DevsWorkspace
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-neon-blue transition-colors">Home</a>
          <a href="/explore" className="hover:text-neon-blue transition-colors">Explore</a>
          <a href="/looking-for-developers" className="hover:text-neon-blue transition-colors">Hire Developers</a>
          <a href="/looking-for-jobs" className="hover:text-neon-blue transition-colors">Find Jobs</a>
          <a href="/projects" className="hover:text-neon-blue transition-colors">Projects</a>
          <a href="/marketplace" className="hover:text-neon-blue transition-colors">Marketplace</a>
          <a href="/school" className="hover:text-neon-blue transition-colors">School</a>
        </div>
        <div>
          {/* Profile icon button */}
          <a href="/profile" className="bg-accent-gradient text-white w-10 h-10 rounded-full flex items-center justify-center hover:glow transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-gray-800 p-6 mt-12">
      <div className="container mx-auto text-center text-gray-400">
        <p>© {new Date().getFullYear()} DevsWorkspace. All rights reserved.</p>
      </div>
    </footer>
  );
}