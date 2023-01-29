import React, { Component } from 'react'
class Message extends Component {
    state;
    constructor(props) {
        super(props);
        this.state = {
            msg: "Hello"
        }
    }
    updateHandler = (value) => {
        this.setState({
            msg: value
        })
    }
    render() {
        return (
            <div>
                <h1>Message:{this.state.msg}</h1>
                <button onClick={this.updateHandler.bind(this, "Good Morning")}>GM</button>
                <button onClick={this.updateHandler.bind(this, "Good Afternoon")}>GA</button>
                <button onClick={this.updateHandler.bind(this, "Good Night")}>GN</button>
            </div>
        )
    }
}

export default Message
