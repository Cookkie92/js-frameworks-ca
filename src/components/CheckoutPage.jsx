// // CheckoutPage.jsx
// import React from "react";
// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";
// import { CartItem, CartTotal, CheckoutButton } from "../styles/CartStyles";

// const CheckoutPage = () => {
//   const { cart, removeFromCart, clearCart } = useCart();
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     // Check if there are items in the cart before proceeding with checkout
//     if (cart.length === 0) {
//       // Display an alert or some indication that the cart is empty
//       alert("Your cart is empty. Add items before checking out.");
//       return;
//     }

//     // Perform your checkout logic here
//     // For example, you can simulate a delay with setTimeout
//     // and then navigate to the checkout success page

//     // Simulate checkout logic
//     setTimeout(() => {
//       // Clear the cart before navigating to checkout success
//       clearCart();

//       // Navigate to the checkout success page
//       navigate("/checkout-success");
//     }, 1000); // Simulate a 1-second delay (adjust as needed)
//   };

//   return (
//     <div>
//       <h1>Checkout</h1>
//       {cart.map((item) => (
//         <CartItem key={item.id}>
//           <p>
//             {item.title} - ${item.price}
//           </p>
//           <button onClick={() => removeFromCart(item.id)}>
//             Remove from Cart
//           </button>
//         </CartItem>
//       ))}
//       <CartTotal>
//         Total: ${cart.reduce((total, item) => total + item.price, 0)}
//       </CartTotal>
//       <CheckoutButton disabled={cart.length === 0} onClick={handleCheckout}>
//         Checkout
//       </CheckoutButton>
//     </div>
//   );
// };

// export default CheckoutPage;

// import React from "react";
// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";
// import { ProductGrid } from "../styles/ProductCardStyles"; // Adjust the path as needed
// import { CartItem, CartTotal, CheckoutButton } from "../styles/CartStyles";
// import {
//   ProductCardContainer,
//   ProductTitle,
//   ProductPrice,
//   ProductImage,
//   ProductBottomSection,
// } from "../styles/ProductCardStyles";

// const CheckoutPage = () => {
//   const { cart, removeFromCart, clearCart } = useCart();
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     // Check if there are items in the cart before proceeding with checkout
//     if (cart.length === 0) {
//       // Display an alert or some indication that the cart is empty
//       alert("Your cart is empty. Add items before checking out.");
//       return;
//     }

//     // Perform your checkout logic here
//     // For example, you can simulate a delay with setTimeout
//     // and then navigate to the checkout success page

//     // Simulate checkout logic
//     setTimeout(() => {
//       // Clear the cart before navigating to checkout success
//       clearCart();

//       // Navigate to the checkout success page
//       navigate("/checkout-success");
//     }, 1000); // Simulate a 1-second delay (adjust as needed)
//   };

//   return (
//     <div>
//       <h1>Checkout</h1>
//       <ProductGrid>
//         {cart.map((item) => (
//           <ProductCardContainer key={item.id}>
//             <ProductTitle>{item.title}</ProductTitle>
//             <ProductImage src={item.imageUrl} alt={item.title} />
//             <ProductPrice>Price: ${item.price}</ProductPrice>
//             <button onClick={() => removeFromCart(item.id)}>
//               Remove from Cart
//             </button>
//             <ProductBottomSection />
//           </ProductCardContainer>
//         ))}
//       </ProductGrid>
//       <CartTotal>
//         Total: ${cart.reduce((total, item) => total + item.price, 0)}
//       </CartTotal>
//       <CheckoutButton disabled={cart.length === 0} onClick={handleCheckout}>
//         Checkout
//       </CheckoutButton>
//     </div>
//   );
// };

// export default CheckoutPage;

// import React from "react";
// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";
// import { ProductGrid } from "../styles/ProductCard";
// import { CartTotal, CheckoutButton } from "../styles/CartStyles";
// import {
//   CardContainer,
//   Title,
//   Price,
//   Image,
//   BottomSection,
// } from "../styles/ProductCard"; // Updated the import to use correct names

// const CheckoutPage = () => {
//   const { cart, removeFromCart, clearCart } = useCart();
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     // Check if there are items in the cart before proceeding with checkout
//     if (cart.length === 0) {
//       // Display an alert or some indication that the cart is empty
//       alert("Your cart is empty. Add items before checking out.");
//       return;
//     }

