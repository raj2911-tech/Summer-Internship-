import { Suspense, lazy } from "react";
import products from "../data/products.json";
import { useCart } from "../context/CartContext";

const ProductCard = lazy(() => import("../components/ProductCard"));

function Products() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <Suspense fallback={<p style={{ padding: 16 }}>Loading products...</p>}>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </Suspense>
  );
}

export default Products;