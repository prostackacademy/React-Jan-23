import React from 'react'

const UserList = (props) => {
    let selUser = (user) => {
       
        props.propMethod(user)
    }
    return (
        <div className="row">
            <pre>{JSON.stringify(props)}</pre>
            <div className="col-md-8">
                <table className="table table-hover">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            props.users.map((user) => {
                                return <tr key={user.id} onClick={selUser.bind(this, user)}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                </tr>
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div >
    )
}

export default UserList
