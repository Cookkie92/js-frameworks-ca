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
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartIcon = () => {
  const { cart } = useCart();

  // Calculate the total number of items in the cart
  const cartItemCount = cart.length;

  return (
    <div>
      <Link to="/checkout">
        <i className="fas fa-shopping-cart"></i> {/* FontAwesome cart icon */}
        <span>{cartItemCount}</span>
      </Link>
    </div>
  );
};

export default CartIcon;
