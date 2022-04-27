import React from "react";
import { Link } from "react-router-dom";

function Card({ product }) {
  return (
    <li>
      <Link to={`/products/${product.id}`}>
        <div className="product">
          <img src={product.image} alt={product.title}></img>
          <span>{product.title}</span>
        </div>
      </Link>
    </li>
  );
}

export default Card;
