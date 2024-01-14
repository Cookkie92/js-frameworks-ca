// export default CartIcon;

// import React from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// const CartIcon = () => {
//   const { cart } = useCart();

//   // Calculate the total number of items in the cart
//   const cartItemCount = cart.length;

//   return (
//     <div>
//       <Link to="/checkout">
//         Cart <span>{cartItemCount}</span>
//       </Link>
//     </div>
//   );
// };

// export default CartIcon;
// import React from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// const CartIcon = () => {
//   const { cart } = useCart();

//   // Calculate the total number of items in the cart
//   const cartItemCount = cart.length;

//   return (
//     <div>
//       <Link to="/checkout">
//         <i className="fas fa-shopping-cart"></i> {/* FontAwesome cart icon */}
//         <span>{cartItemCount}</span>
//       </Link>
//     </div>
//   );
// };

// export default CartIcon;

// import React from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { CartIcon, CartCount } from "../styles/NavStyles";

// const CartIconComponent = () => {
//   const { cart } = useCart();
//   const cartItemCount = cart.length;

//   return (
//     <Link to="/checkout">
//       <CartIcon className="fas fa-shopping-cart" />
//       {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
//     </Link>
//   );
// };

// export default CartIconComponent;

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
