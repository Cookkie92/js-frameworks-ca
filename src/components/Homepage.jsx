// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Homepage = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://api.noroff.dev/api/v1/online-shop")
//       .then((response) => {
//         console.log("API response:", response.data); // Log the API response
//         setProducts(response.data);
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   // Check if products is an array and has items before filtering
//   const filteredProducts = Array.isArray(products)
//     ? products.filter(
//         (product) =>
//           product.title &&
//           product.title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : [];
//   console.log("Filtered products:", filteredProducts);

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
//           <li key={product.id} style={{ marginBottom: "20px" }}>
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <img
//                 src={product.imageUrl} // Replace 'image_url' with the actual property name for your image URL
//                 alt={product.title}
//                 style={{ maxWidth: "10%", marginRight: "10px" }}
//               />
//               <Link to={`/product/${product.id}`}>{product.title}</Link>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Homepage;

// Homepage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import SearchBar from "./SearchBar";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch products from the API
    axios
      .get(" https://api.noroff.dev/api/v1/online-shop")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Homepage;
