import React from "react";
import Button from "../../shared/Button/Button";
import classNames from "classnames";
import "./FiltersBar.css";

function FilterBar({ items, onDismiss, onClearFilters, isVisible }) {
  return (
    <div
      className={classNames("rounded-block FilterBar", {
        visible: isVisible,
      })}
    >
      <div className="FilterBar__items">
        {items.map((filter) => (
          <Button
            type="dismissable"
            text={filter}
            onClick={() => onDismiss(filter)}
          />
        ))}
      </div>
      <Button onClick={onClearFilters} type="link" text="Clear" />
    </div>
  );
}

export default FilterBar;
