import { ColorSchemeName } from "react-native";
import { configureFonts, DefaultTheme, MD3Theme } from "react-native-paper";
import { MD3Typescale } from "react-native-paper/lib/typescript/types";
import { darkScheme } from "./darkScheme";
import { getTypography } from "./getTypography";
import { lightScheme } from "./lightScheme";
import { ThemeTypes } from "./types";

export const getTheme = (colorScheme: ColorSchemeName): MD3Theme => {
  const typography = getTypography();
  return {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...(colorScheme === ThemeTypes.LIGHT ? lightScheme : darkScheme),
    },
    fonts: configureFonts({ config: typography as MD3Typescale }),
    roundness: 10,
    dark: colorScheme === ThemeTypes.DARK,
  };
};
