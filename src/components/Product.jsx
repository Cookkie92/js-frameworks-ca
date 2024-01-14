// import React from "react";
// import { Link } from "react-router-dom";

// const Product = ({ product }) => {
//   const handleClick = () => {
//     console.log(`View Product clicked for product ID: ${product.id}`);
//   };
//   const discountAmount = product.price - product.discountedPrice;
//   return (
//     <div>
//       <h3>{product.title}</h3>
//       <p>Price: ${product.discountedPrice}</p>
//       {discountAmount > 0 && <p>Discount: ${discountAmount}</p>}
//       <Link to={`/product/${product.id}`} onClick={handleClick}>
//         View Product
//       </Link>
//     </div>
//   );
// };

// export default Product;

import React from "react";
// import { Link } from "react-router-dom";
import {
  CardContainer,
  Title,
  Price,
  Discount,
  StyledLink,
  Image,
} from "../styles/ProductCard";

const Product = ({ product }) => {
  const handleClick = () => {
    console.log(`View Product clicked for product ID: ${product.id}`);
  };

  const discountAmount = product.price - product.discountedPrice;

  return (
    <CardContainer>
      <Image src={product.imageUrl} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>Price: ${product.discountedPrice}</Price>
      {discountAmount > 0 && <Discount>Discount: ${discountAmount}</Discount>}
      <StyledLink to={`/product/${product.id}`} onClick={handleClick}>
        View Product
      </StyledLink>
    </CardContainer>
  );
};

export default Product;
