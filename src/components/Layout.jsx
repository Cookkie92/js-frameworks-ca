// src/components/Layout.js
// import React from "react";
// import { Link } from "react-router-dom";

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <header>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//             {/* Add more navigation items based on your pages */}
//           </ul>
//         </nav>
//         <div className="cart-icon">
//           {/* You can add your cart icon here */}
//           {/* For example: <img src="cart-icon.png" alt="Cart" /> */}
//           {/* You can also add a counter for the number of items in the cart */}
//         </div>
//       </header>

//       <main>{children}</main>

//       <footer>&copy; 2024 My Ecom Store</footer>
//     </div>
//   );
// };

// export default Layout;

// Layout.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
