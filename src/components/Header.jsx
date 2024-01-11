// export default Header;

import React from "react";
import Nav from "./Nav";
import CartIcon from "./CartIcon";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart } = useCart();

  // Calculate the total number of items in the cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <Nav />
      {/* Pass the cartItemCount to the CartIcon component */}
      <CartIcon cartItemCount={cartItemCount} />
    </header>
  );
};

export default Header;
