import React from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import UserList from './UserList'
import UserDetails from './UserDetails'
let UserApp = () => {
    let [user, setUser] = React.useState({})
    let [selUser, setSelectedUser] = React.useState({})

    let selectedUser = (user) => {
        setSelectedUser(user)
        console.log(user.firstName)
    }
    useEffect(() => {
        Axios.get('https://dummyjson.com/users')
            .then((response) => {
                setUser(response.data)
            })
            .catch(() => { })
    }, [])
    return <div className="container">
        <pre>{JSON.stringify(user)}</pre>
        <div className="row">
            <div className="col-md-8">
                {
                    Object.keys(user).length > 0 ? <React.Fragment>
                        <UserList users={user.users} propMethod={selectedUser} />
                    </React.Fragment> : null
                }
            </div>
            <div className="col-md-4">
                {
                    Object.keys(selUser).length > 0 ? <>
                        <UserDetails user={selUser} />
                    </> : null
                }
            </div>
        </div>

    </div>
}
export default UserApp