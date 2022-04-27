import React, { useState } from "react";

function NavItem({ category, getProducts }) {
  const [categoryState, setCategoryState] = useState(false);
  return (
    <li className="category-item">
      <input
        className={`category-btn ${categoryState ? "active" : ""}`}
        type="button"
        value={category}
        onClick={(e) => {
          getProducts(`/category/${e.target.value}`);
          setCategoryState(!categoryState);
        }}
      />
    </li>
  );
}

export default NavItem;
