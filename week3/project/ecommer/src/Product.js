import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FavContext from "./FavContext";
import heartBlack from "./assets/heart-solid.svg";
import heartWhite from "./assets/heart-regular.svg";

const Product = ({ image, title, id }) => {
  const { isFavorite, toggleFavorite } = useContext(FavContext);
  const isFav = isFavorite(id);
  const navigate = useNavigate();
  return (
    <div className="product-item">
      <img
        src={image}
        alt={title}
        onClick={() => {
          navigate(`/products/${id}`);
        }}
      />
      <div className="favorites-container">
        <img
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(id);
          }}
          src={isFav ? heartBlack : heartWhite}
          alt={title}
        />
        <p
          onClick={() => {
            navigate(`/products/${id}`);
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default Product;
