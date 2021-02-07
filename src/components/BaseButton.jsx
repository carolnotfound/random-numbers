import React from "react";
import "../assets/css/BaseButton.css"

const BaseButton = (props) => {
  return (
    <div className="base-button">
      <button onClick={props.click}>{props.label}</button>
    </div>
  );
};

export default BaseButton;
