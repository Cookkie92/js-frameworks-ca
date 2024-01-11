import React, { createContext, useContext, useReducer, useEffect } from "react";

// Action types
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = "CLEAR_CART";

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, id: state.nextId }],
        nextId: state.nextId + 1,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

// Create context
const CartContext = createContext();

// CartProvider component
const CartProvider = ({ children }) => {
  // Load cart state from local storage
  const storedCart = JSON.parse(localStorage.getItem("cart"));

  // Use a function for initialCartState
  const getInitialCartState = () => ({
    cart: storedCart || [],
    nextId: storedCart
      ? Math.max(...storedCart.map((item) => item.id), 0) + 1
      : 1,
  });

  const [state, dispatch] = useReducer(
    cartReducer,
    undefined,
    getInitialCartState
  );

  // Save cart state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{ cart: state.cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using the cart context
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart, CartContext };
