// CartStyles.jsx
import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
`;

export const CheckoutPageTitle = styled.h1``;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

export const CartItemContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
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
  margin-top: 20px;
`;

export const CheckoutButton = styled.button`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  margin-top: 20px;
`;
