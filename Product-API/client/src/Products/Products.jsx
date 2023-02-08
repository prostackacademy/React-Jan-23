import React from 'react'
import Axios from 'axios'
const Products = () => {
    let [products, setProducts] = React.useState([])
    React.useEffect(() => {
        Axios.get('http://127.0.0.1:5000/api/products')
            .then((resp) => {
                setProducts(resp.data)
            })
            .catch()
    }, [])
    return (
        <div className="container">
            <pre>{JSON.stringify(products)}</pre>
            <div className="row">

                {
                    products.length > 0 ? <>
                        {
                            products.map((product) => {
                                return <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-header">
                                            <img src={product.image} alt="" />
                                        </div>
                                        <div className="card-body"></div>
                                    </div>
                                </div>

                            })
                        }
                    </> : null
                }

            </div>
        </div >
    )
}

export default Products
