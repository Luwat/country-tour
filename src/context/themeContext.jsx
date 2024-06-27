import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: '',
  toggleTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState('light')

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const ctxValue = {
        theme,
        toggleTheme
    }
  return <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>;
}
