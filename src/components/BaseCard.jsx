import React from "react";
import "../assets/css/BaseCard.css";

const BaseCard = ({ title, subtitle, children }) => {
  return (
    <div className="base-card">
      <header>
        <h1>{title}</h1>
      </header>
      <section>
        <h3>{subtitle}</h3>
        <div className="card-body">{children}</div>
      </section>
    </div>
  );
};

export default BaseCard;
