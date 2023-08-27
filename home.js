const prompt = require("prompt-sync")({sigint: true});
let Result
let a = Number(prompt("Please type first number "));
console.log (`First number is ` + a);
const operator = prompt('Please type operator ' )
let b = Number(prompt('Please type second number '));
console.log("Second number is " + b);
if (operator == "+") {
    Result = a + b;}
else if (operator == "-"){
    Result = a - b;}
else if (operator == "*"){
    Result = a * b;}
else if (operator == "/" ){
    Result = a / b;}
else {
        console.log("The value is invalid")
    }
    console.log(`The result is ${Result}`);