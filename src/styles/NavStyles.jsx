// import styled from "styled-components";

// export const NavContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;
//   background-color: #333; /* Change this to your desired background color */
//   color: white; /* Change this to your desired text color */
// `;

// export const NavLinks = styled.div`
//   display: flex;
//   gap: 20px;
// `;

// export const CartContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   cursor: pointer;
// `;

// export const CartIcon = styled.i`
//   font-size: 20px;
//   /* Adjust the font size as needed */
// `;

// export const CartCount = styled.span`
//   background-color: #007bff; /* Change this to your desired background color */
//   color: white; /* Change this to your desired text color */
//   padding: 5px;
//   border-radius: 50%;
// `;

// import styled from "styled-components";
// import { Link } from "react-router-dom";

// export const NavContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;
//   background-color: #333; /* Change this to your desired background color */
//   color: white; /* Change this to your desired text color */
// `;

// export const NavLinks = styled.div`
//   display: flex;
//   gap: 20px;

//   /* Style for the links inside NavLinks */
//   a {
//     text-decoration: none;
//     color: white;
//   }
// `;

// export const CartContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   cursor: pointer;
// `;

// export const CartIcon = styled.i`
//   font-size: 20px; /* Adjust the font size as needed */
// `;

// export const CartCount = styled.span`
//   background-color: #007bff; /* Change this to your desired background color */
//   color: white; /* Change this to your desired text color */
//   padding: 5px;
//   border-radius: 50%;
// `;

// // Styled component for Link with removed default styles
// export const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: white;
// `;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: white;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  a {
    font-size: 22px;
    text-decoration: none;
    color: white;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const CartIcon = styled.i`
  font-size: 20px;
  color: white; /* Add this to set the color to white */
`;

export const CartCount = styled.span`
  background-color: #black;
  color: white;
  padding: 10px;
  border-radius: 50%;
  font-size: 22px;
`;

// Styled component for Link with removed default styles
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
