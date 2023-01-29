import React, { Component } from 'react'

class Login extends Component {
    render() {
        return <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header"></div>
                        <div className="card-body">
                            <form>
                                <div>
                                    <input type="text" placeholder="Email ID" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Password" />
                                </div>
                                <input type="submit" value="Login" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Login
