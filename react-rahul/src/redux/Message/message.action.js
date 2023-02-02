//What is action

//action is function, it return actionable object
//create Action types
let GM = 'GM'
let GN = 'GN'
let gmAction = () => {
    console.log("gm Action - take idly")
    return { type: GM }
}
let gnAction = () => {
    console.log("gn action - take ....")
    return { type: GN }
}
export { gmAction, gnAction, GM, GN }