import React from "react";
import { StyledLink } from "../styles/NavStyles";
import { useCart } from "../context/CartContext";
import { CartIcon, CartCount } from "../styles/NavStyles";

const CartIconComponent = () => {
  const { cart } = useCart();
  const cartItemCount = cart.length;

  return (
    <StyledLink to="/checkout">
      <CartIcon className="fas fa-shopping-cart" />
      {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
    </StyledLink>
  );
};

export default CartIconComponent;
