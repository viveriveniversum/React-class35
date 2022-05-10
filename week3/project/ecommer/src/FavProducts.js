import Product from "./Product";

const FavoritedProducts = ({ products }) => {
  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            image={product.image}
            title={product.title}
            id={product.id}
          />
        );
      })}
    </div>
  );
};

export default FavoritedProducts;
