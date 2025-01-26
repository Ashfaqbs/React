import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const fetchAiResponse = async (question) => {
    try {
        const response = await axios.get(`${BASE_URL}/answer`, {
            params: { question },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching joke:', error);
        throw error; // Re-throw error to handle it in the component
    }
};
