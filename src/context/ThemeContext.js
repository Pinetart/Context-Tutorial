import { createContext, useReducer, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };

  // const [state, dispatch] = useReducer(themeReducer, {
  //   isLightTheme: true,
  //   light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
  // });
  return (
    <ThemeContext.Provider value={{ ...state }}>
      {children}
    </ThemeContext.Provider>
  );
}
