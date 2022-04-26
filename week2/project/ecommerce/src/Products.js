import React from "react";
import Card from "./Card.js";

function Products({ products }) {
  return (
    <ul className="product-list">
      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </ul>
  );
}

export default Products;
