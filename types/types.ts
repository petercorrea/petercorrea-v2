import { JSXElementConstructor } from 'react';

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

export type ContentBlock = {
  type: string;
  level?: number;
  text?: string;
  language?: string;
  code?: string;
  component?: string | JSXElementConstructor<HTMLElement>;
  classes?: string;
  links?: {
    text: string;
    href: string;
  }[];
};

export type Post = {
  href: string;
  title: string;
  author: string;
  date: string;
  tags:
    | 'experience'
    | 'career'
    | 'javascript'
    | 'python'
    | 'frontend'
    | 'backend'
    | 'machine learning'
    | 'css'
    | 'html'
    | 'react'
    | 'nextjs';
  content: ContentBlock[];
};
