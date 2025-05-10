import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import { useThemeContext } from './context/ThemeContextProvider';
import { getNavigationTheme } from './getNavigationTheme';

interface Props {
  children: ReactNode;
}

export function ThemeNavigationProvider({ children }: Props) {
  const { currentTheme } = useThemeContext();
  const theme = getNavigationTheme(currentTheme);
  return <ThemeProvider value={{ ...theme, fonts: DefaultTheme.fonts }}>{children}</ThemeProvider>;
}
