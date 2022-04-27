import React, { useState } from "react";

function NavItem({ category, getProducts }) {
  const [categoryState, setCategoryState] = useState(false);
  return (
    <li className="category-item">
      <button
        className={`category-btn ${categoryState ? "active" : ""}`}
        value={category}
        onClick={(e) => {
          getProducts(`/category/${e.target.value}`);
          setCategoryState(!categoryState);
        }}
      >
        {category}
      </button>
    </li>
  );
}

export default NavItem;
