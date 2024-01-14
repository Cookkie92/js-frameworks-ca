// CartIconComponent.jsx

import React from "react";
import { StyledLink, CartIcon, CartCount } from "../styles/NavStyles";
import { useCart } from "../context/CartContext";

const CartIconComponent = () => {
  const { cart } = useCart();
  const cartItemCount = cart.length;

  return (
    <StyledLink to="/checkout" activeClassName="active">
      <CartIcon className="fas fa-shopping-cart" />
      {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
    </StyledLink>
  );
};

export default CartIconComponent;
