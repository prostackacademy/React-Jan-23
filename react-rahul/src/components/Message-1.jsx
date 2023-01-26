//import React, {useState} from 'react'
import React from 'react'
const Message = () => {
    let [qty, setQty] = React.useState(0)
    let [msg, setMsg] = React.useState("Hello")
    let [users, setUsers] = React.useState([10, 20, 30])
    let [product, setProduct] = React.useState({ name: "Iphone", price: 10 })
    return (
        <div>

            <h1>Message Comp</h1>
            <h2>{qty}</h2>
            <h2>{msg}</h2>
            <h2>{users}</h2>
            <h2>{JSON.stringify(product)}</h2>
        </div>
    )
}

export default Message
