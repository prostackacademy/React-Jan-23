import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gmAction, gnAction } from '../redux/Message/message.action'
const Message = () => {
    let dispath = useDispatch()
    let message = useSelector((state) => {
        return state
    })
    let gmHandler = () => {
        dispath(gmAction())
    }
    let gnHandler = () => {
        dispath(gnAction())
    }
    return (
        <div>
            <pre>{JSON.stringify(message)}</pre>
            <h2>Message:{message.msg}</h2>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    )
}

export default Message
