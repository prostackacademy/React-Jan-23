import React, { useState } from 'react'

const Counter = () => {
    let [counter, setCounter] = useState(1)

    return (
        <div>
            <h2>Counter : {counter}</h2>
            <button onClick={() => { setCounter(counter - 1) }}>DECR</button>
            <button onClick={() => { setCounter(counter + 1) }}>INCR</button>
        </div>
    )
}

export default Counter
