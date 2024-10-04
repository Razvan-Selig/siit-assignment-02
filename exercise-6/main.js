console.log("The JS file works");


let input = prompt("How many numbers will you insert?")
input = Number(input)

let numberInput;
let numberList = []

for (let i = 1; i <= input; i++) {
    
    numberInput = prompt(`Input value ${i}`)
    numberList.push(numberInput)


}
console.log(numberList);


let first_div = []
let second_div = []
let third_div = []



for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 3 == 0) {
        first_div.push(i)
    } else if (numberList[i] % 3 == 1) {
         second_div.push(i)
    } else if (numberList[i] % 3 == 2) {
        third_div.push(i)
    } else {
        alert("0 numbers that you provided have the remainder of division by 3 equal to 0, 1 or 2")
    }
    
}

alert(`${first_div.length} numbers that you provided have the remainder of division by 3 equal to 0 \n ${second_div.length} numbers that you provided have the remainder of division by 3 equal to 1 \n ${third_div.length} numbers that you provided have the remainder of division by 3 equal to 2`)
















