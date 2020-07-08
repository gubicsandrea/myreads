import React, { Component } from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf";

class ShelfPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  render() {
    const { books } = this.props;
    const currentlyReadingBooks = books.filter(
      book => book.shelf === "currentlyReading"
    );
    const wantToReadBooks = books.filter(book => book.shelf === "wantToRead");
    const readBooks = books.filter(book => book.shelf === "read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf title="Currently Reading" books={currentlyReadingBooks} />
            <Shelf title="Want to Read" books={wantToReadBooks} />
            <Shelf title="Read" books={readBooks} />
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default ShelfPage;