//     // Perform your checkout logic here
//     // For example, you can simulate a delay with setTimeout
//     // and then navigate to the checkout success page

//     // Simulate checkout logic
//     setTimeout(() => {
//       // Clear the cart before navigating to checkout success
//       clearCart();

//       // Navigate to the checkout success page
//       navigate("/checkout-success");
//     }, 1000); // Simulate a 1-second delay (adjust as needed)
//   };

//   return (
//     <div>
//       <h1>Checkout</h1>
//       <ProductGrid>
//         {cart.map((item) => (
//           <CardContainer key={item.id}>
//             <Title>{item.title}</Title>
//             <Image src={item.imageUrl} alt={item.title} />
//             <Price>Price: ${item.price}</Price>
//             <button onClick={() => removeFromCart(item.id)}>
//               Remove from Cart
//             </button>
//             <BottomSection />
//           </CardContainer>
//         ))}
//       </ProductGrid>
//       <CartTotal>
//         Total: ${cart.reduce((total, item) => total + item.price, 0)}
//       </CartTotal>
//       <CheckoutButton disabled={cart.length === 0} onClick={handleCheckout}>
//         Checkout
//       </CheckoutButton>
//     </div>
//   );
// };

// export default CheckoutPage;

// import React from "react";
// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";
// import { ProductGrid } from "../styles/CartStyles"; // Adjust the path as needed
// // Update the import statements for CartTotal and CheckoutButton
// import {
//   ProductGrid,
//   CardContainer,
//   Title,
//   Price,
//   Image,
//   BottomSection,
//   CartTotal,
//   CheckoutButton,
// } from "../styles/CartStyles";

// import { CartTotal, CheckoutButton } from "../styles/CartStyles";

// const CheckoutPage = () => {
//   const { cart, removeFromCart, clearCart } = useCart();
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     // Check if there are items in the cart before proceeding with checkout
//     if (cart.length === 0) {
//       // Display an alert or some indication that the cart is empty
//       alert("Your cart is empty. Add items before checking out.");
//       return;
//     }

//     // Perform your checkout logic here
//     // For example, you can simulate a delay with setTimeout
//     // and then navigate to the checkout success page

//     // Simulate checkout logic
//     setTimeout(() => {
//       // Clear the cart before navigating to checkout success
//       clearCart();

//       // Navigate to the checkout success page
//       navigate("/checkout-success");
//     }, 1000); // Simulate a 1-second delay (adjust as needed)
//   };

//   return (
//     <div>
//       <h1>Checkout</h1>
//       <ProductGrid>
//         {cart.map((item) => (
//           <CardContainer key={item.id}>
//             <Title>{item.title}</Title>
//             <Image src={item.imageUrl} alt={item.title} />
//             <Price>Price: ${item.price}</Price>
//             <button onClick={() => removeFromCart(item.id)}>
//               Remove from Cart
//             </button>
//             <BottomSection />
//           </CardContainer>
//         ))}
//       </ProductGrid>
//       <CartTotal>
//         Total: ${cart.reduce((total, item) => total + item.price, 0)}
//       </CartTotal>
//       <CheckoutButton disabled={cart.length === 0} onClick={handleCheckout}>
//         Checkout
//       </CheckoutButton>
//     </div>
//   );
// };

// export default CheckoutPage;

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

    // Perform your checkout logic here
    // For example, you can simulate a delay with setTimeout
    // and then navigate to the checkout success page

    // Simulate checkout logic
    setTimeout(() => {
      // Clear the cart before navigating to checkout success
      clearCart();

      // Navigate to the checkout success page
      navigate("/checkout-success");
    }, 1000); // Simulate a 1-second delay (adjust as needed)
  };

  return (
    <CheckoutPageContainer>
      <CheckoutPageTitle>Cart</CheckoutPageTitle>
      <ProductGrid>
        {cart.map((item) => (
          <CartItemContainer key={item.id}>
            <CartItemTitle>{item.title}</CartItemTitle>
            {/* <CartItemImage src={item.imageUrl} alt={item.title} /> */}
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
