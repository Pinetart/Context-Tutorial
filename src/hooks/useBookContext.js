import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export function useBookContext() {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error("useBookContext() is out of scope");
  }
  return context;
}
