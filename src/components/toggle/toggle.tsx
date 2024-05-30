import React, { useContext } from 'react';
import { ThemeContext, ThemeEnum } from '#store/context/ThemeContext';
import useThemeColors from '#hooks/useThemeColors';
import { BrightnessMediumOutlined } from '@mui/icons-material';

const Toggle: React.FC = () => {
  const { setTheme, theme } = useContext(ThemeContext);

  const { textColorBlack } = useThemeColors();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light
    );
  };

  return (
    <BrightnessMediumOutlined onClick={toggleTheme} width={'40%'}>
      {theme === 'light' ? 'switch to dark theme' : 'switch to light theme'}
    </BrightnessMediumOutlined>
  );
};

export default Toggle;
