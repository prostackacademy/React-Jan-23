let a = [10, 20, 30]

let b = [...a]

let c = a.map((ele) => { return ele })
let d = []

for (value of a) {
    d.push(value)
}
console.log(a)
console.log(b)
console.log(c)
console.log(d)