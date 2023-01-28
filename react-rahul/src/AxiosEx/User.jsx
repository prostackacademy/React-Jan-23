import React, { Component } from 'react'
import Axios from 'axios'
class User extends Component {
    state = {
        users: []
    }
    getData = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                //console.log(response.data)
                console.log(response)
                this.setState({ users: response.data })
            })
            .catch()
    }
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state)}</pre>
                <button onClick={this.getData}>User Data</button>
            </div>
        )
    }
}

export default User
