// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Homepage = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://api.noroff.dev/api/v1/online-shop")
//       .then((response) => setProducts(response.data))
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   // Check if products is an array and has items before filtering
//   const filteredProducts = Array.isArray(products)
//     ? products.filter((product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : [];

//   return (
//     <div>
//       <h1>Welcome to our Online Shop!</h1>
//       <p>Discover a variety of products below:</p>

//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>
//             <Link to={`/product/${product.id}`}>{product.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Homepage;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://api.noroff.dev/api/v1/online-shop")
      .then((response) => {
        console.log("API response:", response.data); // Log the API response
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Check if products is an array and has items before filtering
  const filteredProducts = Array.isArray(products)
    ? products.filter(
        (product) =>
          product.title &&
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  console.log("Filtered products:", filteredProducts);

  return (
    <div>
      <h1>Welcome to our Online Shop!</h1>
      <p>Discover a variety of products below:</p>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
