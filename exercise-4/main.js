console.log("The JS file works");


let randomNumber1 = Math.floor(Math.random() * 10) + 1
let randomNumber2 = Math.floor(Math.random() * 10) + 1

const operator = ["-", "+", "*"]


let randomOperator = Math.floor(Math.random() * operator.length)
let randomIndex = operator[randomOperator]

let equation;
let correctAnswer;
console.log( randomNumber1, randomIndex, randomNumber2);



switch (randomIndex) {
    case "+":
        equation = randomNumber1 + " " + randomIndex + " " + randomNumber2
        correctAnswer = randomNumber1 + randomNumber2
        break;
    case "-":
        equation = randomNumber1 + " " + randomIndex + " " + randomNumber2
        correctAnswer = randomNumber1 - randomNumber2
        break;
    case "*":
        equation = randomNumber1 + " " + randomIndex + " " + randomNumber2
        correctAnswer = randomNumber1 * randomNumber2
        break;

    default:
        break;
}


let input = prompt(`What is the answer to this equation?\n${equation} = `)
input = Number(input)

if (input == correctAnswer) {
    alert("The answer is correct")
} else {
    alert(`The answer is wrong. The correct answer is ${correctAnswer}`)
}