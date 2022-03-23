import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [state, setState] = useState({
    isAuthenticated: false,
  });

  const toggleAuth = () => {
    setState({ isAuthenicated: !state.isAuthenticated });
  };

  return (
    <AuthContext.Provider value={{ ...state, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
