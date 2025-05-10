import React, { ReactNode } from "react";
import { Provider } from "react-native-paper";
import { useThemeContext } from "./context/ThemeContextProvider";
import { getTheme } from "./getTheme";

interface Props {
  children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const { currentTheme } = useThemeContext();
  const theme = getTheme(currentTheme);
  return <Provider theme={{ ...theme }}>{children}</Provider>;
}
