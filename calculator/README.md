# Calculator

## Documentation

|    Type    | Parameter \| Example |            Result             | Chaining |
| :--------: | :------------------: | :---------------------------: | :------: |
|    add     | num = integer \| 100 |          num \| 100           |   true   |
|  subtract  | num = integer \| 100 |         -num \| -100          |   true   |
|  multiply  | num = integer \| 100 |          num \| 100           |   true   |
|   divide   | num = integer \| 100 |         1/num \| 0.01         |   true   |
|   square   | num = integer \| 100 |   num<sup>2</sup> \| 10000    |   true   |
| squareRoot | num = integer \| 100 | <span>&#8730;</span>num \| 10 |   true   |
|    save    |         none         |            result             |   true   |



## How To Use
1. first you must install node js.
2. open file main.js
3. modify test case with documentation above
4. open terminal
5. run `npm run start`



## Testing

1. open your terminal
2. run `npm install`
3. run `npm run test`

## Example

```javascript
let result = calculate
    .add(10)
    .subtract(5)
    .multiply(10)
    .divide(5)
    .save()
```

from code above is explained that 

10 subtract 5 equal 5 next 

5 multiply 10 equal 50 then  

50 divide 5 equal 10

So, result is 10 