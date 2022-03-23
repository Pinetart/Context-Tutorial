import { createContext, useReducer, useEffect, useState } from "react";

// const themeReducer = (state, action) => {
//   switch (action.type) {
//     case "TOGGLE_MODE":
//       return { ...state, isLightTheme: !state.isLightTheme };
//     default:
//       return state;
//   }
// };

// export function ThemeContextProvider({ children }) {
// const [state, dispatch] = useReducer(themeReducer, {
//   isLightTheme: true,
//   light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
//   dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
// });

// const toggleTheme = () => {
//   dispatch({ type: "TOGGLE_MODE" });
//   console.log(state.isLightTheme);
// };

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [state, setState] = useState({
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  });

  const toggleTheme = () => {
    setState({ ...state, isLightTheme: !state.isLightTheme });
    console.log(state.isLightTheme);
  };

  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
