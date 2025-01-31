import axios from "axios";

const API_BASE = "http://localhost:8080";

export const getProducts = () => axios.get(`${API_BASE}/products`);
export const createProduct = (product) => axios.post(`${API_BASE}/products`, product);
export const deleteProduct = (id) => axios.delete(`${API_BASE}/products/${id}`);

export const getGreeting = () => axios.get(`${API_BASE}/api/greeting`);
export const getByParam = (name) => axios.get(`${API_BASE}/api/param?name=${name}`);
export const getByHeader = () => axios.get(`${API_BASE}/api/header`, { headers: { "User-Agent": "ReactClient" }});
export const getByPathVariable = (id) => axios.get(`${API_BASE}/api/path/${id}`);
export const getMetadata = () => axios.get(`${API_BASE}/api/metadata`);
