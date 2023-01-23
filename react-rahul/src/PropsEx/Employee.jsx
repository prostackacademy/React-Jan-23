import React from 'react'

class Employee extends React.Component {
    render() {

        return <div>
            <h1>Employee Coomponent</h1>
            <pre>{JSON.stringify(this.props)}</pre>
            <h3>Employee Name:{this.props.user.user_Name}</h3>
            <h3>Loc:{this.props.user.loc}</h3>
            <button className="btn btn-success">Test</button>
        </div>
    }
}

export default Employee