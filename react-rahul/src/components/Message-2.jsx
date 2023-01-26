import React from 'react'
const Message = () => {
    //let [var, fun]  = useState()
    let [msg, setMsg] = React.useState("Hello")
    let gmHandler = () => {
        setMsg("Good Morning! Rahul Gandhi")
    }
    let gnHandler = () => {
        setMsg("Good Night! Rahul Gandhi")
    }
    return (
        <div>

            <h1>Message Comp</h1>
            <h2>Message Value:{msg}</h2>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>

        </div>
    )
}

export default Message
