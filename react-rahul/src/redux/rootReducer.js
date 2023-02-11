import { productReducer } from './Product/product.reducer'
import { userReducer } from './User/user.reducer'
import { combineReducers } from 'redux'

let rootReducer = combineReducers({ product: productReducer, user: userReducer })


export { rootReducer }