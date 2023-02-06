import { productReducer } from './Product/product.reducer'
import { createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
let store = createStore(productReducer, composeWithDevTools())

export { store }