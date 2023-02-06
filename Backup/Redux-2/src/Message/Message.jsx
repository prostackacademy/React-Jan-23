import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gmAction, gnAction, gaAction } from '../redux/message/message.action'
const Message = () => {
    let dispatch = useDispatch()
    //let msg = "Hello"
    let gmHandler = () => {
        console.log("Test Case 123")
        dispatch(gmAction())
    }
    let msg = useSelector((state) => {
        return state
    })
    return (
        <div>
            <h1>Message Component</h1>
            <h2>Message Value:{JSON.stringify(msg)}</h2>
            <button onClick={gmHandler}>GM</button>
            <button onClick={() => { dispatch(gaAction()) }}>GA</button>
            <button onClick={() => { dispatch(gnAction()) }}>GN</button>
        </div>
    )
}

export default Message
