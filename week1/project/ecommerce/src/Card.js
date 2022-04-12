import React from "react";

function Card({ product }) {
  return (
    <li>
      <div>
        <img src={product.image} alt={product.title}></img>
        <p>{product.title}</p>
      </div>
    </li>
  );
}

export default Card;
