import React from 'react'

const Product = () => {
    let [product, setProduct] = React.useState({
        product_Name: "Iphoe 99",
        price: 45000,
        qty: 1
    })
    return (
        <div>
            <h1>Qty:{product.qty}</h1>
            <button onClick={() => {
                setProduct({ qty: product.qty - 1 })
            }}>-</button>
            <button onClick={() => {
                setProduct({
                    qty: product.qty + 1
                })
            }}>+</button>
        </div>
    )
}

export default Product
