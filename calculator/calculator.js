'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.pi     = Math.PI
    this.result = 0
  }
  add (num) {
    this.result += num
    return this
  }
  subtract (num) {
    this.result -= num
    return this
  }
  multiply (num) {
    if(this.result === 0){
      this.result = 1
    }
    this.result *= num
    return this
  }
  divide (num) {
    if(this.result === 0){
      this.result = 1
    }
    this.result /= num
    return this
  }
  square (num) {
    if(num){
      this.result += Math.pow(num, 2)
    } else {
      this.result = Math.pow(this.result, 2)
    }
    return this
  }
  squareRoot (num) {
    if(num){
      this.result +=  Math.sqrt(num)
    } else {
      this.result = Math.sqrt(this.result)
    }
    return this
  }

  save(){
    return this.result
  }
}


/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator