import React from 'react'
import { store } from './redux/store'
import Message from './Message/Message'
import Counter from './Counter/Counter'
import { Provider } from 'react-redux'
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <Message />
                <hr />
                <Counter />
            </Provider>

        </div>
    )
}

export default App
