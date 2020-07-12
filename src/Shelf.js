import React from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";

const Shelf = ({ title, books, changeShelf, availableShelves }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookList
          books={books}
          changeShelf={changeShelf}
          availableShelves={availableShelves}
        />
      </div>
    </div>
  );
};

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
  availableShelves: PropTypes.array
};

export default Shelf;
