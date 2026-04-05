import { useState } from "react";

const pizzas = [
  {
    name: "Margherita",
    price: 199,
    image: "https://images.unsplash.com/photo-1601924582975-7e3e6fcd1e9b"
  },
  {
    name: "Pepperoni",
    price: 299,
    image: "https://images.unsplash.com/photo-1603079840783-8b9b2b1c8b0c"
  },
  {
    name: "Veggie Delight",
    price: 249,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
  }
];

function Menu() {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
    alert(pizza.name + " added!");
  };

  return (
    <div className="menu">
      <h2>Menu</h2>

      <div className="menu-grid">
        {pizzas.map((pizza, index) => (
          <div key={index} className="card">
            <img src={pizza.image} alt={pizza.name} />
            <h3>{pizza.name}</h3>
            <p>₹{pizza.price}</p>
            <button onClick={() => addToCart(pizza)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;