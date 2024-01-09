// src/components/CartIcon.js
import React from "react";
import { Link } from "react-router-dom";

const CartIcon = ({ cartItems }) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <Link to="/checkout">
        <div>Cart</div>
        <div>{totalItems}</div>
      </Link>
    </div>
  );
};

export default CartIcon;
