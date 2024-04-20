import { createContext } from "react";

export type Theme = 'light' | 'dark';

export type AppThemeContext = {
  theme: Theme;
  oppositeTheme: Theme;
  toggleTheme: () => void;
  smDown: boolean;
  mdDown: boolean;
};

export const defaultThemeValues: AppThemeContext = {
  theme: 'dark',
  oppositeTheme: 'light',
  toggleTheme: () => {},
  smDown: false,
  mdDown: false,
}

export const AppThemeContext = createContext<AppThemeContext>(defaultThemeValues);
