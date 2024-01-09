import { Dispatch, SetStateAction } from 'react';
import { HiOutlineMoon } from 'react-icons/hi';
import { HiOutlineSun } from 'react-icons/hi2';
import { toggleDarkThemeOff, toggleDarkThemeOn } from '../libs/helpers';

interface DarkModeButtonProps {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
}

const DarkModeButton = ({ darkMode, setDarkMode }: DarkModeButtonProps) => {
  const handleOnClick = () => {
    if (darkMode) {
      toggleDarkThemeOff();
    } else {
      toggleDarkThemeOn();
    }
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={handleOnClick} className="">
      <HiOutlineMoon
        size={35}
        className={`${darkMode ? 'hidden' : 'text-primary'}`}
      />
      <HiOutlineSun
        size={35}
        className={`${darkMode ? 'text-primary' : 'hidden'}`}
      />
    </button>
  );
};

export default DarkModeButton;
