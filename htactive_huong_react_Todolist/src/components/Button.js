import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button
      id={props.btnId}
      className={props.className}
      onClick={props.onclick}
    >
      {props.content}
    </button>
  );
}

export default Button;
