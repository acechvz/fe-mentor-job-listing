import React from "react";
import classNames from "classnames";
import "./Button.css";

function Button({ type, text, ...rest }) {
  return (
    <button
      {...rest}
      className={classNames("button", {
        "button--underlined": type === "link",
        "button--rounded": type === "rounded",
        "button--rounded button--hover": type === "roundedHoverable",
        "button--rounded button--dismissable": type === "dismissable",
      })}
    >
      {text}
      {type === "dismissable" && <span className="button__dismiss">x</span>}
    </button>
  );
}

export default Button;
