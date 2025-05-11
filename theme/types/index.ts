import { useTheme } from 'react-native-paper';
import { MD3Typescale } from 'react-native-paper/lib/typescript/types';
import { darkScheme } from '..';

export enum ThemeTypes {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeOptions {
  colors: typeof darkScheme;
  fonts: MD3Typescale;
  roundness: number;
  dark: boolean;
}

export type AppTheme = ThemeOptions;
export type AppThemeColors = typeof darkScheme;
export const useAppTheme = () => useTheme<ThemeOptions>();
