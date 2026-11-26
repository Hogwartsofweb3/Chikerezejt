export interface Project {
  id: string;
  title: string;
  tagline: string;
  role: string;
  year: string;
  category: 'bi' | 'sql' | 'financial' | 'quality';
  featured: boolean;
  summary: string;
  keyFinding: string;
  businessQuestion: string;
  description: string[];
  highlights: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  links: {
    github?: string;
    drive?: string;
    kaggle?: string;
    live?: string;
  };
  image?: string;
  sqlSnippet?: string;
  daxSnippet?: string;
  businessImpact: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  rating: number;
  message: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  color: string;
  skills: { name: string; note?: string }[];
}
