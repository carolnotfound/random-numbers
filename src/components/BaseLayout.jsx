import React from "react";
import "../assets/css/BaseLayout.css";

const BaseLayout = props => {
  return (
    <div className='base-layout'>
      { props.children }
    </div>
  );
};

export default BaseLayout;
