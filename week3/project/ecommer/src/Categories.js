import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
const Categories = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);
  const url = "https://fakestoreapi.com/products/categories";

  const { isLoading, implementFetch } = useFetch(url, setCategories);

  useEffect(() => {
    implementFetch();
  }, []);

  return isLoading ? (
    <div className="category">
      <h3>Loading...</h3>
    </div>
  ) : (
    <>
      <ul className="category">
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              onClick={(e) => {
                setCategory(e.currentTarget.innerText);
              }}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Categories;
