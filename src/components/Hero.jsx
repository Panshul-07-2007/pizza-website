import React from "react";

function Hero() {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "60px", gap: "40px" }}>
      
      {/* LEFT */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Hot. Fresh. Delivered in Minutes.
        </h1>

        <p style={{ fontSize: "18px", color: "#555", marginBottom: "20px" }}>
          Your favorite pizzas at your doorstep. Made by PANSHUL
        </p>

        <button style={{
          backgroundColor: "#EE3124",
          color: "white",
          padding: "12px 20px",
          border: "none",
          marginRight: "10px",
          cursor: "pointer"
        }}>
          Order Now
        </button>

        <button style={{
          padding: "12px 20px",
          border: "2px solid #EE3124",
          background: "white",
          color: "#EE3124",
          cursor: "pointer"
        }}>
          View Deals
        </button>
      </div>

      {/* RIGHT */}
      <div style={{ flex: 1 }}>
        <img
          src="https://images.unsplash.com/photo-1594007654729-407eedc4be65"
          alt="pizza"
          style={{ width: "100%", borderRadius: "12px" }}
        />
      </div>

    </div>
  );
}

export default Hero;