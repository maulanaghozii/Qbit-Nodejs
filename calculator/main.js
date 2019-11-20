'use strict'

const Calculator = require('./calculator')

const calculate = new Calculator()

//TEST CASE
let result = calculate
    .add(10)
    .subtract(5)
    .multiply(10)
    .divide(5)
    .save()

function print(result){
    console.log(result)
}

function calculator(result, cb){
    return cb(result)
}

calculator(result, print)