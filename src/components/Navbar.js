import React from "react";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { isLightTheme, light, dark, toggleTheme } = useTheme();
  const theme = isLightTheme ? light : dark;

  return (
    <div>
      <nav
        style={{
          background: theme.ui,
          color: theme.syntax,
        }}
      >
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button onClick={toggleTheme}>Click me</button>
      </nav>
    </div>
  );
}
