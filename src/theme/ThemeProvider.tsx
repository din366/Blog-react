import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

// ? берем тему из localStorage, если нету - привязываем дефолтную светлую тему
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme); // ? дженерик на Theme



  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;