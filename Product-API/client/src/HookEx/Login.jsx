import React, { useRef } from 'react'
import Sign from './Sign'
const Login = () => {
    let refBtn = useRef();
    let updateCheckBox = (event) => {
        //console.log(event.target.checked)
        refBtn.current.disabled = !event.target.checked
    }
    return <div className="container mt-5">
        <div className="row">
            <div className="col-5">
                <div className="card">
                    <div className="card-header">
                        <h4>Login</h4>
                    </div>
                    <div className="card-body">
                        <form >
                            <div className="form-group">
                                <input placeholder="Email Id" type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" className="form-check" onChange={updateCheckBox} />
                                <label >Please Accept Terms & Conditions</label>
                            </div>
                            <div className="form-group">
                                <input type="submit" ref={refBtn} value="Login" className="btn btn-success" disabled />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <Sign />
            </div>
        </div>
    </div>
}

export default Login
