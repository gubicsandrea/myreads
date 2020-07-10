import React, { Component } from "react";
import PropTypes from "prop-types";
import ChangeShelfForm from "./ChangeShelfForm";
import BookCover from "./BookCover";

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  render() {
    const { book, changeShelf } = this.props;
    const imageUrl = book.imageLinks
      ? book.imageLinks.thumbnail || book.imageLinks.smallThumbnail
      : null;

    return (
      <div className="book">
        <div className="book-top">
          <BookCover imageUrl={imageUrl} />
          <ChangeShelfForm book={book} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors && book.authors.join(", ")}
        </div>
      </div>
    );
  }
}

export default Book;
