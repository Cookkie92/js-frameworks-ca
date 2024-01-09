// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import ContactPage from "./components/ContactPage";
import CheckoutSuccessPage from "./components/CheckoutSuccessPage";
// import ContactPage from "./components/CheckoutPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/Checkout" component={CheckoutPage} />
          {/* Add other routes for ProductPage, CheckoutPage, CheckoutSuccessPage */}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
