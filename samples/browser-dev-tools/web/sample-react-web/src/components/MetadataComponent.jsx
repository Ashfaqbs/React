import React, { useState } from "react";
import { getByHeader, getByParam, getByPathVariable, getGreeting, getMetadata } from "../services/apiService";

const MetadataComponent = () => {
    const [response, setResponse] = useState(null);

    const fetchGreeting = () => getGreeting().then(res => setResponse(res.data));
    const fetchByParam = () => getByParam("Ashfaq").then(res => setResponse(res.data));
    const fetchByHeader = () => getByHeader().then(res => setResponse(res.data));
    const fetchByPath = () => getByPathVariable(123).then(res => setResponse(res.data));
    const fetchMetadata = () => getMetadata().then(res => setResponse(res.data));

    return (
        <div>
            <h2>Metadata & Headers Testing</h2>
            <button onClick={fetchGreeting}>Get Greeting</button>
            <button onClick={fetchByParam}>Get by Param</button>
            <button onClick={fetchByHeader}>Get by Header</button>
            <button onClick={fetchByPath}>Get by Path Variable</button>
            <button onClick={fetchMetadata}>Get Metadata</button>

            {response && (
                <div>
                    <h3>Response:</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default MetadataComponent;
