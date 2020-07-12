import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const BookList = ({ books, changeShelf, availableShelves }) => {
  return (
    <ol className="books-grid">
      {books
        ? books.map(book => (
            <li key={book.id}>
              <Book
                book={book}
                changeShelf={changeShelf}
                availableShelves={availableShelves}
              />
            </li>
          ))
        : null}
    </ol>
  );
};

BookList.propTypes = {
  books: PropTypes.array,
  changeShelf: PropTypes.func.isRequired,
  availableShelves: PropTypes.array
};

export default BookList;
