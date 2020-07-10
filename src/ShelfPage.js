import React, { Component } from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

class ShelfPage extends Component {
  render() {
    const { books, changeShelf } = this.props;
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
            <Shelf
              title="Currently Reading"
              books={currentlyReadingBooks}
              changeShelf={changeShelf}
            />
            <Shelf
              title="Want to Read"
              books={wantToReadBooks}
              changeShelf={changeShelf}
            />
            <Shelf title="Read" books={readBooks} changeShelf={changeShelf} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ShelfPage;
