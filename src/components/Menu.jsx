import React from "react";

const pizzas = [
  {
    name: "Margherita",
    price: "₹199",
    img: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg"
  },
  {
    name: "Pepperoni",
    price: "₹299",
    img: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg"
  },
  {
    name: "Veggie Delight",
    price: "₹249",
    img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg"
  }
];

function Menu({ addToCart }) {
  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ marginBottom: "30px" }}>Our Menu</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {pizzas.map((pizza, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              overflow: "hidden"
            }}
          >
            <img
              src={pizza.img}
              alt={pizza.name}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover"
              }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{pizza.name}</h3>
              <p>{pizza.price}</p>

              <button
                onClick={() => addToCart(pizza)}
                style={{
                  backgroundColor: "#EE3124",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  cursor: "pointer",
                  marginTop: "10px",
                  borderRadius: "6px"
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;