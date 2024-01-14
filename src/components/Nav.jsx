// // Nav.js
// import React from "react";
// import {
//   NavContainer,
//   Logo,
//   LogoLink,
//   NavLinks,
//   CartContainer,
//   StyledLink,
// } from "../styles/NavStyles";
// import CartIcon from "./CartIcon";

// const Nav = () => {
//   return (
//     <NavContainer>
//       <Logo>
//         // <LogoLink to="/">WTB-Cakes.com</LogoLink>
//         //{" "}
//       </Logo>
//       <NavLinks>
//         <StyledLink to="/">Home</StyledLink>
//         <StyledLink to="/contact">Contact</StyledLink>
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
  LogoLink,
  NavLinks,
  CartContainer,
  StyledLink,
} from "../styles/NavStyles";
import CartIcon from "./CartIcon";

const Nav = () => {
  return (
    <NavContainer>
      <LogoLink to="/">WTB-Cakes.com</LogoLink>
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
