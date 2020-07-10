import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

class ShelfPage extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }

  render() {
    const currentlyReadingBooks = this.state.books.filter(
      book => book.shelf === "currentlyReading"
    );
    const wantToReadBooks = this.state.books.filter(
      book => book.shelf === "wantToRead"
    );
    const readBooks = this.state.books.filter(book => book.shelf === "read");

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
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ShelfPage;
