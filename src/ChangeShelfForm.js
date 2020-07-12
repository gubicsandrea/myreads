import React from "react";
import PropTypes from "prop-types";

const ChangeShelfForm = ({ book, changeShelf, availableShelves }) => {
  const currentShelf = book.shelf || "none";
  const options = [{ value: "move", title: "Move to...", disabled: true }]
    .concat(
      availableShelves.map(shelf => ({
        value: shelf.id,
        title: shelf.title,
        disabled: false
      }))
    )
    .concat([{ value: "none", title: "None", disabled: false }]);

  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={currentShelf}
        onChange={event => changeShelf(book, event.target.value)}
      >
        {options.map(option => (
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
};

ChangeShelfForm.propTypes = {
  currentShelf: PropTypes.string,
  changeShelf: PropTypes.func.isRequired,
  availableShelves: PropTypes.array
};

export default ChangeShelfForm;
