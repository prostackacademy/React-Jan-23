import React, { Component } from 'react'
import UserList from './UserList'
import UserDetails from './UserDetails'
import Axios from 'axios'
export class UserApp extends Component {
    state = {
        user: {},
        selectedUser: {}
    }
    selectedUser = (user) => {
        console.log(user.firstName)
        this.setState({ selectedUser: user })
    }
    componentDidMount() {
        Axios.get('https://dummyjson.com/users')
            .then((response) => {
                this.setState({ user: response.data })
            })
            .catch(() => { })
    }
    render() {
        return <div className="container">
            {/* <pre>{JSON.stringify(this.state.user)}</pre> */}
            {/*  <pre>{JSON.stringify(this.state.selectedUser)}</pre> */}
            <div className="row">
                <div className="col-md-8">

                    {
                        Object.keys(this.state.user).length > 0 ? <> <UserList users={this.state.user.users} selUser={this.selectedUser} /></> : null
                    }
                </div>
                <div className="col-md-4">

                    {
                        Object.keys(this.state.selectedUser).length > 0 ? <>   <UserDetails user={this.state.selectedUser} />
                        </> : null
                    }
                </div>
            </div>
        </div>
    }
}

export default UserApp
