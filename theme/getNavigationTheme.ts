import { ColorSchemeName } from "react-native";
import { darkNavigationScheme } from "./darkScheme";
import { lightNavigationScheme } from "./lightScheme";
// @ts-ignore
import { NavigationTheme } from "react-native-paper/lib/typescript/types";
import { ThemeTypes } from "./types";

export const getNavigationTheme = (
  colorScheme: ColorSchemeName
): NavigationTheme => {
  return {
    colors: {
      ...(colorScheme === ThemeTypes.LIGHT
        ? lightNavigationScheme
        : darkNavigationScheme),
    },

    dark: colorScheme === ThemeTypes.DARK,
  };
};
