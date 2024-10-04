console.log("The JS file is working");


let numberCount = 5
let list =[]
let input;
let maxNumber;

for (let i = 0; i < numberCount; i++) {
    input = prompt("Enter a number: ")
    input = Number(input)
    list.push(input)
}

let listLenght = list.length

alert(`The list you created has ${listLenght} numbers inside it: ${list}`)

/*  maxNumber = Math.max(...list) */


maxNumber = list[0]

for (let i = 0; i < list.length; i++) {
    if (list[i] > maxNumber) {
        maxNumber = list[i]
    }
    
}

alert(`The highest is ${maxNumber}`)





















