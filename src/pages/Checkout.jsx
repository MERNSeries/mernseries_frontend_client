import { useContext } from "react";
import CartContext from "../context/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="checkout-container">
        <h1>Checkout</h1>
        <ul>
          {cart.map((item) => (
            <li key={item._id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <h2>Total: ${cart.reduce((total, item) => total + item.price, 0)}</h2>
        <h1>Thank you for Shopping with us!</h1>
      </div>
    </>
  );
};

export default Checkout;
