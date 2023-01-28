import React, { Component } from 'react'

export class Login extends Component {
    state = {
        emailId: "",
        password: ""
    }
    emailHandler = (event) => {
        /*  console.log(event)
         console.log(event.target)
         console.log(event.target.value) */
        this.setState({ emailId: event.target.value })
    }
    passwordHandler = (event) => {
        this.setState({ password: event.target.value })
        /*  console.log(event) */
    }
    submitHandler = (event) => {
        console.log(this.state)
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <h1>Login Form</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.submitHandler}>
                    <label >Email Id:</label>
                    <input type="text" onChange={this.emailHandler} /> <br /><br />
                    <label >Password</label>
                    <input type="text" onChange={this.passwordHandler} /> <br /><br />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default Login
