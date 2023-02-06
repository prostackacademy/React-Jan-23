import React from 'react'
import { incrAction, decrAction } from '../redux/Product/product.action'
import { useDispatch, useSelector } from 'react-redux'
const Product = () => {
    let dispatch = useDispatch()
    let product = useSelector((state) => {
        return state
    })
    return (
        <div>
            <h1>Product Component</h1>
            <pre>{JSON.stringify(product)}</pre>
            <button>DECR</button><button>INCR</button>
            <i></i>
        </div>
    )
}

export default Product
