import React from "react";
import { useTheme } from "../hooks/useTheme";
import { ThemeToggle } from "./ThemeToggle";

export default function BookList() {
  const { isLightTheme, light, dark } = useTheme();
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui }}>the way of kings</li>
        <li style={{ background: theme.ui }}>the name of the wind</li>
        <li style={{ background: theme.ui }}>the final empire</li>
      </ul>
      <ThemeToggle />
    </div>
  );
}
