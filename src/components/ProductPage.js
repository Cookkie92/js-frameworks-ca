// src/components/ProductPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.noroff.dev/api/v1/online-shop/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  const handleAddToCart = () => {
    // Implement logic to add product to the cart
    // You may use context, state management, or local storage for cart management
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  // Calculate discount
  const discount = product.discountedPrice
    ? product.price - product.discountedPrice
    : 0;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
      {product.reviews && (
        <div>
          <h2>Reviews</h2>
          <ul>
            {product.reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        </div>
      )}
      <p>Price: ${product.discountedPrice || product.price}</p>
      {discount > 0 && <p>Discount: ${discount}</p>}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
