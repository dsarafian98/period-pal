import React, {useContext} from 'react';
import {GlobalContext} from './src/GlobalContext';
import {DefaultTheme} from 'react-native-paper';

/*const {color} = useContext(GlobalContext);

const selectedColorScheme = () => {
  const PINK = {
    light: '#FEDCDB',
    dark: '#FE6694',
    medium: '#FEBECC',
    white: '#FFFFFF',
    black: '#000000',
  };

  const SALMONPINK = {
    light: '#FEDCDB',
    dark: '#FD788B',
    medium: '#FEB1B7',
    white: '#FFFFFF',
    black: '#000000',
  };

  const GREEN = {
    light: '#CAD2C5',
    dark: '#52796F',
    medium: '#84A98C',
    white: '#FFFFFF',
    black: '#000000',
  };

  const BLUE = {
    light: '#92B0CA',
    dark: '#012E54',
    medium: '#0F4C81',
    white: '#FFFFFF',
    black: '#000000',
  };

  const YELLOW = {
    light: '#FFF9C4',
    dark: '#FFEB3B',
    medium: '#FFF59D',
    white: '#FFFFFF',
    black: '#000000',
  };

  switch (color) {
    case 'YELLOW':
      return YELLOW;
    case 'PINK':
      return PINK;
    case 'SALMONPINK':
      return SALMONPINK;
    case 'GREEN':
      return GREEN;
    case 'BLUE':
      return BLUE;
    default:
      return PINK;
  }
};

export default selectedColorScheme;*/

export const PINK = {
  ...DefaultTheme,
  colors: {
    background: '#FEDCDB',
    accent: '#FE6694',
    primary: '#FEBECC',
    text: '#FFFFFF',
  },
};

export const SALMONPINK = {
  ...DefaultTheme,
  colors: {
    background: '#FEDCDB',
    accent: '#FD788B',
    primary: '#FEB1B7',
    text: '#FFFFFF',
  },
};

export const GREEN = {
  ...DefaultTheme,
  colors: {
    background: '#CAD2C5',
    accent: '#52796F',
    primary: '#84A98C',
    text: '#FFFFFF',
  },
};

export const BLUE = {
  ...DefaultTheme,
  colors: {
    background: '#92B0CA',
    accent: '#012E54',
    primary: '#0F4C81',
    text: '#FFFFFF',
  },
};

export const YELLOW = {
  ...DefaultTheme,
  colors: {
    background: '#FFF9C4',
    accent: '#FFEB3B',
    primary: '#FFF59D',
    text: '#000000',
  },
};
