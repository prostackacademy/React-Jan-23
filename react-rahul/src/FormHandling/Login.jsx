import React, { Component } from 'react'

class Login extends Component {
    state = {
        emailId: "",
        password: ""
    }
    inputHandler = (event) => {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return <div className="container mt-5">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header"></div>
                        <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <input name="emailId" onChange={this.inputHandler} type="text" placeholder="Email ID" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input name="password" onChange={this.inputHandler} type="text" placeholder="Password" className="form-control" />
                                </div>
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Login
