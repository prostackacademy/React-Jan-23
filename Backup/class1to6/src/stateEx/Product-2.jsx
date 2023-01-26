import React, { Component } from 'react'
import imageX from '../assets/images/dontbuy.jpeg'
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_Name: "Iphone 14",
            price: 49999,
            qty: 1,
            image: imageX

        }

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
        return <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <table className="table">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>QTY</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.product_Name}</td>
                                <td><img src={this.state.image} width="40px" alt="" /></td>
                                <td>{this.state.price}</td>
                                <td><i onClick={this.decrHandler} className="fa fa-minus-circle"></i>{this.state.qty}<i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                <td>{this.state.qty * this.state.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}

export default Product
