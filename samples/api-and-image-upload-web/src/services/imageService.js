// src/services/imageService.js
import axios from 'axios';

/**
 * Uploads an image file to the API and returns the response.
 * @param {File} file - The image file to be uploaded.
 * @returns {Promise<string>} The API response as a string.
 */
export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
        const response = await axios.post('http://localhost:8080/describe-image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data; // Assuming the response contains a plain string
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to upload image.');
    }
};
