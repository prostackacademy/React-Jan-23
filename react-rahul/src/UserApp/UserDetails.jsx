import React, { Component } from 'react'

class UserDetails extends Component {
    render() {
        return (
            <div>
                {/*  <pre>{JSON.stringify(this.props.user)}</pre> */}
                <h1>User Details</h1>
                <div className="card">
                    <div className="card-header">
                        <img src={this.props.user.image} alt="" />
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">{this.props.user.id}</li>
                            <li className="list-group-item">{this.props.user.firstName}</li>
                            <li className="list-group-item">{this.props.user.bloodGroup}</li>
                            <li className="list-group-item">{this.props.user.ssn}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetails
