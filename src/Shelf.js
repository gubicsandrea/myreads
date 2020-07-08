import React, { Component } from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";

class Shelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  };

  render() {
    const { title, books } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BookList books={books} />
        </div>
      </div>
    );
  }
}

export default Shelf;
