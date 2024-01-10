// Product.js
// import React from "react";
// import { Link } from "react-router-dom";

// const Product = ({ product }) => {
//   return (
//     <div>
//       <h3>{product.title}</h3>
//       <p>${product.price}</p>
//       <Link to={`/product/${product.id}`}>View Product</Link>
//     </div>
//   );
// };

// export default Product;

import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Product</Link>
    </div>
  );
};

export default Product;
