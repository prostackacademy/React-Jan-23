import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { userAction } from '../redux/User/user.action'
const User = () => {
    let [user, setUser] = React.useState({})
    let userData = useSelector(state => state.user)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(userAction())
    }, [])
    return (
        <div className="container">
            <pre>{JSON.stringify(userData)}</pre>
            <h1>User Comp</h1>
            <div className="component">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(userData).length > 0 ? <>
                                        {
                                            userData.user.users.map((user) => {
                                                return <tr>

                                                    <td>{user.id}</td>
                                                </tr>
                                            })
                                        }
                                    </> : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
