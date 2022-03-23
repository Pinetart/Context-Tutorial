import React, { createContext, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

// const bookReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_BOOK":
//       return [
//         ...state,
//         {
//           title: action.book.title,
//           author: action.book.author,
//           id: uuid(),
//         },
//       ];
//     case "REMOVE_BOOK":
//       return state.filter((book) => book.id !== action.id);
//     default:
//       return state;
//   }
// };

const BookContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(bookReducer, []);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
