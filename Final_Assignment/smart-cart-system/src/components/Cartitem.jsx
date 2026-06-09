import React from "react";
import { useCart } from "../context/CartContext";
import "./Cartitem.css";

export default function Cartitem({ item }) {
  const { increment, decrement, removeItem } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{item.name || item.title}</h4>
        <div>Price: ₹{item.price}</div>
      </div>

      <div className="cart-item-controls">
        <button
          onClick={() => decrement(item.id)}
          disabled={item.qty <= 1}
          aria-label="decrease"
        >
          -
        </button>
        <span>{item.qty}</span>
        <button
          onClick={() => increment(item.id)}
          disabled={item.qty >= 10}
          aria-label="increase"
        >
          +
        </button>
        <button onClick={() => removeItem(item.id)} aria-label="remove">
          Remove
        </button>
      </div>
    </div>
  );
}