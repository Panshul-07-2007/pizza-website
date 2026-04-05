const pizzas = [
  {
    name: "Margherita",
    price: 199,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
  },
  {
    name: "Pepperoni",
    price: 299,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
  },
  {
    name: "Veg Delight",
    price: 249,
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
  },
];

function Menu({ addToCart }) {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-container">
        {pizzas.map((pizza, index) => (
          <div className="card" key={index}>
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