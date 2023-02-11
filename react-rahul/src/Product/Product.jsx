import React from 'react'
import { incrAction, decrAction } from '../redux/Product/product.action'
import { useSelector, useDispatch } from 'react-redux'
const Product = () => {
    let dispatch = useDispatch();
    let Product = useSelector((state) => {
        return state;
    })
    return (
        <div className="container">
            <pre>{JSON.stringify(Product)}</pre>
            <div className="row">
                <div className="col-md-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Name</td>
                                {/*    <td>Image</td> */}
                                <td>Price</td>
                                <td>Qty</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{Product.product_Name}</td>
                                <td>{Product.price}</td>
                                <td><i onClick={() => { dispatch(decrAction()) }} className="fa fa-minus-circle"></i>{Product.qty} <i className="fa fa-plus-circle" onClick={() => { dispatch(incrAction()) }}></i> </td>
                                <td>{Product.qty * Product.price} </td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Product
