import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">PizzaHub 🍕</h2>

      <ul className="nav-links">
        <li>Menu</li>
        <li>Deals</li>
        <li>Cart 🛒</li>
      </ul>
    </nav>
  );
};

export default Navbar;