import { useSelector, useDispatch } from 'react-redux'
import { incrAction, decrAction } from '../redux/Product/product.action'
let Product = () => {
    let dispatch = useDispatch()
    let product = useSelector((state) => {
        return state
    })

    return <div>
        <pre>{JSON.stringify(product)}</pre>
        <button onClick={() => { dispatch(decrAction()) }}>DECR</button>
        {product.qty
        }
        <button onClick={() => { dispatch(incrAction()) }}>INCR</button>
    </div>
}
export default Product