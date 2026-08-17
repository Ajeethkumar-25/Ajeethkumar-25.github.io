export interface StatMetric {
  label: string;
  value: string;
}

export interface ProjectModel {
  id: string;
  number: string;
  title: string;
  category: 'agentic' | 'rag' | 'testing' | 'cloud';
  badge: string;
  badgeColor: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  stats: StatMetric[];
  featured: boolean;
}

export interface ExperienceModel {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  highlights: string[];
  tech: string[];
  metrics: StatMetric[];
}

export interface SkillCategoryModel {
  category: string;
  icon: string;
  skills: string[];
}

export interface PersonalProfileModel {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  experienceYears: string;
  accuracyMetric: string;
  education: string;
  bachelors: string;
  philosophy: string;
}
