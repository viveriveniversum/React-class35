import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import FavProducts from "./FavProducts";
import FavContext from "./FavContext";

const Favorites = () => {
  const [title, setTitle] = useState("Favorite Products");
  const { favs } = useContext(FavContext);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const favFetches = favs.map((id) =>
      fetch(`https://fakestoreapi.com/products/${id}`)
    );

    Promise.all(favFetches)
      .then((favResults) => {
        return Promise.all(favResults.map((result) => result.json()));
      })
      .then((resultProducts) => {
        setProducts(resultProducts);
      })
      .finally(() => {
        setIsLoading(false);
        setTitle("Favorite Products");
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }, [favs]);

  if (error) {
    return "Something went wrong!";
  } else if (isLoading) {
    return "Loading...Please wait";
  } else if (products === null || products.length === 0) {
    return (
      <>
        <Title title={title} />
        <p>"You haven't chosen any product!"</p>
      </>
    );
  }

  return (
    <>
      <Title title={title} />
      <FavProducts products={products} />
    </>
  );
};

export default Favorites;
