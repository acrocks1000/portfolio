export interface IUser {
  name: string;
  jobTitle: string;
  tagline: string;
  cvLink: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  identity: string[];
  skills: { group: string; blurb: string; items: string[] }[];
  marquee: string[];
  social: {
    linkedin: string;
    github: string;
  };
}

export interface IExperience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  points: string[];
  tags: string[];
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  tags: string[];
  link: string | null;
  github: string;
  featured: boolean;
  year: number;
}
