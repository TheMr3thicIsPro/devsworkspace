'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '../services/authService';
import { UserRole, ExperienceLevel, UserGoal } from '../models/User';

export default function OnboardingPage() {
  const router = useRouter();
  const user = authService.getCurrentUser();
  
  // Redirect to login if not authenticated
  if (!user) {
    router.push('/auth/login');
    return null;
  }
  
  // Onboarding steps
  const [step, setStep] = useState(1);
  const totalSteps = 5;
  
  // Form data
  const [formData, setFormData] = useState({
    avatar: '',
    bio: user.bio || '',
    timezone: user.timezone || '',
    languages: user.languages || [],
    roles: user.roles || [],
    skills: user.skills || [],
    experienceLevel: user.experienceLevel || 'Beginner' as ExperienceLevel,
    goals: user.goals || []
  });
  
  // Available options
  const availableRoles: UserRole[] = [
    'AI Coder',
    'Traditional/Handcrafted Coder',
    'Web Developer',
    'Game Developer',
    'UI/UX Designer',
    'Graphic Designer',
    'Logo Artist',
    '3D Artist / Modeler',
    'Animator',
    'VFX Artist',
    'Sound FX / Music Producer',
    'Writer',
    'Tester',
    'Marketing Specialist',
    'Project Manager',
    'Teacher / Mentor'
  ];
  
  const experienceLevels: ExperienceLevel[] = [
    'Beginner',
    'Intermediate',
    'Experienced',
    'Professional',
    'Expert'
  ];
  
  const userGoals: UserGoal[] = [
    'find work',
    'hire devs',
    'build team',
    'collaborate',
    'learn',
    'teach'
  ];
  
  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Save onboarding data and redirect to profile
      router.push('/profile');
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      router.push('/');
    }
  };
  
  const handleRoleToggle = (role: UserRole) => {
    setFormData(prev => {
      const newRoles = prev.roles.includes(role)
        ? prev.roles.filter(r => r !== role)
        : [...prev.roles, role];
      return { ...prev, roles: newRoles };
    });
  };
  
  const handleGoalToggle = (goal: UserGoal) => {
    setFormData(prev => {
      const newGoals = prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal];
      return { ...prev, goals: newGoals };
    });
  };
  
  // Render step content
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Welcome to DevsWorkspace!</h2>
            <p className="text-gray-400 text-center">
              Let's set up your profile so you can get the most out of our platform.
            </p>
            <div className="flex justify-center mt-8">
              <div className="bg-gray-700 border-2 border-dashed rounded-xl w-32 h-32 flex items-center justify-center">
                <span className="text-gray-400">Avatar</span>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Basic Information</h2>
            <div>
              <label className="block text-gray-300 mb-2">Bio</label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
                className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue"
                rows={4}
                placeholder="Tell us about yourself..."
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Timezone</label>
              <select
                value={formData.timezone}
                onChange={(e) => setFormData({...formData, timezone: e.target.value})}
                className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue"
              >
                <option value="">Select your timezone</option>
                <option value="UTC-12">UTC-12</option>
                <option value="UTC-11">UTC-11</option>
                <option value="UTC-10">UTC-10</option>
                <option value="UTC-9">UTC-9</option>
                <option value="UTC-8">UTC-8</option>
                <option value="UTC-7">UTC-7</option>
                <option value="UTC-6">UTC-6</option>
                <option value="UTC-5">UTC-5</option>
                <option value="UTC-4">UTC-4</option>
                <option value="UTC-3">UTC-3</option>
                <option value="UTC-2">UTC-2</option>
                <option value="UTC-1">UTC-1</option>
                <option value="UTC">UTC</option>
                <option value="UTC+1">UTC+1</option>
                <option value="UTC+2">UTC+2</option>
                <option value="UTC+3">UTC+3</option>
                <option value="UTC+4">UTC+4</option>
                <option value="UTC+5">UTC+5</option>
                <option value="UTC+6">UTC+6</option>
                <option value="UTC+7">UTC+7</option>
                <option value="UTC+8">UTC+8</option>
                <option value="UTC+9">UTC+9</option>
                <option value="UTC+10">UTC+10</option>
                <option value="UTC+11">UTC+11</option>
                <option value="UTC+12">UTC+12</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Languages</label>
              <input
                type="text"
                value={formData.languages.join(', ')}
                onChange={(e) => setFormData({...formData, languages: e.target.value.split(',').map(lang => lang.trim())})}
                className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue"
                placeholder="e.g., English, Spanish, French"
              />
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Your Roles</h2>
            <p className="text-gray-400">
              Select all roles that apply to you. You can be both a client and developer.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {availableRoles.map((role) => (
                <div
                  key={role}
                  onClick={() => handleRoleToggle(role)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    formData.roles.includes(role)
                      ? 'border-neon-blue bg-blue-900/20'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded border mr-3 flex items-center justify-center ${
                      formData.roles.includes(role)
                        ? 'bg-neon-blue border-neon-blue'
                        : 'border-gray-500'
                    }`}>
                      {formData.roles.includes(role) && (
                        <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                    </div>
                    <span>{role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Skills & Experience</h2>
            
            <div>
              <label className="block text-gray-300 mb-2">Skills & Tools</label>
              <input
                type="text"
                value={formData.skills.join(', ')}
                onChange={(e) => setFormData({...formData, skills: e.target.value.split(',').map(skill => skill.trim())})}
                className="w-full bg-background-secondary border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue"
                placeholder="e.g., React, TypeScript, Figma, Unity"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Experience Level</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {experienceLevels.map((level) => (
                  <div
                    key={level}
                    onClick={() => setFormData({...formData, experienceLevel: level})}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      formData.experienceLevel === level
                        ? 'border-neon-blue bg-blue-900/20'
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded border mr-3 flex items-center justify-center ${
                        formData.experienceLevel === level
                          ? 'bg-neon-blue border-neon-blue'
                          : 'border-gray-500'
                      }`}>
                        {formData.experienceLevel === level && (
                          <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        )}
                      </div>
                      <span>{level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Your Goals</h2>
            <p className="text-gray-400">
              What do you want to achieve on DevsWorkspace?
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {userGoals.map((goal) => (
                <div
                  key={goal}
                  onClick={() => handleGoalToggle(goal)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    formData.goals.includes(goal)
                      ? 'border-neon-purple bg-purple-900/20'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded border mr-3 flex items-center justify-center ${
                      formData.goals.includes(goal)
                        ? 'bg-neon-purple border-neon-purple'
                        : 'border-gray-500'
                    }`}>
                      {formData.goals.includes(goal) && (
                        <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                    </div>
                    <span className="capitalize">{goal}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Step {step} of {totalSteps}</span>
            <span className="text-sm text-gray-400">{Math.round((step / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent-gradient rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {/* Step content */}
        <div className="card glow p-8">
          {renderStep()}
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              className="px-6 py-3 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
            >
              {step === 1 ? 'Skip for now' : 'Back'}
            </button>
            
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-accent-gradient text-white rounded-lg font-semibold hover:glow transition-all"
            >
              {step === totalSteps ? 'Complete Setup' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}