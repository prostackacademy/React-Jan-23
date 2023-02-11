import { useSelector, useDispatch } from 'react-redux'
import { incrAction, decrAction } from '../redux/Product/product.action'
let Product = () => {
    let dispatch = useDispatch()
    let product = useSelector((state) => {
        return state
    })

    return <div className="container">
        <div className="row">
            <pre>{JSON.stringify(product)}</pre>
            <div className="col-md-6">
                <table className="table table-hover">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> {product.product_Name}</td>
                            <td> {product.price}</td>
                            <td> <i onClick={() => {
                                dispatch(decrAction())
                            }} className="fa fa-minus-circle"></i> {product.qty}<i className="fa fa-plus-circle" onClick={() => {
                                dispatch(incrAction())
                            }}></i></td>
                            <td> {product.qty * product.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
export default Product