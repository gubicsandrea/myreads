import React, { Component } from "react";
import PropTypes from "prop-types";

class BookCover extends Component {
  static propTypes = {
    imageUrl: PropTypes.string
  };

  render() {
    const { imageUrl } = this.props;
    const style = imageUrl
      ? {
          width: 128,
          height: 193,
          backgroundImage: `url(${imageUrl})`
        }
      : {
          width: 128,
          height: 193,
          backgroundColor: "#CCCCCC"
        };
    const content = imageUrl ? "" : "No image";
    return (
      <div className="book-cover" style={style}>
        {content}
      </div>
    );
  }
}

export default BookCover;
