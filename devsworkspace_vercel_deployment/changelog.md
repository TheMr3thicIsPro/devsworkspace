# DevsWorkspace Changelog

## [Unreleased]

### Added
- Initial Next.js project setup with TypeScript and Tailwind CSS
- Global layout with navbar, main content area, and footer
- Dark theme with blue/purple gradient accents
- Landing/Home page with hero section, pillars, and how-it-works
- Explore page with tabs
- Looking For Developers page with job posting form
- Looking For Jobs page with developer availability form
- Projects/Teams page with project creation form
- Marketplace page with asset listings
- School page with teacher application form
- Authentication pages (Login and Signup)
- Profile page with tabs
- User model with complete structure matching Project.md requirements
- Authentication service for handling login/signup
- Role-based user system with multi-select roles
- Experience level system
- User goals system
- Availability status tracking
- Onboarding flow with multi-step wizard
- Social feed page for logged-in users
- Post creation functionality in feed
- User profile sidebar in feed
- Trending topics section in feed
- Redirect pages for /login and /signup to fix routing issues
- Discord-style sidebar layout for authenticated users
- Conditional layout switching based on authentication status
- Layout test page for demonstrating layout switching
- Sign-out functionality in sidebar layout
- User information display in test page
- Manual refresh capability for authentication state
- Force sign-out and clear all auth data functionality
- Persistent authentication using localStorage
- Social hub with Chats, Friends, and Community sections

### Fixed
- Text visibility issues on home page and navbar
- Updated home page description text
- Corrected budget filter behavior (removed budget filter from "Looking For Jobs" page)
- Fixed authentication routing issues by adding redirect pages
- Fixed Navbar links to point to correct authentication routes
- Fixed layout switching mechanism to properly show/hide navbar and sidebar
- Fixed authentication state detection and persistence
- Fixed constant sign-in issue by adding proper authentication clearing
- Fixed hardcoded profile data to use dynamic user information
- Fixed profile page to properly display authenticated user data
- Fixed scrolling issue in sidebar layout by changing overflow-hidden to overflow-auto

### Changed
- Updated project description on home page
- Restructured "Looking For Jobs" form to remove budget filter
- Updated "Looking For Developers" budget range to use minimum and maximum number inputs instead of predefined ranges
- Changed gradient effect in hero section to text shadow outline for better text wrapping
- Removed mouse trail effect due to performance issues
- Replaced dashboard mockup with Vanta.js NET visualization in hero section
- Updated Unicorn Studio initialization script for better compatibility
- Replaced Unicorn Studio with Vanta.js for improved performance
- Fixed Vanta.js initialization to prevent disappearing effect
- Updated Vanta.js to cover entire homepage background with content overlay
- Enhanced mobile responsiveness for homepage layout
- Removed unnecessary test file to reduce deployment size
- Organized project files into needed/not_needed directories for Cloudflare deployment
- Added Cloudflare deployment configuration and documentation for wrangler deploy
- Optimized Next.js configuration for Cloudflare deployment to reduce file count
- Added Cloudflare Pages deployment option to work around file limit issues
- Created additional configuration files for both Workers and Pages deployment
- Provided comprehensive deployment documentation and options to handle file limit constraint
- Replaced "Login" text in Navbar with profile icon for better UX
- Implemented conditional layout system with Discord-style sidebar for authenticated users
- Improved authentication state detection and handling
- Refactored layout architecture to properly switch between navbar and sidebar layouts
- Enhanced authentication service with localStorage persistence and clearing capabilities
- Updated profile page to dynamically display user information
- Fixed scrolling behavior in authenticated layout
- Replaced generic "Explore" tab with focused "Social" hub
- Kept traditional navbar on home page for consistent aesthetic