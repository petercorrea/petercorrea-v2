export type Experience = {
  company: string;
  date: string;
  role: string;
  responsibilities: string[];
  skills: string[];
};

export type Project = {
  type: string;
  title: string;
  description: string;
  github_url: string;
  youtube_url: string;
  production_url: string;
  tags: string[];
  image: string;
  features: string[];
  general_url: string;
};
