import React from 'react'
import UserContext from '../context/UserContext'
function Details() {
    const { user, car } = React.useContext(UserContext)

    if (user.username) return (<div>Details of the user username: {user.username ? user.username : 'not submitted'} and password:  {user.password ? user.password : 'not submitted'}
        <br />
        Car Details : make {car.make}
        model :  {car.model}
        year : {car.year}
        color : {car.color}

    </div>)

    return (
        <span>User has not logged in !</span>
    )
}

export default Details