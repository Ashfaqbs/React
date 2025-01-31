import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Home from "./components/Home";
import Products from "./components/Products"; // Import the new page

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/add-product">Add Product</Link> | 
        <Link to="/products">View Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products" element={<Products />} />  {/* New Route */}
      </Routes>
    </Router>
  );
}

export default App;
