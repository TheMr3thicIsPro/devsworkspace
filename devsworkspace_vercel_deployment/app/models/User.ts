// User model for DevsWorkspace platform
export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  bio?: string;
  location?: string;
  timezone?: string;
  languages: string[];
  joinDate: Date;
  isDeveloper: boolean;
  roles: UserRole[]; // Multi-select roles as specified in Project.md
  skills: string[]; // Skills and tools
  experienceLevel: ExperienceLevel; // Experience level
  goals: UserGoal[]; // Goals from onboarding
  portfolioItems: PortfolioItem[];
  reviews: Review[];
  projectsPosted: Project[];
  projectsWorkedOn: Project[];
  isVerified: boolean;
  lastActive: Date;
  availabilityStatus: AvailabilityStatus; // Availability status
}

// Roles as specified in Project.md
export type UserRole = 
  | 'AI Coder'
  | 'Traditional/Handcrafted Coder'
  | 'Web Developer'
  | 'Game Developer'
  | 'UI/UX Designer'
  | 'Graphic Designer'
  | 'Logo Artist'
  | '3D Artist / Modeler'
  | 'Animator'
  | 'VFX Artist'
  | 'Sound FX / Music Producer'
  | 'Writer'
  | 'Tester'
  | 'Marketing Specialist'
  | 'Project Manager'
  | 'Teacher / Mentor';

// Experience levels as specified in Project.md
export type ExperienceLevel = 
  | 'Beginner'
  | 'Intermediate'
  | 'Experienced'
  | 'Professional'
  | 'Expert';

// User goals as specified in Project.md
export type UserGoal = 
  | 'find work'
  | 'hire devs'
  | 'build team'
  | 'collaborate'
  | 'learn'
  | 'teach';

// Availability status
export type AvailabilityStatus = 
  | 'open to work'
  | 'busy'
  | 'not available'
  | 'available for contracts';

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  projectUrl?: string;
  dateAdded: Date;
  skillsUsed: string[]; // Skills used in this portfolio item
}

export interface Review {
  id: string;
  reviewerId: string;
  reviewerName: string;
  rating: number; // 1-5 stars
  comment: string;
  date: Date;
  categoryId: string; // Category of the review (communication, quality, etc.)
}

export interface Project {
  id: string;
  title: string;
  description: string;
  budgetMin: number;
  budgetMax: number;
  skillsRequired: string[];
  postedDate: Date;
  deadline?: Date;
  status: 'open' | 'in_progress' | 'completed' | 'closed';
  type: ProjectType; // Type of project
  category: ProjectCategory; // Category of project
}

export type ProjectType = 
  | 'one-time'
  | 'milestone'
  | 'team-project'
  | 'looking-for-jobs'
  | 'collaboration-request';

export type ProjectCategory = 
  | 'web-dev'
  | 'game-dev'
  | 'ui-design'
  | 'art'
  | 'sfx'
  | 'marketing'
  | 'ai-coding'
  | 'traditional-coding';