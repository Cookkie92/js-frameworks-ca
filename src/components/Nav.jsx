// // Nav.js
// import React from "react";
// import { Link } from "react-router-dom";

// const Nav = () => {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/contact">Contact</Link>
//       {/* Add more links as needed */}
//     </nav>
//   );
// };

// export default Nav;

// import React from "react";
// import { Link } from "react-router-dom";
// import { NavContainer, NavLinks, CartContainer } from "../styles/NavStyles";
// import CartIcon from "./CartIcon";

// const Nav = () => {
//   return (
//     <NavContainer>
//       <NavLinks>
//         <Link to="/">Home</Link>
//         <Link to="/contact">Contact</Link>
//       </NavLinks>
//       <CartContainer>
//         <CartIcon />
//       </CartContainer>
//     </NavContainer>
//   );
// };

// export default Nav;

import React from "react";
import {
  NavContainer,
  NavLinks,
  CartContainer,
  StyledLink,
} from "../styles/NavStyles";
import CartIcon from "./CartIcon";

const Nav = () => {
  return (
    <NavContainer>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </NavLinks>
      <CartContainer>
        <CartIcon />
      </CartContainer>
    </NavContainer>
  );
};

export default Nav;
