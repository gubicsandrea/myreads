import React from "react";
import PropTypes from "prop-types";
import ChangeShelfForm from "./ChangeShelfForm";
import BookCover from "./BookCover";

const Book = ({ book, changeShelf, availableShelves }) => {
  const imageUrl = book.imageLinks
    ? book.imageLinks.thumbnail || book.imageLinks.smallThumbnail
    : null;

  return (
    <div className="book">
      <div className="book-top">
        <BookCover imageUrl={imageUrl} />
        <ChangeShelfForm
          book={book}
          changeShelf={changeShelf}
          availableShelves={availableShelves}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && book.authors.join(", ")}
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired,
  availableShelves: PropTypes.array
};

export default Book;
