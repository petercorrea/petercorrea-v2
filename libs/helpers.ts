export const toggleDarkThemeOn = () => {
  console.log('toggeling to dark mode');
  document.querySelector('html')?.setAttribute('data-theme', 'darky');
  document.documentElement.classList.add('dark');
};

export const toggleDarkThemeOff = () => {
  console.log('toggeling to light mode');
  document.querySelector('html')?.removeAttribute('data-theme');
  document.documentElement.classList.remove('dark');
};
