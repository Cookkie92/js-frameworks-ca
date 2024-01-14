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
