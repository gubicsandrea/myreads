import React from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

const ShelfPage = ({ books, changeShelf, availableShelves }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {availableShelves.map(shelf => (
            <Shelf
              key={shelf.id}
              title={shelf.title}
              books={books.filter(book => book.shelf === shelf.id)}
              changeShelf={changeShelf}
              availableShelves={availableShelves}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

ShelfPage.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
  availableShelves: PropTypes.array
};

export default ShelfPage;
