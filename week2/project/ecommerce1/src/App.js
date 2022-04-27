import "./App.css";
import allProducts from "./fake-data/all-products.js";
import { useState, useEffect } from "react";
import Navbar from "./Navbar.js";
import Products from "./Products.js";
import fetcher from "./fetcher";

function App() {
  const [products, setProducts] = useState(allProducts);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async (ep = "") => {
    try {
      setLoading(true);
      const products = await fetcher(ep);
      setProducts(products);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErr(err.message);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Products</h1>
        <Navbar getProducts={getProducts} />
      </div>
      <div className="products">
        {!err ? <Products products={products} /> : <h2>{err}</h2>}
      </div>
    </div>
  );
}

export default App;
