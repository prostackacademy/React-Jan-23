//import action types
import { USER_REQ, USER_SUCCESS, USER_FAILURE } from './user.action'
let initialState = {}
let userReducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_REQ:
            return { user: "" }
        case USER_SUCCESS:
            return { user: action.payload }
        case USER_FAILURE:
            return { user: "No Records" }
        default:
            return state
    }
}
export { userReducer }