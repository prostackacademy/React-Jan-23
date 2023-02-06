//import action types
import { GM, GN, GA } from './message.action'
//what is reducer? pure function
let initialState = {
    msg: "Hello"
}

let messageReducer = (state = initialState, action) => {
    console.log("Test Case ")
    switch (action.type) {
        case GM: return { msg: "GM Rahul Ji" }
        case GA: return { msg: "Good Noon, Miss Sonia Ji" }
        case GN: return { msg: "GN Modi Ji" }
        default:
            return state
    }
}
export { messageReducer }