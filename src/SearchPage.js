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
  }, 500);

  getBooks = value => {
    BooksAPI.search(value).then(books => {
      books.hasOwnProperty("error")
        ? this.emptySearch()
        : this.updateFilteredBooksShelf(books);
    });
  };

  updateFilteredBooksShelf = books => {
    books.forEach(book => {
      let bookOnShelf = this.props.books.find(
        element => element.id === book.id
      );
      book.shelf = bookOnShelf ? bookOnShelf.shelf : "none";
    });
    this.setState({
      filteredBooks: books
    });
  };

  emptySearch = () => {
    this.setState({ filteredBooks: [] });
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
            changeShelf={this.props.changeShelf}
            availableShelves={this.props.availableShelves}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
