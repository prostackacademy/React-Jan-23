import React from 'react'
import Employee from './Employee'
class User extends React.Component {
    user = {
        user_Name: "Rahul Gandhi",
        loc: "Wayanad"
    }
    render() {

        return <div>
            <h1>User Coomponent</h1>
            <hr />
            {/*   <Employee one={"Good Morning"} two={"GN"} /> */}
            <Employee user={this.user} />
        </div>
    }
}

export default User