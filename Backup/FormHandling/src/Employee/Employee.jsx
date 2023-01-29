import React, { Component } from 'react'
import employees from './data'
class Employee extends Component {
    render() {
        console.log(employees.length)
        return (
            <div>
                <h1>Employee Component</h1>
                <pre>{JSON.stringify(employees)}</pre>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((emp) => {
                                return <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.gender}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Employee
