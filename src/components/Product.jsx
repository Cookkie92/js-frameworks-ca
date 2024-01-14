import React from "react";
import {
  CardContainer,
  Title,
  Price,
  Discount,
  StyledLink,
  Image,
  BottomSection, // Import the new style
} from "../styles/ProductCard";

const Product = ({ product }) => {
  const handleClick = () => {
    console.log(`View Product clicked for product ID: ${product.id}`);
  };

  const discountAmount = product.price - product.discountedPrice;

  return (
    <CardContainer>
      <Image src={product.imageUrl} alt={product.title} />

      <BottomSection>
        <Title>{product.title}</Title>
        <Price>Price: ${product.discountedPrice}</Price>
        {discountAmount > 0 && <Discount>Discount: ${discountAmount}</Discount>}
        <StyledLink to={`/product/${product.id}`} onClick={handleClick}>
          View Product
        </StyledLink>
      </BottomSection>
    </CardContainer>
  );
};

export default Product;
