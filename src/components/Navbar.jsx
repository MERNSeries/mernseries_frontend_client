import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/addProduct">Add Product</Link>
        <Link to="/favourites">Favourites</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </>
  );
};

export default Navbar;
