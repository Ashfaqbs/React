import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Product Management App</h1>
      <p>Manage your products efficiently.</p>

      <Link to="/products">
        <button>Go to See All Products</button>
      </Link>
    </div>
  );
}

export default Home;
