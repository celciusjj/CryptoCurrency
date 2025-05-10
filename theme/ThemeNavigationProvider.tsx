import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React, { ReactNode } from "react";
import { useThemeContext } from "./context/ThemeContextProvider";
import { getNavigationTheme } from "./getNavigationTheme";

interface Props {
  children: ReactNode;
}

export function ThemeNavigationProvider({ children }: Props) {
  const { currentTheme } = useThemeContext();
  const theme = getNavigationTheme(currentTheme);
  return (
    <NavigationContainer theme={{ ...theme, fonts: DefaultTheme.fonts }}>
      {children}
    </NavigationContainer>
  );
}
