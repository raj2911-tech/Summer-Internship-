import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

function Products() {

  const handleAddToCart = (product) => {
    console.log(product);
  };

  return (
    <div className="products-grid">
 
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default Products;