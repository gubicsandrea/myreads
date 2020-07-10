import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import ShelfPage from "./ShelfPage";
import SearchPage from "./SearchPage";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
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

  changeShelf = (bookToChange, shelf) => {
    let updatedBook =
      this.state.books.find(book => book.id === bookToChange.id) ||
      bookToChange;
    updatedBook.shelf = shelf;
    this.setState(currentState => ({
      books: currentState.books
        .filter(book => book.id !== bookToChange.id)
        .concat([updatedBook])
    }));
    BooksAPI.update(bookToChange, shelf);
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ShelfPage
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchPage
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
