import React, { useState } from 'react'
import UserContext from './UserContext'


const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [car, setcar] = useState({})

    return (
        <UserContext.Provider value={{ user, setUser ,car , setcar}}  >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider