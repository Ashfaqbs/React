import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;

//to use the context we will define a custom hook which returns ThemeContext

export default function useTheme() {
  return useContext(ThemeContext);
}
