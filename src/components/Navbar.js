import React from "react";
import { useTheme } from "../hooks/useTheme";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { isLightTheme, light, dark } = useTheme();
  const theme = isLightTheme ? light : dark;
  const { isAuthenticated, toggleAuth } = useAuthContext();
  console.log(isAuthenticated);

  return (
    <div>
      <nav
        style={{
          background: theme.ui,
          color: theme.syntax,
        }}
      >
        <h1>Context App</h1>
        <div onClick={toggleAuth}>
          {isAuthenticated ? "Logged in" : "Logged out"}
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
