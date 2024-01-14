import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
  const { clearCart } = useCart();

  return (
    <div>
      <h1>Order Successful!</h1>
      <p>Thank you for your purchase!</p>
      <p>Your order has been confirmed.</p>

      <Link to="/" onClick={clearCart}>
        Go back to the store
      </Link>
    </div>
  );
};

export default CheckoutSuccessPage;
