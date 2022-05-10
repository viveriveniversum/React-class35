import React, { useState } from "react";
import Categories from "./Categories";
import Products from "./Products";
import Navbar from "./Navbar";

const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="App">
      <div className="header-container">
        <h1>Products</h1>
        <Navbar></Navbar>
      </div>

      <Categories setCategory={setSelectedCategory} />
      <Products selectedCategory={selectedCategory}></Products>
    </div>
  );
};
export default Homepage;
