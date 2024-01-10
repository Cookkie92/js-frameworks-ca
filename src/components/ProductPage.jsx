// src/components/ProductPage.js
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const ProductPage = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`https://api.noroff.dev/api/v1/online-shop/${productId}`)
//       .then((response) => setProduct(response.data))
//       .catch((error) => console.error("Error fetching product:", error));
//   }, [productId]);

//   const handleAddToCart = () => {
//     // Implement logic to add product to the cart
//     // You may use context, state management, or local storage for cart management
//   };

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   // Calculate discount
//   const discount = product.discountedPrice
//     ? product.price - product.discountedPrice
//     : 0;

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <p>{product.description}</p>
//       <img src={product.imageUrl} alt={product.title} />
//       {product.reviews && (
//         <div>
//           <h2>Reviews</h2>
//           <ul>
//             {product.reviews.map((review, index) => (
//               <li key={index}>{review}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <p>Price: ${product.discountedPrice || product.price}</p>
//       {discount > 0 && <p>Discount: ${discount}</p>}
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductPage;

// ProductPage.js
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useCart } from "../context/CartContext";

// const ProductPage = () => {
//   const { productId } = useParams();
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Make sure productId is defined before making the request
//     if (productId) {
//       axios
//         .get(`https://api.example.com/products/${productId}`)
//         .then((response) => setProduct(response.data))
//         .catch((error) => console.error("Error fetching product:", error));
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

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams
import { useCart } from "../context/CartContext";
import Layout from "./Layout";
const ProductPage = () => {
  const { productId } = useParams(); // Use the useParams hook
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Make sure productId is defined before making the request
    if (productId) {
      console.log("Params:", productId); // Log the value of productId
      axios
        .get(`https://api.noroff.dev/api/v1/online-shop/${productId}`)
        .then((response) => {
          console.log("API response:", response.data);
          setProduct(response.data);
        })
        .catch((error) => console.error("Error fetching product:", error));
    } else {
      console.log("No productId found");
    }
  }, [productId]);

  // Rest of the component...

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

  return (
    <Layout>
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <img src={product.imageUrl} alt={product.title} />
        <p>Price: ${product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </Layout>
  );
};

export default ProductPage;
