import { createContext, useEffect } from 'react';

import { ThemeProvider, useMediaQuery, useTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { DarkTheme, LightTheme } from './../themes';
import usePersistedState from '../hooks/usePersistedState';

type Theme = 'light' | 'dark';

type AppThemeContext = {
  theme: Theme;
  oppositeTheme: Theme;
  toggleTheme: () => void;
  smDown: boolean;
  mdDown: boolean;
};

type ThemeProviderType = {
  children: React.ReactNode;
};

export const AppThemeContext = createContext({} as AppThemeContext);

const AppThemeProvider = ({ children }: ThemeProviderType) => {
  const [theme, setTheme] = usePersistedState<Theme>('theme', 'light');

  const { breakpoints } = useTheme();
  const smDown = useMediaQuery(breakpoints.down('sm'));
  const mdDown = useMediaQuery(breakpoints.down('md'));

  const userBrowserTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const oppositeTheme = theme === 'light' ? 'dark' : 'light';
  const selectedTheme = theme === 'light' ? LightTheme : DarkTheme;
  


  const toggleTheme = () => setTheme(oppositeTheme);

  useEffect(() => {
  
    const changeTheme = (isDarkTheme: boolean) => {
      if (isDarkTheme) {
        setTheme('dark');
      } else {
        setTheme('light');
      };
    };

    changeTheme(userBrowserTheme.matches);

  }, []);


  const providerValues: AppThemeContext = {
    theme, oppositeTheme, toggleTheme, smDown, mdDown 
  };

  return (
    <AppThemeContext.Provider value={providerValues}>
      <ThemeProvider theme={selectedTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export default AppThemeProvider;
