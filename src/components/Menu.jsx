import React from "react";

const Menu = () => {
  const pizzas = [
    {
      name: "Margherita",
      price: 199,
      img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e",
    },
    {
      name: "Pepperoni",
      price: 299,
      img: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
    },
    {
      name: "Veg Delight",
      price: 249,
      img: "https://images.unsplash.com/photo-1548365328-9f547fb0953c",
    },
  ];

  return (
    <div className="menu">
      {pizzas.map((pizza, index) => (
        <div className="card" key={index}>
          <img src={pizza.img} alt={pizza.name} />
          <h3>{pizza.name}</h3>
          <p>₹{pizza.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;