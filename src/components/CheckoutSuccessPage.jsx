// src/components/CheckoutSuccessPage.js
// import React from "react";
// import { Link } from "react-router-dom";

// const CheckoutSuccessPage = () => {
//   // Implement logic to clear the cart
//   // You may use context, state management, or local storage for cart management

//   return (
//     <div>
//       <h1>Order Successful!</h1>
//       <p>Thank you for your purchase.</p>
//       <Link to="/">Go back to the store</Link>
//     </div>
//   );
// };

// export default CheckoutSuccessPage;
// CheckoutSuccessPage.js
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
  const { clearCart } = useCart();

  // Assuming you have an order confirmation message
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
