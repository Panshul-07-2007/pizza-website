import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>🍕 Pizza Hut</h1>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;