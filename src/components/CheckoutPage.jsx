// export default CheckoutPage;

import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Perform your checkout logic here
    // For example, you can simulate a delay with setTimeout
    // and then navigate to the checkout success page

    // Simulate checkout logic
    setTimeout(() => {
      // Clear the cart before navigating to checkout success
      clearCart();

      // Navigate to the checkout success page
      navigate("/checkout-success");
    }, 1000); // Simulate a 1-second delay (adjust as needed)
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.title} - ${item.price}
          </p>
          <button onClick={() => removeFromCart(item.id)}>
            Remove from Cart
          </button>
        </div>
      ))}
      <p>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default CheckoutPage;
