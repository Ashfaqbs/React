import React, { useEffect, useState } from "react";
import { createProduct, deleteProduct, getProducts } from "../services/apiService";

const CRUDComponent = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: "", price: "" });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        getProducts().then((res) => {
            setProducts(res.data);
        });
    };

    const handleAddProduct = () => {
        if (!newProduct.name || !newProduct.price) {
            alert("Please enter valid name and price.");
            return;
        }

        createProduct({ ...newProduct, price: parseFloat(newProduct.price) }).then(() => {
            setNewProduct({ name: "", price: "" });
            fetchProducts();
        });
    };

    const handleDeleteProduct = (id) => {
        deleteProduct(id).then(() => {
            fetchProducts();
        });
    };

    return (
        <div>
            <h2>CRUD Operations</h2>

            {/* Add Product Form */}
            <div>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
                <button onClick={handleAddProduct}>Add Product</button>
            </div>

            {/* Product List */}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ₹{product.price}
                        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CRUDComponent;
