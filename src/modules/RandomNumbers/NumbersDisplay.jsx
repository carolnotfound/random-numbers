import React from "react";

const NumbersDisplay = ({ listNumbers }) => {
  const list = () => listNumbers.map((element) => <div>{element}</div>);

  return <>{list}</>;
};

export default NumbersDisplay;