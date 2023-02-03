//what is reducer?
//reducer is pure function,it takes two parameter 
//1.state,
//2.action
import { GM, GN } from './message.action'
let initialState = {
    msg: "Hello........."
}
let messageReducer = (state = initialState, action) => {
    console.log("Inside Reducer")
    switch (action.type) {
        case GM:
            return { msg: "Hello,Good Morning Rahul Gandhi" }
        case GN:
            return { msg: "Good Night Rahul Gandhi" }
        default:
            return state
    }
}
export { messageReducer }