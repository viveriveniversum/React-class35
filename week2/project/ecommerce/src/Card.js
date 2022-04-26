import React from "react";

function Card({ product }) {
  return (
    <li>
      <div className="product">
        <img src={product.image} alt={product.title}></img>
        <span>{product.title}</span>
      </div>
    </li>
  );
}

export default Card;
