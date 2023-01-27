import React, { Component } from 'react'

class Salary extends Component {
    state = {
        salary: 75000
    }
    updateSalaryHandler = (hike) => {
        this.setState({
            salary: this.state.salary + (this.state.salary * hike / 100)
        })
    }
    render() {
        return (
            <div>
                <h3>Salary:{this.state.salary}</h3>
                <button onClick={this.updateSalaryHandler.bind(this, 100)}>100%</button>
                <button onClick={this.updateSalaryHandler.bind(this, 50)}>50%</button>
                <button onClick={this.updateSalaryHandler.bind(this, 10)}>10%</button>
                <button onClick={this.updateSalaryHandler.bind(this, 0)}>0%</button>
            </div>
        )
    }
}

export default Salary
