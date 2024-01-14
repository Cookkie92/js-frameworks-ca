// import styled from "styled-components";
// import { Link } from "react-router-dom";

// export const NavContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;
//   background-color: #333;
//   color: white;
// `;

// export const CartContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   cursor: pointer;
// `;

// export const CartIcon = styled.i`
//   font-size: 20px;
//   color: white; /* Add this to set the color to white */
// `;

// export const CartCount = styled.span`
//   background-color: #black;
//   color: white;
//   padding: 10px;
//   border-radius: 50%;
//   font-size: 22px;
// `;

// // Styled component for Link with removed default styles
// export const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: white;
// `;

// import styled from "styled-components";
// import { Link } from "react-router-dom";

// export const NavContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;
//   background-color: #333;
//   color: white;
// `;

// export const LogoLink = styled(Link)`
//   text-decoration: none;
//   color: white;
//   font-size: 24px;
//   font-weight: bold;
// `;

// export const NavLinks = styled.div`
//   display: flex;
//   gap: 20px;
//   margin-right: auto;
//   padding-left: 20px;
// `;

// export const CartContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   cursor: pointer;
// `;

// export const CartIcon = styled.i`
//   font-size: 20px;
//   color: white;
// `;

// export const CartCount = styled.span`
//   background-color: #black;
//   color: white;
//   padding: 10px;
//   border-radius: 50%;
//   font-size: 22px;
// `;

// // Styled component for Link with removed default styles
// export const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: white;
// `;

import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: white;
`;

export const LogoLink = styled(NavLink)`
  text-decoration: none;
  color: red;
  font-size: 24px;
  font-weight: bold;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  font-size: 20px;
  margin-right: auto;
  padding-left: 10px;
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const CartIcon = styled.i`
  font-size: 20px;
  color: white;
`;

export const CartCount = styled.span`
  background-color: #black;
  color: green;
  padding: 10px;
  border-radius: 50%;
  font-size: 22px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &.active {
    font-weight: bold;
    color: red;
  }
`;

// NavStyles.jsx
