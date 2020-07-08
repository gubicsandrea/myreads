import React, { Component } from "react";
import PropTypes from "prop-types";

class ChangeShelfForm extends Component {
  static propTypes = {
    currentShelf: PropTypes.string
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
    let { currentShelf } = this.props;
    currentShelf = currentShelf || "none";

    return (
      <div className="book-shelf-changer">
        <select defaultValue={currentShelf}>
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
