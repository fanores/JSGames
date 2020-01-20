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

// Lesson $5: Switch statement
var month = prompt('Enter month name:');
switch (month) {
    case 'July':
        console.log('Summer');
        break;
    case 'August':
        console.log('Summer again');
        break;
    default:
        console.log('Other months');
};

// Lesson $6: Function
function showMessageInLog(text) {
    console.log('Message: ' + text);
}

showMessageInLog('Test');

function multipyNumber(number1, number2) {
    return number1 * number2;
}

showMessageInLog(multipyNumber(3, 3));

// Lesson $7: Objects and Methods
var randomPerson = {
    firstName: 'Kevin',
    lastName: 'Random',

    sayName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

showMessageInLog(randomPerson.sayName());

// Lesson #8: String and Number Methods
var myText = 'This is just a string!';
console.log('String length: ' + myText.length);
console.log(myText.replace('just', 'JUST'));

var myNumber = 13;
console.log(myNumber.toString(2)); // binary representation of number

// Lesson #9: Arrays
var myArray = ['Adam', 'Kevin', 'Bob'];
console.log(myArray[0]); // print out 1st item from array

// Lesson #10: Array Functions
console.log('Length of an Array: ' + myArray.length);
myArray.push('Betty'); // insert item at the end
console.log(myArray.sort());
myArray.pop(); // remove last item from array
console.log(myArray.sort());

// Lesson #11: Loops
for (var i = 0; i < 3; i++) {
    console.log('For Loop item: ' + i);
}

var myWhileVariable = 0;
while (myWhileVariable < 3) {
    console.log('While item: ' + myWhileVariable);
    myWhileVariable++;
}

var myDoVariable = 0;
do {
    console.log('Do item: ' + myDoVariable);
    myDoVariable++;
} while (myDoVariable < 3);