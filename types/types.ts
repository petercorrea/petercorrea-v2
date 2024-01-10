export type Experiance = {
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
  public_url: string;
  tags: string[];
  image: string;
  features: string[];
};
