import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams
import { useCart } from "../context/CartContext";
const ProductPage = () => {
  const { productId } = useParams(); // Use the useParams hook
  console.log(useParams());
  console.log("Params:", productId);
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
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
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
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.imageUrl} alt={product.title} />
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
