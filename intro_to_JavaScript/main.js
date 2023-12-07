window.onload = function(){
    alert("Welcome to the website! its cool!!!")
}

var number1 = 34;
var number2 = 21.9;
var string1 = "Noble";
var string2 = "Rodrick";
var boolenValue = true;

var sum = number1 + number2;
var concatenatedString = string1 + string2;
var multiplication = number1 * number2;
var isGreaterThan = number1 > number2;

console.log("Sum: " + sum);
console.log("Concatenated String: " + concatenatedString);
console.log("Multiplied result: " + multiplication);
console.log("Is number1 greater than number2? " + boolenValue);

function addNumbers(num1, num2){
    var sum = num1 + num2;
    return sum
}

console.log("Sum: " + addNumbers(4, 6));
console.log("Sum: " + addNumbers(1002, 28023));

var favFruits = ["apple", "watermelon", "orange", "banana", "grape"];
var person = {
    name: "Nkefor Rodrick",
    age: 15,
    hobby: "reading",
    occupation: "software engineer"
};

function modifyArray(arr, callback){
    var modifiedArray = arr.map(callback);
    return modifiedArray;
}

var numbers = [1, 2, 3, 4, 5];
function square(num){
    return num*num;
}

var squaredNumbers = modifyArray(numbers, square);
console.log("Squared numbers: ", squaredNumbers);