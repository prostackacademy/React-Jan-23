import React, { Component } from 'react'

class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            mobile: ""
        }
    }
    inputHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return <div className="container mt-5">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">

                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <h4>Registration Page</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.submitHandler} >
                                <div className="form-group">
                                    <input onChange={this.inputHandler} name="name" className="form-control" type="text" placeholder="User Name" />
                                </div>
                                <div className="form-group">
                                    <input onChange={this.inputHandler} name="email" className="form-control" type="text" placeholder="Email Id" />
                                </div>
                                <div className="form-group">
                                    <input onChange={this.inputHandler} name="password" className="form-control" type="text" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <input onChange={this.inputHandler} name="mobile" className="form-control" type="text" placeholder="Mobile" />
                                </div>
                                <input type="submit" className="btn btn-success" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Registration
