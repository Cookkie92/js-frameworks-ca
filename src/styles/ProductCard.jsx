import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 200px;
  display: flex;
  flex-direction: column; /* Display items in a column */
  align-items: center; /* Center items horizontally */
  text-align: center; /* Center text */
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Price = styled.p`
  font-size: 16px;
  color: #007bff;
  margin-bottom: 8px;
`;

export const Discount = styled.p`
  font-size: 16px;
  color: #dc3545;
  margin-bottom: 8px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 8px; /* Adjust the margin as needed */
`;

// Additional style for the bottom section
export const BottomSection = styled.div`
  margin-top: auto; /* Push to the bottom of the container */
`;
