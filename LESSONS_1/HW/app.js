// MODULE: main
let temperature = require("./temperature.json")
let type = require("./type.js")
let math = require("./math.js")
let arrayTemperatureNumber = new Array()

temperature.forEach(number => {
    if (type.checkType(number)) {
      arrayTemperatureNumber.push(number)
    }
})

const sum = arrayTemperatureNumber.reduce((accumulator, currentValue) => {
    return math.add(accumulator, currentValue)
}, 0)
let averageTemp = math.div(sum, arrayTemperatureNumber.length)
console.log("Average temperature:", averageTemp)

let sub = math.sub(averageTemp, 20)
let div = math.div(sub, 20)
let mul = math.mul(div, 100)

console.log("Margin of error:", -(mul), "%")
