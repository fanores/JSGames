// Lesson #1: JavaScript with HTML
console.log("Hello, from JS console, from external JS file.");

// Lesson #2: Variables and Datatypes
var number = 10;
console.log(number);

// Lesson #3: Operators
var moduloResult = 3 % 9;
console.log(moduloResult);

console.log(number += 5);

var result = (number < 100) ? 'yes' : 'no';
console.log(result);

// Lesson #4: If statement
var age = prompt('Enter age:');
if (age >= 18) {
    console.log('User is an adult.');
} else if (age <= 18) {
    console.log('User is not an adult.');
} else {
    console.log('Enter a valid number.')
}