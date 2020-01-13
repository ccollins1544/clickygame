import React from "react";

function Card(props) {
  return (
    <div className="card bg-dark text-center">
      <div className="card-header">
        <h2>{props.heading}</h2>
      </div>
      <div className="card-body bg-light">{props.children}</div>
    </div>
  );
}

export default Card;
