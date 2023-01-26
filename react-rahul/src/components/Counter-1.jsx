import React, { useState } from 'react'

const Counter = () => {
    let [counter, setCounter] = useState(1)
    let incrCounter = () => {
        setCounter(counter + 1)
    }
    let decrCounter = () => {
        setCounter(counter - 1)
    }
    return (
        <div>
            <h2>Counter : {counter}</h2>
            <button onClick={decrCounter}>DECR</button>
            <button onClick={incrCounter}>INCR</button>
        </div>
    )
}

export default Counter
