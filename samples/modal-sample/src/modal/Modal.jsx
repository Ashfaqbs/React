import axios from "axios";
import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render if modal is closed

    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/data", formData);
            alert("Data submitted successfully!");
            onClose(); // Close modal after submission
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Submit Data</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" >Submit</button>
                </form>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
