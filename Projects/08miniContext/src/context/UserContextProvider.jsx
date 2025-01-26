import React from 'react'
import UserContext from './UserContext'
import { useState } from 'react'

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
            {/* //this will be children component which will be having access to the variables and */}
            {/* //passing variable and setting variables we will implement by provider   */}
        </UserContext.Provider>
    )

}

export default UserContextProvider