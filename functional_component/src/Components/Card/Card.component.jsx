import React, { Component } from "react";

import "./Card.style.css";

const CardComponent = (props) => {
  const { monster } = props;
  return (
    <div className="card-container" key={monster.id}>
      <img
        alt={monster.name}
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <h2> {monster.name} </h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default CardComponent;
