import { productReducer } from './Product/product.reducer'

import { composeWithDevTools } from '@redux-devtools/extension'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from './rootReducer'
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export { store }