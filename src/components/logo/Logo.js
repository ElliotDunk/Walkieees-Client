import React from "react";
import "./logo.module.css";

export default function Logo(props) {
  const style = {
    color: props.color || null,
    fontSize: props.fontSize || null
  };

  return (
    <React.Fragment>
      <h1 style={style}>Walkieees</h1>
    </React.Fragment>
  );
}
