import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { debounce } from "lodash";
import BookList from "./BookList";

class SearchPage extends Component {
  state = {
    query: "",
    filteredBooks: []
  };

  handleTextChange = debounce(text => {
    const value = text;
    this.setState({
      query: value
    });
    value !== "" ? this.getBooks(value) : this.emptySearch();
  }, 200);

  getBooks = value => {
    BooksAPI.search(value).then(books => {
      this.setState({
        filteredBooks: books
      });
    });
  };

  emptySearch = () => {
    this.setState({ filteredBooks: [] });
  };

  changeShelf = (bookToChange, shelf) => {
    let updatedBook = this.state.filteredBooks.find(
      book => book.id === bookToChange.id
    );
    updatedBook.shelf = shelf;
    this.setState(currentState => ({
      filteredBooks: currentState.filteredBooks.map(book =>
        book.id !== bookToChange.id ? book : updatedBook
      )
    }));
    BooksAPI.update(bookToChange, shelf);
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.handleTextChange(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookList
            books={this.state.filteredBooks}
            changeShelf={this.changeShelf}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
