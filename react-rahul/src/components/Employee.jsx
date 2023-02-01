import React, { useState } from 'react'

const Employee = (props) => {
    const [name, setName] = useState(props.name)
    let [sister, setSister] = useState('Priyanka')
    return (
        <div>
            <h1>Employee Comp</h1>
            <h4>Employee Name:{props.name}</h4>
            <h4>Sister Name:{sister}</h4>
            <button onClick={() => {
                console.log("Jodo")
                setName("Rahul Gandhi")
            }}>Change Name</button>
            <button onClick={()=>{setSister("P Vadra")}} >Change Sister Name</button>
        </div>
    )
}

export default Employee
