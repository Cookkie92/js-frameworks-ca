// CartStyles.jsx
import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  /* Add your container styles here */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px; /* Adjust margin as needed */
`;

export const CheckoutPageTitle = styled.h1`
  /* Add your title styles here */
`;

export const ProductGrid = styled.div`
  /* Add your product grid styles here */
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  gap: 16px; /* Adjust gap as needed */
`;

export const CartItemContainer = styled.div`
  /* Add your cart item container styles here */
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 100%; /* Take up the full width of the grid cell */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CartItemTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const CartItemPrice = styled.p`
  font-size: 16px;
  color: #007bff;
  margin-bottom: 8px;
`;

export const CartItemBottomSection = styled.div`
  margin-top: auto;
`;

export const CartTotal = styled.p`
  /* Add your cart total styles here */
  margin-top: 20px; /* Adjust margin as needed */
`;

export const CheckoutButton = styled.button`
  /* Add your checkout button styles here */
  /* You can add styles for both enabled and disabled states */
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  margin-top: 20px; /* Adjust margin as needed */
`;
