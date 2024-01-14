import styled from "styled-components";

export const ProductContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const ProductTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const DiscountMessage = styled.p`
  font-size: 16px;
  color: #dc3545;
  margin-bottom: 10px;
`;

export const ReviewContainer = styled.div`
  margin-top: 20px;
`;

export const ReviewTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ReviewRating = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ReviewDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ReviewUser = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const AddToCartButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
