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

  handleChange = debounce(text => {
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
              onChange={event => this.handleChange(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookList books={this.state.filteredBooks} />
        </div>
      </div>
    );
  }
}

export default SearchPage;
