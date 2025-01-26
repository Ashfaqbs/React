// LoginForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            // Add your login logic here (e.g., API call to the server)
            // For simplicity, we'll just log the credentials for now
            console.log('Username:', username);
            console.log('Password:', password);

            // Reset form fields
            setUsername('');
            setPassword('');
            setError('');

            if (username == 'ashu' && password == 'ashu') {
                navigate('/');
            } else {
                navigate('/accessDenied');
                setError('Incorrect Credentials. Please try again.');
            }

        } catch (error) {
            console.error('An error occurred:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <hr />
            <pre>

                {content}

            </pre>
        </div>
    );
};

export default LoginForm;

const content = `

// LoginForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            // Add your login logic here (e.g., API call to the server)
            // For simplicity, we'll just log the credentials for now
            console.log('Username:', username);
            console.log('Password:', password);

            // Reset form fields
            setUsername('');
            setPassword('');
            setError('');

            if (username == 'ashu' && password == 'ashu') {
                navigate('/');
            } else {
                navigate('/accessDenied');
                setError('Incorrect Credentials. Please try again.');
            }

        } catch (error) {
            console.error('An error occurred:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <hr />
            <pre>



            </pre>
        </div>
    );
};

export default LoginForm;

 `
