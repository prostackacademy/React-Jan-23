import { createStore } from "redux";
import { messageReducer } from './Message/message.reducer'
import { composeWithDevTools } from '@redux-devtools/extension'
//how to create a store
let store = createStore(messageReducer, composeWithDevTools())

export { store }