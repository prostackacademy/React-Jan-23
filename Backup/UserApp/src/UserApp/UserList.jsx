import React, { Component } from 'react'

export class UserList extends Component {
    selUser = (user) => {
        //console.log(user.firstName)
        this.props.selUser(user)
    }
    render() {
        return (
            <div className="row mt-5">
                {/*    <pre>{JSON.stringify(this.props.users)}</pre> */}
                {/*  <h1>User List</h1> */}
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.users.map((user) => {
                                    return <tr key={user.id} onMouseOver={this.selUser.bind(this, user)}>
                                        <td> {user.id} </td>
                                        <td> {user.firstName} </td>
                                        <td> {user.age} </td>
                                        <td> {user.address.city} </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default UserList
