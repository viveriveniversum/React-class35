import NavItem from "./NavItem.js";
import { useState, useEffect } from "react";

function Navbar({ getProducts }) {
  const [categories, setCategories] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      if (!res.ok) {
        const message = `Something went wrong : ${res.status}`;
        throw new Error(message);
      }
      const categoryList = await res.json();
      setCategories(categoryList);
    } catch (err) {
      setErr(err.message);
    }
  };
  return (
    <ul className="navlist">
      {!err ? (
        categories.map((category, index) => (
          <NavItem key={index} category={category} getProducts={getProducts} />
        ))
      ) : (
        <h2>{err}</h2>
      )}
    </ul>
  );
}

export default Navbar;
