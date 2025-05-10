import React, { createContext, ReactNode, useContext, useState } from "react";
import { ColorSchemeName } from "react-native";
import { ThemeTypes } from "../types";

export const ThemeContext = createContext<Partial<ThemeContextProps>>({
  currentTheme: ThemeTypes.LIGHT,
  setTheme: () => {},
  readTheme: () => false,
});

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<ColorSchemeName>(
    ThemeTypes.LIGHT
  );

  const setTheme = (value: boolean) => {
    const key = value ? ThemeTypes.DARK : ThemeTypes.LIGHT;
    setCurrentTheme(key);
  };

  const readTheme = (): boolean => {
    return currentTheme === ThemeTypes.DARK;
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, readTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("ManagerContext must be used within a ManagerProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextProps {
  currentTheme: ColorSchemeName;
  setTheme: (value: boolean) => void;
  readTheme: () => boolean;
}
