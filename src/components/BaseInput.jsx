import React from "react";
import "../assets/css/BaseInput.css";

const BaseInput = ({ value, onInput }) => {
  const callback = (event) => onInput(event.target.value);

  return (
    <div className="base-input">
      <input value={value} type="number" min="1" max="60" onChange={callback} />
    </div>
  );
};

export default BaseInput;
