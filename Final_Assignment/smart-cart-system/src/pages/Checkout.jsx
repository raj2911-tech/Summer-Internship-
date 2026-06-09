import React from "react";
import { useCart } from "../context/CartContext";
import calculateDiscounts from "../utils/discountCalculator";

export default function Checkout() {
  const { cart, removeItem, clearCart } = useCart();

  const styles = {
    checkoutPage: {
      maxWidth: 900,
      margin: "24px auto",
      padding: 16,
      background: "#fff",
      borderRadius: 8,
      boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
      color: "#222",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12,
    },
    clearBtn: {
      background: "#0d6efd",
      color: "#fff",
      border: "none",
      padding: "8px 12px",
      borderRadius: 6,
      cursor: "pointer",
      fontWeight: 600,
    },
    itemsWrapper: {
      borderTop: "1px solid #eee",
      borderBottom: "1px solid #eee",
      marginBottom: 16,
    },
    item: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      padding: "12px 8px",
      borderBottom: "1px solid #f4f4f4",
    },
    itemInfo: { flex: 1 },
    itemName: { display: "block", fontSize: 16, marginBottom: 6 },
    meta: { fontSize: 13, color: "#555" },
    discount: { color: "#198754", fontSize: 13, marginTop: 6 },
    actions: { display: "flex", gap: 8 },
    removeBtn: {
      background: "transparent",
      border: "1px solid #e0e0e0",
      padding: "6px 10px",
      borderRadius: 6,
      cursor: "pointer",
      color: "#333",
    },
    summary: { maxWidth: 480, marginTop: 8 },
    row: {
      display: "flex",
      justifyContent: "space-between",
      padding: "8px 0",
      alignItems: "center",
    },
    rowDiscount: { color: "#198754" },
    divider: { borderTop: "1px solid #eee", margin: "12px 0" },
    total: { display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 18, padding: "8px 0" },
    empty: {
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

  const safeCart = Array.isArray(cart) ? cart : [];
  const {
    items = [],
    baseSubtotal = 0,
    productDiscountTotal = 0,
    subtotalAfterProductDiscounts = 0,
    cartDiscount = 0,
    finalAmount = 0,
  } = calculateDiscounts(safeCart) || {};

  if (!safeCart || safeCart.length === 0) {
    return (
      <div style={styles.empty}>
        <h2>Checkout</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div style={styles.checkoutPage}>
      <div style={styles.header}>
        <h2 style={{ margin: 0 }}>Checkout</h2>
        <button style={styles.clearBtn} onClick={() => clearCart && clearCart()}>
          Clear Cart
        </button>
      </div>

      <section style={styles.itemsWrapper}>
        <h3 style={{ margin: "8px 0" }}>Items</h3>
        <div>
          {items.map((it) => (
            <div key={it.id} style={styles.item}>
              <div style={styles.itemInfo}>
                <strong style={styles.itemName}>{it.name || "Unnamed"}</strong>
                <div style={styles.meta}>
                  ₹{it.unitPrice} × {it.qty} = ₹{it.subtotal}
                </div>
                {it.productDiscount > 0 && (
                  <div style={styles.discount}>Product discount: -₹{it.productDiscount}</div>
                )}
                <div style={styles.meta}>After product discount: ₹{it.subtotalAfterProductDiscount}</div>
              </div>

              <div style={styles.actions}>
                <button style={styles.removeBtn} onClick={() => removeItem && removeItem(it.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.summary}>
        <h3 style={{ margin: "0 0 8px" }}>Summary</h3>
        <div style={styles.row}>
          <span>Products subtotal</span>
          <span>₹{baseSubtotal}</span>
        </div>
        <div style={{ ...styles.row, ...styles.rowDiscount }}>
          <span>Product discounts</span>
          <span>-₹{productDiscountTotal}</span>
        </div>
        <div style={styles.row}>
          <span>Subtotal after product discounts</span>
          <span>₹{subtotalAfterProductDiscounts}</span>
        </div>
        <div style={{ ...styles.row, ...styles.rowDiscount }}>
          <span>Cart discount (5% if &gt; ₹5000)</span>
          <span>-₹{cartDiscount}</span>
        </div>

        <div style={styles.divider} />

        <div style={styles.total}>
          <span>Final amount</span>
          <span>₹{finalAmount}</span>
        </div>
      </section>
    </div>
  );
}