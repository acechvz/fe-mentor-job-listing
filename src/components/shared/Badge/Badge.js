import React from "react";
import classNames from "classnames";
import "./Badge.css";

function Badge({ children, inverted }) {
  return (
    <div
      className={classNames("Badge", {
        "Badge--inverted": inverted,
      })}
    >
      <small>{children}</small>
    </div>
  );
}

export default Badge;
