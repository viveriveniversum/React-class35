import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetcher from "./fetcher";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const params = useParams();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setIsLoading(true);
      const product = await fetcher(`/${params.productId}`);
      console.log(product);
      setIsLoading(false);
      setProduct(product);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="detail">
      {isLoading ? (
        <div>loading</div>
      ) : !errorMessage ? (
        <div className="detail__container">
          <h1>{product.title}</h1>
          <div className="detail__content">
            <div className="detail__img__container">
              <img
                className="detail__img"
                src={product.image}
                alt={product.title}
              />
            </div>
            <p className="detail__desc">{product.description}</p>
          </div>
        </div>
      ) : (
        <h3>{errorMessage}</h3>
      )}
    </div>
  );
};

export default ProductDetail;
