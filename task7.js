var firstNumber = Number(prompt("Enter First Number : Here"));
var secondNumber = Number(prompt("Enter Second Number : Here"));
var operator = prompt("Enter The Comparison Operator : Here");
if(operator === "+"){
    console.log(firstNumber + secondNumber)
}else if(operator === '-'){
    console.log(firstNumber - secondNumber)
}else if(operator === '*'){
    console.log(firstNumber * secondNumber)
}else if(operator === '/'){
    console.log(firstNumber / secondNumber)
}else if(operator === '%'){
    console.log(firstNumber % secondNumber)
}