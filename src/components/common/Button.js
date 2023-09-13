import React from "react";

export default function Button(props) {
  return (
    <button
      className={` pointer-events-auto button ${
        props.secondary ? "button-secondary" : ""
      } ${props.small ? "button-small" : ""} ${props.sx}`}
      {...props}
    >
      {props.label}
    </button>
  );
}
