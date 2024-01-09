// src/components/CheckoutPage.js
import React from "react";

const CheckoutPage = ({ cartItems }) => {
  // You should receive the cart items as props or fetch them from your state management
  // Assuming each item in the cart has properties like 'name', 'price', and 'quantity'

  const calculateTotal = () => {
    // Calculate the total based on the cart items
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
      <button onClick={() => alert("Checkout button clicked!")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CheckoutPage;
