import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hot & Fresh Pizza 🍕</h1>
        <p>Delivered in 30 minutes or less</p>
        <button>Order Now</button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1601924582975-7e4e64c6b9b8"
          alt="pizza"
        />
      </div>
    </section>
  );
};

export default Hero;