let GM = "GM"
let GN = "GN"
let GA = "GA"

let gaAction = () => {
    return { type: GA }
}
let gmAction = () => {
    console.log("Action")
    return { type: GM }
}
let gnAction =
    () => {
        return { type: GN }
    }


export { GM, GA, GN, gmAction, gnAction, gaAction }