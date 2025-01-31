import axios from "axios";
import React, { useState } from "react";

function AddProduct() {
  const [product, setProduct] = useState({
    model: "",
    productCategory: "",
    brandName: "",
    physicalStore: "",
    description: {
      details: "",
      companySite: "",
      email: "",
      supportLocation: "",
    },
  });

  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [message, setMessage] = useState("");

  // Handles text field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handles nested fields in ProductDescription
  const handleDescriptionChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      description: {
        ...prevProduct.description,
        [name]: value,
      },
    }));
  };

  // Handles file selection
  const handleFileChange = (e) => {
    if (e.target.name === "image") {
      setImage(e.target.files[0]);
    } else if (e.target.name === "video") {
      setVideo(e.target.files[0]);
    }
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !video) {
      setMessage("Please upload both an image and a video.");
      return;
    }

    const formData = new FormData();
    formData.append("product", JSON.stringify(product));
    formData.append("image", image);
    formData.append("video", video);

    try {
      const response = await axios.post("http://localhost:8080/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage(`Product added successfully: ${response.data.model}`);
    } catch (error) {
      setMessage(`Error: ${error.response?.data || "Failed to add product"}`);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Product Fields */}
        <input type="text" name="model" placeholder="Model" onChange={handleChange} required />
        <input type="text" name="productCategory" placeholder="Product Category" onChange={handleChange} required />
        <input type="text" name="brandName" placeholder="Brand Name" onChange={handleChange} required />
        <input type="text" name="physicalStore" placeholder="Physical Store" onChange={handleChange} required />

        {/* ProductDescription Fields */}
        <h3>Product Description</h3>
        <input type="text" name="details" placeholder="Details" onChange={handleDescriptionChange} required />
        <input type="text" name="companySite" placeholder="Company Site" onChange={handleDescriptionChange} required />
        <input type="email" name="email" placeholder="Support Email" onChange={handleDescriptionChange} required />
        <input type="text" name="supportLocation" placeholder="Support Location" onChange={handleDescriptionChange} required />

        {/* File Uploads */}
        <input type="file" name="image" accept="image/png, image/jpeg" onChange={handleFileChange} required />
        <input type="file" name="video" accept="video/mp4" onChange={handleFileChange} required />

        <button type="submit">Submit</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AddProduct;
