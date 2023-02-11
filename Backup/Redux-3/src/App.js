import React from 'react'
import Product from './Product/Product'
import { store } from './redux/store'
import { Provider } from 'react-redux'
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <h1>App Component</h1>
                <hr />
                <Product />
            </Provider>
        </div>
    )
}

export default App
