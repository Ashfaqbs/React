import React from 'react'
import UserContext from '../context/UserContext'

function User() {

    const { user } = React.useContext(UserContext)

    if (!user) return <div>Please Log in</div>

    return <div>Welcome {user.username}</div>
}

export default User