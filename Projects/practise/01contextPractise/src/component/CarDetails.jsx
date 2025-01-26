import React, { useState } from 'react';
import UserContext from '../context/UserContext';
const CarDetails = () => {
    // State to manage form fields
    const { setcar } = React.useContext(UserContext)
    const [carDetails, setCarDetails] = useState({
        make: '',
        model: '',
        year: '',
        color: '',
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCarDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can do something with the carDetails state here, like sending it to a server
        console.log('Form submitted:', carDetails);
        setcar(carDetails)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Make:
                <input
                    type="text"
                    name="make"
                    value={carDetails.make}
                    onChange={handleInputChange}
                />
            </label>
            <br />

            <label>
                Model:
                <input
                    type="text"
                    name="model"
                    value={carDetails.model}
                    onChange={handleInputChange}
                />
            </label>
            <br />

            <label>
                Year:
                <input
                    type="text"
                    name="year"
                    value={carDetails.year}
                    onChange={handleInputChange}
                />
            </label>
            <br />

            <label>
                Color:
                <input
                    type="text"
                    name="color"
                    value={carDetails.color}
                    onChange={handleInputChange}
                />
            </label>
            <br />

            <button type="submit">Submit</button>
        </form>
    );
};


export default CarDetails