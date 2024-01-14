// HomePage.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import {
  HomePageContainer,
  ProductGrid,
  SearchContainer,
  SearchInput,
} from "../styles/HomePageStyles";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch products from the API
    axios
      .get("https://api.noroff.dev/api/v1/online-shop")
      .then((response) => {
        // Log the products to the console
        console.log("Fetched products:", response.data);
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <HomePageContainer>
      <h1>Products</h1>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      <ProductGrid>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductGrid>
    </HomePageContainer>
  );
};

export default Homepage;
