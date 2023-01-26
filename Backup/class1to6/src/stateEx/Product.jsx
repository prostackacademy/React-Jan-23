import React, { Component } from 'react'
import imageX from '../assets/images/dontbuy.jpeg'
class Product extends Component {
    state = {
        product: {
            product_Name: "Iphone 14",
            price: 49999,
            qty: 2,
            image: imageX
        },
        user: {}

    }
    decrHandler = () => {
        this.setState({
            product: {
                ...this.state.product, qty: this.state.product.qty - 1
            }
        })
    }
    incrHandler = () => {

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
                                <td>{this.state.product.product_Name}</td>
                                <td><img src={this.state.product.image} width="40px" alt="" /></td>
                                <td>{this.state.product.price}</td>
                                <td><i onClick={this.decrHandler} className="fa fa-minus-circle"></i>{this.state.product.qty}<i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                <td>{this.state.product.qty * this.state.product.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}

export default Product
