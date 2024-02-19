export const toggleDarkThemeOn = () => {
  document.querySelector('html')?.setAttribute('data-theme', 'dark');
  document.documentElement.classList.add('dark');
};

export const toggleDarkThemeOff = () => {
  document.querySelector('html')?.removeAttribute('data-theme');
  document.documentElement.classList.remove('dark');
};

export const scaleRange = (
  oldValue: number,
  oldMin: number,
  oldMax: number,
  newMin: number,
  newMax: number
) => {
  return ((oldValue - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;
};
