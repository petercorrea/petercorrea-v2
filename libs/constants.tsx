import programmingLanguages from '@/content/posts/programming-languages.json';

export const routes = [
  { text: 'about', href: '/#about' },
  { text: 'xp', href: '/#xp' },
  { text: 'projects', href: '/#projects' },
  { text: 'posts', href: '/posts' },
  { text: 'afk', href: '/afk' },
  { text: 'resume', href: '/Peter_Correa_Resume.pdf', download: 'true' },
];

export const postsMap = {
  'programming-languages': programmingLanguages,
};
