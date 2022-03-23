import React from "react";
import { useTheme } from "../hooks/useTheme";
import { useBookContext } from "../hooks/useBookContext";

export default function BookList() {
  const { isLightTheme, light, dark } = useTheme();
  const { books } = useBookContext();
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
