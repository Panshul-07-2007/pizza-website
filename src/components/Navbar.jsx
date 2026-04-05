import React from "react";

function Navbar({ cartCount }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      backgroundColor: "black",
      color: "white"
    }}>
      <h2>Pizza Hut</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <span>Menu</span>
        <span>Deals</span>
        <span>Cart ({cartCount})</span>
      </div>

      <button style={{
        backgroundColor: "#EE3124",
        color: "white",
        border: "none",
        padding: "8px 15px",
        cursor: "pointer",
        borderRadius: "5px"
      }}>
        Order Now
      </button>
    </div>
  );
}

export default Navbar;