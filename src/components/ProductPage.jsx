// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom"; // Import useParams
// import { useCart } from "../context/CartContext";
// const ProductPage = () => {
//   const { productId } = useParams(); // Use the useParams hook
//   console.log(useParams());
//   console.log("Params:", productId);
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Make sure productId is defined before making the request
//     if (productId) {
//       console.log("Params:", productId); // Log the value of productId
//       axios
//         .get(`https://api.noroff.dev/api/v1/online-shop/${productId}`)
//         .then((response) => {
//           console.log("API response:", response.data);
//           setProduct(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching product:", error);
//         });
//     } else {
//       console.log("No productId found");
//     }
//   }, [productId]);

//   // Rest of the component...

//   const handleAddToCart = () => {
//     if (product) {
//       addToCart({
//         id: product.id,
//         title: product.title,
//         price: product.price,
//       });
//     }
//   };

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   const discountAmount = product.price - product.discountedPrice;

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <p>{product.description}</p>
//       <img src={product.imageUrl} alt={product.title} />
//       <p>Price: ${product.price}</p>
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductPage;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// const ProductPage = () => {
//   const { productId } = useParams();
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     if (productId) {
//       axios
//         .get(`https://api.noroff.dev/api/v1/online-shop/${productId}`)
//         .then((response) => {
//           setProduct(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching product:", error);
//         });
//     } else {
//       console.log("No productId found");
//     }
//   }, [productId]);

//   const handleAddToCart = () => {
//     if (product) {
//       addToCart({
//         id: product.id,
//         title: product.title,
//         price: product.price,
//       });
//     }
//   };

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   const discountAmount = product.price - product.discountedPrice;

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <p>{product.description}</p>
//       <img src={product.imageUrl} alt={product.title} />
//       <p>Price: ${product.price}</p>
//       {discountAmount > 0 && <p>Discount: ${discountAmount}</p>}
//       <button onClick={handleAddToCart}>Add to Cart</button>
//       {product.reviews && (
//         <div>
//           <h2>Reviews:</h2>
//           {product.reviews.map((review) => (
//             <div key={review.id}>
//               <p>Rating: {review.rating}</p>
//               <p>{review.description}</p>
//               <p>By: {review.username}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductPage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  ProductContainer,
  ProductTitle,
  ProductDescription,
  ProductImage,
  ProductPrice,
  DiscountMessage,
  ReviewContainer,
  ReviewTitle,
  ReviewRating,
  ReviewDescription,
  ReviewUser,
  AddToCartButton,
} from "../styles/ProductPageStyle";

const ProductPage = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      axios
        .get(`https://api.noroff.dev/api/v1/online-shop/${productId}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    } else {
      console.log("No productId found");
    }
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
      });
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const discountAmount = product.price - product.discountedPrice;

  return (
    <ProductContainer>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductImage src={product.imageUrl} alt={product.title} />
      <ProductPrice>Price: ${product.price}</ProductPrice>
      {discountAmount > 0 && (
        <DiscountMessage>Discount: ${discountAmount}</DiscountMessage>
      )}

      {product.reviews && (
        <ReviewContainer>
          <ReviewTitle>Reviews:</ReviewTitle>
          {product.reviews.map((review) => (
            <div key={review.id}>
              <ReviewRating>Rating: {review.rating}</ReviewRating>
              <ReviewDescription>{review.description}</ReviewDescription>
              <ReviewUser>By: {review.username}</ReviewUser>
            </div>
          ))}
        </ReviewContainer>
      )}

      <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
    </ProductContainer>
  );
};

export default ProductPage;
