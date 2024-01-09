// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import ContactPage from "./components/ContactPage";
import ProductPage from "./components/ProductPage";
import CheckoutPage from "./components/CheckoutPage";
import CheckoutSuccessPage from "./components/CheckoutSuccessPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
