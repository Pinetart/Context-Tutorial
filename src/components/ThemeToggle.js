import React from "react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
