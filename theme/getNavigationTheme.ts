import { ColorSchemeName } from 'react-native';
import { NavigationTheme } from 'react-native-paper/lib/typescript/types';
import { darkNavigationScheme } from './darkScheme';
import { lightNavigationScheme } from './lightScheme';
import { ThemeTypes } from './types';

export const getNavigationTheme = (colorScheme: ColorSchemeName): NavigationTheme => {
  return {
    colors: {
      ...(colorScheme === ThemeTypes.LIGHT ? lightNavigationScheme : darkNavigationScheme),
    },

    dark: colorScheme === ThemeTypes.DARK,
  };
};
