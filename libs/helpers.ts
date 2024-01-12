export const toggleDarkThemeOn = () => {
  document.querySelector('html')?.setAttribute('data-theme', 'darky');
  document.documentElement.classList.add('dark');
};

export const toggleDarkThemeOff = () => {
  document.querySelector('html')?.removeAttribute('data-theme');
  document.documentElement.classList.remove('dark');
};
