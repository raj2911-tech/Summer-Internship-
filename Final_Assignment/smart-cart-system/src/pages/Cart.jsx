import React from "react";
import { useCart } from "../context/CartContext";
import Cartitem from "../components/Cartitem";

export default function Cart() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce((s, it) => s + it.price * it.qty, 0);

  const styles = {
    cartPage: {
      maxWidth: 900,
      margin: "24px auto",
      padding: 16,
      background: "#fff",
      borderRadius: 8,
      boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
    },
    h2: { margin: "0 0 12px", fontSize: 22, color: "#222" },
    cartList: { borderTop: "1px solid #eee", borderBottom: "1px solid #eee", marginBottom: 16 },
    cartSummary: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12,
      padding: "12px 4px",
    },
    totalDiv: { fontWeight: 700, fontSize: 18 },
    clearBtn: {
      background: "#0d6efd",
      color: "#fff",
      border: "none",
      padding: "8px 12px",
      borderRadius: 6,
      cursor: "pointer",
    },
    cartEmpty: {
      maxWidth: 600,
      margin: "48px auto",
      padding: 24,
      textAlign: "center",
      background: "#fff",
      borderRadius: 8,
      color: "#555",
      boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
    },
  };

  if (cart.length === 0) return <div style={styles.cartEmpty}>Your cart is empty.</div>;

  return (
    <div style={styles.cartPage}>
      <h2 style={styles.h2}>Your Cart</h2>
      <div style={styles.cartList}>
        {cart.map((item) => (
          <Cartitem key={item.id} item={item} />
        ))}
      </div>

      <div style={styles.cartSummary}>
        <div style={styles.totalDiv}>Total: ₹{total.toFixed(2)}</div>
        <button style={styles.clearBtn} onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}