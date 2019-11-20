const fs = require('fs')
const binaryTree = JSON.parse(fs.readFileSync('./data.json'))

function deep(input, tree){
    let checkInput = true // to check input include in tree
    tree.forEach(el => {
        if(el.id == input){
            checkInput = false
        }
    })

    if(checkInput) return `There's No Input in Tree` //No input in the tree

    let deep = 1
    tree.forEach(element => {
        let upline = input
        let newDeep = 1
        if(element.upline == upline ){
            upline = element.id
            newDeep++
            let innerUpline = upline
            tree.forEach(el => {
                if(el.upline == innerUpline){
                    innerUpline = el.id
                    newDeep++
                }
            })

            if(newDeep > deep){
                deep = newDeep
            }

        }   
    })

    return deep
}

console.log(deep('a', binaryTree))
console.log(deep('cc', binaryTree))
console.log(deep('e', binaryTree))