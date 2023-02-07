//what is reducer? reducer is pure function. and It take two arguments 
//as input. 1.state 2.action
import { INCR, DECR } from './product.action'
let initialState = {
    product_Name: "Iphone 8",
    price: 45000,
    qty: 1
}
let productReducer = (state = initialState, action) => {
    console.log("inside - reducer")
    switch (action.type) {
        case "INCR":
            return { ...state, qty: state.qty + 1 }
        case "DECR":
            return {
                ...state,
                qty: state.qty - 1
            }

        default:
            return state
    }
}
export { productReducer }