
import Axios from 'axios'
//create action types
let USER_REQ = 'USER_REQ'
let USER_SUCCESS = 'USER_SUCCESS'
let USER_FAILURE = 'USER_FAILURE'


let user_Success = (user) => {
    console.log(user)
    return { type: USER_SUCCESS, payload: user }
}
let user_Failure = () => {
    return { type: USER_FAILURE, message: "Error- go Biryani" }
}
let userAction = () => {
    console.log("Test Case 123")
    return async (dispatch) => {
        Axios.get('https://dummyjson.com/user')
            .then((response) => {
                dispatch(user_Success(response.data))
            })
            .catch(() => {
                dispatch(user_Failure())
            })
    }
}

export { userAction, USER_REQ, USER_SUCCESS, USER_FAILURE }