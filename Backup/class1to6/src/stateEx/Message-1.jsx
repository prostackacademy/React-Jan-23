import React, { Component } from 'react'

class Message extends Component {
    msg = "Hello"
    gmHandler = () => {
        console.log("inside handler")
        this.msg = "Good Morning Rahul"
        console.log(this.msg)
        this.forceUpdate()
    }
    render() {
        return (
            <div>
                <h1>Message value:{this.msg}</h1>
                <button onClick={this.gmHandler}>GM</button>
            </div>
        )
    }
}

export default Message
