import React from "react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle the theme</button>;
}
