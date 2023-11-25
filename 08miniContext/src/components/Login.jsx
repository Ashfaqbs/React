import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState(' ')
    const [pass, setPass] = useState('')
    const { setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        console.log(username, pass);
        e.preventDefault()
        setUser({ username, pass })
    }
    return (
        <div>


            <label>userName: </label>
            <input type="text" name='user' value={username} onChange={(e) => { setUsername(e.target.value) }} /> <br />
            <label>Pass: </label>
            <input type="text" name='user' value={pass} onChange={(e) => { setPass(e.target.value) }} /> <br />

            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default Login