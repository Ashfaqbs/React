import React, { useState } from 'react';
import { uploadImage } from '../services/imageService'; // Image service

const AIComponent = () => {
    const [file, setFile] = useState(null); // For file upload
    const [fileResponse, setFileResponse] = useState(''); // For file API response
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(''); // Error state

    // Upload File and Get Response
    const uploadFile = async () => {
        if (!file) {
            setError('Please select a file to upload.');
            return;
        }
        setLoading(true);
        setError('');
        setFileResponse('');
        try {
            const response = await uploadImage(file); // Call service to upload file
            setFileResponse(response);
        } catch (err) {
            setError('Failed to upload the file.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 rounded-lg shadow-md border max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">AI Image Analysis</h2>

            {/* File Upload Section */}
            <div>
                <h3 className="text-lg font-bold mb-4">Upload an Image</h3>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="block w-full mb-4"
                />
                <button
                    onClick={uploadFile}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full"
                >
                    Upload and Get Description
                </button>
                {loading && <p className="mt-4 text-gray-500">Loading...</p>}
                {error && <p className="mt-4 text-red-500">{error}</p>}
                {fileResponse && <p className="mt-4 text-blue-600">{fileResponse}</p>}
            </div>
        </div>
    );
};

export default AIComponent;
