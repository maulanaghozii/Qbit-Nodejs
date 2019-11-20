var expect = require('chai').expect

const  Calculator  = require('./calculator.js')

describe('Test features', () => {
  const calc = new Calculator
  it('should test add method', () => {
    const newCalc = calc.add(3).save()
    expect(newCalc).to.equal(3)
  })
  it('should test subtract method', () => {
    const subtract = calc.subtract(1).save()
    expect(subtract).to.equal(2)
  })
  it('should test multiply method', () => {
    const multiply = calc.multiply(11).save()
    expect(multiply).to.equal(22)
  })
  it('should test divide method', () => {
    const divide = calc.divide(2).save()
    expect(divide).to.equal(11)
  })
  it('should test square method', () => {
    const square = calc.square().save()
    expect(square).to.equal(121)
  })
  it('should test square root method', () => {
    const sqroot = calc.squareRoot().save()
    expect(sqroot).to.equal(11)

  })
})
