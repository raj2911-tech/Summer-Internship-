import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        width="200"
      />
    
      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <p>₹{product.price}</p>

      <p>Stock: {product.stock}</p>
      <h5>{product.category}</h5>

      {product.stock === 0 ? (
        <button disabled>
          Out Of Stock
        </button>
      ) : (
        <button
          onClick={() => onAddToCart(product)}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;