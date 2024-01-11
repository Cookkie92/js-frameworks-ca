// src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Homepage from "./components/Homepage";
// import ContactPage from "./components/ContactPage";
// import ProductPage from "./components/ProductPage";
// import CheckoutPage from "./components/CheckoutPage";
// import CheckoutSuccessPage from "./components/CheckoutSuccessPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Layout>
//               <Homepage />
//             </Layout>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <Layout>
//               <ContactPage />
//             </Layout>
//           }
//         />
//         <Route
//           path="/product/:id"
//           element={
//             <Layout>
//               <ProductPage />
//             </Layout>
//           }
//         />
//         <Route
//           path="/checkout"
//           element={
//             <Layout>
//               <CheckoutPage />
//             </Layout>
//           }
//         />
//         <Route
//           path="/checkout-success"
//           element={
//             <Layout>
//               <CheckoutSuccessPage />
//             </Layout>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import ContactPage from "./components/ContactPage";
import ProductPage from "./components/ProductPage";
import CheckoutPage from "./components/CheckoutPage";
import CheckoutSuccessPage from "./components/CheckoutSuccessPage";
import { CartProvider } from "./context/CartContext"; // Import CartProvider
// import Product from "./components/Product";

function App() {
  return (
    <Router>
      <CartProvider>
        {" "}
        {/* Wrap your Routes with CartProvider */}
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Homepage />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <ContactPage />
              </Layout>
            }
          />
          <Route
            key={window.location.pathname}
            path="/product/:productId"
            element={
              <Layout>
                <ProductPage />
              </Layout>
            }
          />
          <Route
            path="/checkout"
            element={
              <Layout>
                <CheckoutPage />
              </Layout>
            }
          />
          <Route
            path="/checkout-success"
            element={
              <Layout>
                <CheckoutSuccessPage />
              </Layout>
            }
          />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
