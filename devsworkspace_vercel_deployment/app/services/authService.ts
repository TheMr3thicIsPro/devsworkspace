// Authentication service for DevsWorkspace platform
import { User } from '../models/User';

class AuthService {
  private currentUser: User | null = null;

  constructor() {
    // Check if there's a saved user in localStorage/sessionStorage on initialization
    if (typeof window !== 'undefined') {
      try {
        const savedUser = localStorage.getItem('devsworkspace_user');
        if (savedUser) {
          this.currentUser = JSON.parse(savedUser);
        }
      } catch (e) {
        console.error('Failed to parse saved user data:', e);
      }
    }
  }

  // Simulate user login
  async login(email: string, password: string): Promise<User | null> {
    // In a real implementation, this would call an API
    // For now, we'll simulate a successful login
    
    // Mock user data
    const mockUser: User = {
      id: 'user-123',
      username: 'johndoe',
      email: email,
      firstName: 'John',
      lastName: 'Doe',
      bio: 'Full-stack developer passionate about creating amazing web experiences',
      timezone: 'UTC-5',
      languages: ['English', 'Spanish'],
      joinDate: new Date(),
      isDeveloper: true,
      roles: ['Web Developer', 'UI/UX Designer'],
      skills: ['React', 'TypeScript', 'Node.js', 'UI/UX Design'],
      experienceLevel: 'Experienced',
      goals: ['find work', 'collaborate', 'learn'],
      portfolioItems: [],
      reviews: [],
      projectsPosted: [],
      projectsWorkedOn: [],
      isVerified: false,
      lastActive: new Date(),
      availabilityStatus: 'open to work'
    };

    this.currentUser = mockUser;
    
    // Save to localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('devsworkspace_user', JSON.stringify(mockUser));
    }
    
    return mockUser;
  }

  // Simulate user signup
  async signup(userData: Partial<User>, password: string): Promise<User | null> {
    // In a real implementation, this would call an API
    // For now, we'll simulate a successful signup
    
    const newUser: User = {
      id: `user-${Date.now()}`,
      username: userData.username || '',
      email: userData.email || '',
      firstName: userData.firstName || '',
      lastName: userData.lastName || '',
      bio: userData.bio || '',
      timezone: userData.timezone || '',
      languages: userData.languages || [],
      joinDate: new Date(),
      isDeveloper: userData.isDeveloper || false,
      roles: userData.roles || [],
      skills: userData.skills || [],
      experienceLevel: userData.experienceLevel || 'Beginner',
      goals: userData.goals || [],
      portfolioItems: [],
      reviews: [],
      projectsPosted: [],
      projectsWorkedOn: [],
      isVerified: false,
      lastActive: new Date(),
      availabilityStatus: 'not available'
    };

    this.currentUser = newUser;
    
    // Save to localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('devsworkspace_user', JSON.stringify(newUser));
    }
    
    return newUser;
  }

  // Get current logged in user
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  // Logout user
  logout(): void {
    this.currentUser = null;
    
    // Remove from localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('devsworkspace_user');
    }
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
  
  // Method to simulate authentication for testing
  setAuthenticated(isAuthenticated: boolean): void {
    if (isAuthenticated) {
      // Create a mock user
      const mockUser: User = {
        id: 'user-123',
        username: 'johndoe',
        email: 'john@example.com',
        firstName: 'John',
        lastName: 'Doe',
        bio: 'Full-stack developer passionate about creating amazing web experiences',
        timezone: 'UTC-5',
        languages: ['English', 'Spanish'],
        joinDate: new Date(),
        isDeveloper: true,
        roles: ['Web Developer', 'UI/UX Designer'],
        skills: ['React', 'TypeScript', 'Node.js', 'UI/UX Design'],
        experienceLevel: 'Experienced',
        goals: ['find work', 'collaborate', 'learn'],
        portfolioItems: [],
        reviews: [],
        projectsPosted: [],
        projectsWorkedOn: [],
        isVerified: false,
        lastActive: new Date(),
        availabilityStatus: 'open to work'
      };
      
      this.currentUser = mockUser;
      
      // Save to localStorage for persistence
      if (typeof window !== 'undefined') {
        localStorage.setItem('devsworkspace_user', JSON.stringify(mockUser));
      }
    } else {
      this.currentUser = null;
      
      // Remove from localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('devsworkspace_user');
      }
    }
  }
  
  // Force clear all authentication data
  clearAllAuthData(): void {
    this.currentUser = null;
    
    // Remove from localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('devsworkspace_user');
    }
    
    // Also clear any other potential storage mechanisms
    if (typeof window !== 'undefined') {
      sessionStorage.clear();
    }
  }
}

// Export singleton instance
export const authService = new AuthService();