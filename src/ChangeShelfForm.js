import React, { Component } from "react";
import PropTypes from "prop-types";

class ChangeShelfForm extends Component {
  static propTypes = {
    currentShelf: PropTypes.string,
    changeShelf: PropTypes.func.isRequired
  };

  state = {
    options: [
      { value: "move", title: "Move to...", disabled: true },
      {
        value: "currentlyReading",
        title: "Currently Reading",
        disabled: false
      },
      { value: "wantToRead", title: "Want to Read", disabled: false },
      { value: "read", title: "Read", disabled: false },
      { value: "none", title: "None", disabled: false }
    ]
  };

  render() {
    let { book, changeShelf } = this.props;
    let currentShelf = book.shelf || "none";

    return (
      <div className="book-shelf-changer">
        <select
          defaultValue={currentShelf}
          onChange={event => changeShelf(book, event.target.value)}
        >
          {this.state.options.map(option => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.title}
            </option>
          ))}
          ;
        </select>
      </div>
    );
  }
}

export default ChangeShelfForm;
