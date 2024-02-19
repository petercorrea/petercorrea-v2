import programmingLanguages from '@/content/posts/programming-languages.json';

export const routes = [
  { text: 'about', href: '/#about' },
  { text: 'xp', href: '/#xp' },
  { text: 'projects', href: '/#projects' },
  { text: 'posts', href: '/posts' },
  { text: 'afk', href: '/afk' },
];

export const routesMap = {
  about: { text: 'about', href: '/#about' },
  xp: { text: 'xp', href: '/#xp' },
  projects: { text: 'projects', href: '/#projects' },
  posts: { text: 'posts', href: '/posts' },
  akf: { text: 'afk', href: '/afk' },
};

export const resume = { text: 'resume', href: '/Peter_Correa_resume.pdf' };

export const postsMap = {
  'programming-languages': programmingLanguages,
};
