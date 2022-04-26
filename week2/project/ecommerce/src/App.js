import "./App.css";
import allProducts from "./fake-data/all-products.js";
import categories from "./fake-data/all-categories.js";
import { useState } from "react";
import Navbar from "./Navbar.js";
import Products from "./Products.js";

function App() {
  const [products, setProducts] = useState(allProducts);

  const changeCategory = (categoryName) => {
    const activeCategory = categoryName.replace("FAKE: ", "");
    const filteredProducts = allProducts.filter(
      (product) => product.category === activeCategory
    );
    setProducts(filteredProducts);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Products</h1>
        <Navbar categories={categories} changeCategory={changeCategory} />
      </div>
      <div className="products">
        <Products products={products} />
      </div>
    </div>
  );
}

export default App;
