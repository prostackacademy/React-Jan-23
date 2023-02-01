import React from 'react'
import Employee from './Employee'
const User = () => {
    let user_Name = "Rahul"
    return (
        <div>
            <h1>User Component</h1>
            <h4>User Name:{user_Name}</h4>
            <hr />
            <Employee name={user_Name} />
        </div>
    )
}

export default User
