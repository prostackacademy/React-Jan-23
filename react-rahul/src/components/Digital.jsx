import React, { Component } from 'react'

export class Digital extends Component {
    constructor(props) {
        super(props)
        console.log("First const")
        this.state = { ct: new Date().toLocaleTimeString() }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ ct: new Date().toLocaleTimeString() })
        }, [1000])
    }
    componentWillUnmount() {
        console.log("Finally ")
    }
    render() {
        console.log("Second Render method")
        return (
            <div>
                <h1>Digital: {this.state.ct}</h1>

            </div>
        )
    }
}

export default Digital
