import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch products.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>All Products</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Model</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Store</th>
              <th>Image</th>
              <th>Video</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.model}</td>
                <td>{product.productCategory}</td>
                <td>{product.brandName}</td>
                <td>{product.physicalStore}</td>
                <td>
                  {product.image && (
                    <img
                      src={`data:image/jpeg;base64,${product.image}`}
                      alt="Product"
                      width="80"
                    />
                  )}
                </td>
                <td>
                  {product.productVideo && (
                    <video width="100" controls>
                      <source src={`data:video/mp4;base64,${product.productVideo}`} type="video/mp4" />
                      Your browser does not support videos.
                    </video>
                  )}
                </td>
                <td>{product.description?.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Products;
