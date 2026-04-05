import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza) => {
    setCartItems([...cartItems, pizza]);
  };

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Hero />
      <Menu addToCart={addToCart} />
      <Footer />
    </>
  );
}

export default App;