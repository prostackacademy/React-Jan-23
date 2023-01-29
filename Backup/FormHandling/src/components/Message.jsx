import React from 'react'
const Message = () => {
    //let [var, fun]  = useState()
    let [msg, setMsg] = React.useState("Hello")
    return (
        <div>

            <h1>Message Comp</h1>
            <h2>Message Value:{msg}</h2>
            <button onClick={() => { setMsg('Good Morning') }}>GM</button>
            <button onClick={() => {
                setMsg("Good Night")
            }}>GN</button>

        </div>
    )
}

export default Message
