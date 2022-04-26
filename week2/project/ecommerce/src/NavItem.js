import React, { useState } from "react";

function NavItem({ category, changeCategory }) {
  const [categoryState, setCategoryState] = useState(false);
  return (
    <li className="category-item">
      <button
        className={`category-btn ${categoryState ? "active" : ""}`}
        value={category}
        onClick={(e) => {
          changeCategory(e.target.value);
          setCategoryState(!categoryState);
        }}
      >
        {category}
      </button>
    </li>
  );
}

export default NavItem;
