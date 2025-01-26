import React, { useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = React.useContext(UserContext)

    const handleSubmit = (e) => {
        console.log('username : ' + username + ' password is : ' + password)
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div>
            <form>
                Username
                <input type='text' placeholder='username' name='username' value={username} onChange={(e) => { setUsername(e.target.value) }} />
                <br />
                Password
                <input type='text' placeholder='password' name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />

                <br />
                <button onClick={handleSubmit}>

                    Submit
                </button>
            </form>
        </div>
    )
}

export default Login