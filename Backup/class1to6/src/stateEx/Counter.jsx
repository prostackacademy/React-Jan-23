import React, { Component } from 'react'

class Counter extends Component {
    state = {
        product_Name: "Iphone 5s",
        price: 25000,
        qty: 1
    }
    decrHandler = () => {
        this.setState({
            qty: this.state.qty - 1
        })
    }
    incrHandler = () => {
        this.setState({
            qty: this.state.qty + 1
        })
    }
    render() {
        return (
            <div>
                <h1>QTY:{this.state.qty}</h1>
                <button onClick={this.decrHandler}>DECR</button>
                <button onClick={this.incrHandler}>INCR</button>
            </div>
        )
    }
}

export default Counter
