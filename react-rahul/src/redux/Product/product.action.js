let INCR = 'INCR'
let DECR = 'DECR'
let incrAction = () => {
    return { type: INCR }
}
let decrAction = () => {
    return { type: DECR }
}

export { incrAction, decrAction, INCR, DECR }

//what is redux action?
//action is function, it return actionable object