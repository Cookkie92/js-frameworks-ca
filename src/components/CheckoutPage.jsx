import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import {
  CartTotal,
  CheckoutButton,
  CartItemContainer,
  CartItemTitle,
  CartItemPrice,
  CartItemBottomSection,
  CheckoutPageContainer,
  CheckoutPageTitle,
  ProductGrid,
} from "../styles/CartStyles";

const CheckoutPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Check if there are items in the cart before proceeding with checkout
    if (cart.length === 0) {
      // Display an alert or some indication that the cart is empty
      alert("Your cart is empty. Add items before checking out.");
      return;
    }

    // Simulate checkout logic
    setTimeout(() => {
      // Clear the cart before navigating to checkout success
      clearCart();

      // Navigate to the checkout success page
      navigate("/checkout-success");
    }, 1000);
  };

  return (
    <CheckoutPageContainer>
      <CheckoutPageTitle>Cart</CheckoutPageTitle>
      <ProductGrid>
        {cart.map((item) => (
          <CartItemContainer key={item.id}>
            <CartItemTitle>{item.title}</CartItemTitle>

            <CartItemPrice>Price: ${item.price}</CartItemPrice>
            <button onClick={() => removeFromCart(item.id)}>
              Remove from Cart
            </button>
            <CartItemBottomSection />
          </CartItemContainer>
        ))}
      </ProductGrid>
      <CartTotal>
        Total: ${cart.reduce((total, item) => total + item.price, 0)}
      </CartTotal>
      <CheckoutButton disabled={cart.length === 0} onClick={handleCheckout}>
        Checkout
      </CheckoutButton>
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
