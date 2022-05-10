import React, { useState, useEffect } from "react";
import Product from "./Product";
import useFetch from "./useFetch";

const Products = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const url = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : "https://fakestoreapi.com/products/";

  const { isLoading, implementFetch } = useFetch(url, setProducts);
  useEffect(() => {
    implementFetch();
  }, [url]);

  return isLoading ? (
    <div className="products-container">
      <h3>Loading...</h3>
    </div>
  ) : (
    <div className="products-container">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            image={product.image}
            title={product.title}
            id={product.id}
          />
        );
      })}
    </div>
  );
};
export default Products;
