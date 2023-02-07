import React from 'react'
import { incrAction, decrAction } from '../redux/Product/product.action'
import { useDispatch, useSelector } from 'react-redux'
const Product = () => {
    let dispatch = useDispatch()
    let product = useSelector((state) => {
        return state
    })
    let incrHandler = () => {
        //dispatch an action? how to dispatch an action - useDispatch hook
        dispatch(incrAction())
    }
    let decrHandler = () => {
        dispatch(decrAction())
    }
    return (
        <div>
            <h1>Product Component</h1>
            <pre>{JSON.stringify(product)}</pre>
            <button onClick={decrHandler}>DECR</button>
            {product.qty}
            <button onClick={incrHandler}>INCR</button>
            <i></i>
        </div>
    )
}

export default Product
