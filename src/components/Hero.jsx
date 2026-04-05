import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <img
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
        alt="pizza"
        className="hero-img"
      />

      <div className="hero-content">
        <h1>Hot & Fresh Pizza</h1>
        <p>Delivered in 30 minutes 🍕</p>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default Hero;