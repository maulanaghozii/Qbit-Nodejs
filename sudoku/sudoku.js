"use strict"

class Sudoku {
  constructor(board_string) {
    this.canvas = []
    this.generateBoard(board_string)
  }

  generateBoard(string){
    let k = 0
    for(let i = 0; i < 9; i++){
      this.canvas[i] = []
      for(let j = 0; j < 9; j++){
          this.canvas[i][j] = parseInt(string[k])
          k++
      }
    }
  }

  checkHorizontal(row,number){
    for(let i = 0; i < 9; i++){
      if(parseInt(this.canvas[row][i]) == number){
        return false
      }
    }
    return true
  }

  checkVertical(col, number){
    for(let i = 0; i < 9; i++){
      if(parseInt(this.canvas[i][col]) == number){
        return false
      }
    }
    return true
  }

  check3x3(row, col, number){
    let rowPoint = Math.floor(row/3)*3
    let colPoint = Math.floor(col/3)*3

    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        if(parseInt(this.canvas[rowPoint+i][colPoint+j]) == number)
        return false
      }
    }
    return true
  }

  checkValidation(row, col, number){
    return this.checkHorizontal(row, number) && this.checkVertical(col, number) && this.check3x3(row, col, number)
  }

  solve() {
    let koordinatKosong = []
    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++){
        if(this.canvas[i][j] === 0){
          koordinatKosong.push([i,j])
        }
      }
    }

    for(let i = 0; i < koordinatKosong.length; i++){
      console.clear()
      let x = koordinatKosong[i][0]
      let y = koordinatKosong[i][1]
      let inputNumber = this.canvas[x][y]
      if(inputNumber == 0){
        inputNumber++
      }
      let validation = this.checkValidation(x,y,inputNumber)
      while(!validation){
        if(inputNumber > 8){
          this.canvas[x][y] = 0
          i -= 2
          break
        }
        validation = this.checkValidation(x,y,++inputNumber)
      } 
      if(validation){
        this.canvas[x][y] = inputNumber
      }
    }
  }


  // Returns a string representing the current state of the board
  board() {
    for(let i = 0; i < this.canvas.length; i++){
      console.log(this.canvas[i].join('|'))
    }
    return ''
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
const fs = require('fs')
const board_string = fs.readFileSync('board.solve.txt')
  .toString()
  .split("\n")

board_string.forEach(board => {
  const game = new Sudoku(board)
  game.solve()
  console.log(game.board())
});

function sleep(milliseconds) {
  const start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
          break;
      }
  }
}


