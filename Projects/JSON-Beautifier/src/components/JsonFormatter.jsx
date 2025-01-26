import React, { useState } from 'react';

const JsonFormatter = () => {
    const [jsonData, setJsonData] = useState('');
    const [fjsonData, setfJsonData] = useState('');
    const handleInputChange = (event) => {
        setJsonData(event.target.value);
    };
    const formatJson = () => {
        try {
            const parsedData = JSON.parse(jsonData);
            const formattedData = JSON.stringify(parsedData, null, 2);
            console.log(formattedData); // You can replace this with your desired output method
            setfJsonData(formattedData)
        } catch (error) {
            console.error('Invalid JSON format:', error.message);
        }
    };

    return (
        <div>
            <textarea
                rows="10"
                cols="50"
                placeholder="Paste your JSON data here"
                value={jsonData}
                onChange={handleInputChange}
            ></textarea>
            <br />
            <button onClick={formatJson}>Format JSON</button>
            <br>

            </br>

            <textarea
                rows="10"
                cols="50"
                value={fjsonData}
            ></textarea>

        </div>
    );
};

export default JsonFormatter;
