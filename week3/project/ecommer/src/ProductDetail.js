import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;

  const { isLoading, implementFetch } = useFetch(url, setProduct);
  useEffect(() => {
    implementFetch();
  }, [url]);

  return isLoading ? (
    <div className="product">
      <h3>Loading...</h3>
    </div>
  ) : (
    <div className="product">
      <Link to="/">Go Back</Link>
      <h1 className="product-title">{product.title}</h1>
      <div className="product-wrapper">
        <p className="product-description">{product.description}</p>
        <img className="product-img" src={product.image} alt={product.title} />
      </div>
    </div>
  );
};

export default ProductDetail;
