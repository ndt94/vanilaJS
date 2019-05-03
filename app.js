// Lesson 5: Log to console

// alert('Hello World');
// console.log('Test');
// console.log(123);
// var greeting = 'Hello';
// console.log(greeting);
// console.table({ a: 1, b: 2 });
// console.error('This is some error');
// console.clear();
// console.warn('This is a warning');
// console.time('Hello');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.timeEnd('Hello');

/*
    multiline
    comment
*/

// Lesson 6: var, let, const

// var name = 'Jone Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// let
// let name = 'Jone Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// const
// const name = 'John';
// console.log(name);
// cannot reassigin
// name = 'Sarah';
// Have to reassign value
// const greeting;

// Lesson 7: Datatypes
// PRIMITIVE
// String
// const name = 'John Doe';

// // Number
// const age = 45;

// // Booleans
// const hasKids = true;

// // Null
// const car = null;

// // Undefined
// let test;

// // Symbols
// const sym = Symbol();

// console.log(typeof name);
// console.log(typeof age);
// console.log(hasKids);
// console.log(car);
// console.log(test);
// console.log(sym);

// // REFERENCE TYPES - Objects
// // Array
// const hobbies = ['movies', 'music'];

// // Object literal
// const address = {
//     city: 'Boston',
//     state: 'MA'
// };

// // Date
// const today = new Date();

// console.log(hobbies, typeof hobbies);
// console.log(address, typeof address);
// console.log(today, typeof today);

// Lesson 8: Type conversion

// let val;

// // Number to string
// val = String(5);
// val = String(4 + 4);

// // Boolean to string
// val = String(true);
// val = String(new Date());

// // Array to string
// val = String([1, 2, 3, 4]);

// // toString()
// val = (5).toString();
// val = true.toString();

// // String to number
// val = Number('5');
// val = Number(true);
// val = Number(null);
// val = Number('hello');
// val = Number([1, 2, 3]);

// val = parseInt('100');
// val = parseFloat('100.30');

// // Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// const val1 = '5';
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum, typeof sum);

// Lesson 9: Number and Math objects
// const num1 = 200;
// const num2 = 50;
// let val;

// // Simple math
// val = num1 + num2;
// val = num1 * num2;
// val = num1 % num2;

// // Math object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-5);
// val = Math.pow(8, 2);
// val = Math.min(2, 33, 4, -2, 5);
// val = Math.max(2, 33, 35, 4);
// val = Math.random();
// console.log(val);

// Lesson 10: String method concatenation
// const firstName = 'William';
// const lastName = 'Nguyen';
// const age = 30;
// let val;

// val = firstName + lastName;
// // Concatenation
// val = firstName + ' ' + lastName;

// // Append
// val = 'Brad';
// val += 'Something';

// // Escaping
// val = "That's awesome, I can't wait";

// // Length
// val = firstName.length;

// // concat
// val = firstName.concat(' ', lastName);

// // Uppercase
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2];

// // indexOf
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// // charAt
// val = firstName.charAt(2);

// // Get last char
// val = firstName.charAt(firstName.length - 1);

// // Substring
// val = firstName.substring(0, 4);

// // Slice
// val = firstName.slice(0, 4);
// val = firstName.slice(-4);

// // Split

// // Replace

// // include

// console.log(val);

// Lesson 11: Template literals
// const name = 'John';
// const age = 31;
// const job = 'Web Developer';
// const city = 'Miami ';
// let html;

// // Without template strings (es5)
// html =
// 	'<ul><li>Name: ' +
// 	name +
// 	'</li><li>Age: ' +
// 	age +
// 	'</li><li>Job: ' +
// 	job +
// 	'</li><li>City: ' +
// 	city +
// 	'</li></ul>';

// // With template strings (es6)
// function hello() {
// 	return 'hello';
// }
// html = `
//     <ul>
//         <li>Name: ${name} </li>
//         <li>Age: ${age} </li>
//         <li>Job: ${job} </li>
//         <li>City: ${city} </li>
//         <li>${2 * 2}</li>
//         <li>${hello()}</li>
//         <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//     </ul>
// `;
// document.body.innerHTML = html;

// Lesson 12: Array and array methods
// Create some arrays
// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22, 45, 33, 76, 54);
// const fruits = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Get a single value
// val = numbers[3];
// val = numbers[0];
// // Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(36);
// // MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1, 1);
// // Reverse array
// numbers.reverse();
// // Concanate array
// val = numbers.concat(numbers2);
// // Sorting array
// val = fruits.sort();
// // Use the compare fucntion
// val = numbers.sort(function(x, y) {
// 	return x - y;
// });
// // Reverse sort
// val = numbers.sort(function(x, y) {
// 	return y - x;
// });
// // Find
// function under50(num) {
// 	return num < 50;
// }
// val = numbers.find(under50);

// console.log(numbers);
// console.log(val);

// Lesson 13: Object literals
// const person = {
// 	firstName: 'Steve',
// 	lastName: 'Smith',
// 	age: 30,
// 	email: 'steve@aol.com',
// 	hobbies: ['music', 'sports'],
// 	address: {
// 		city: 'Miami',
// 		state: 'FL'
// 	},
// 	getBirthYear: function() {
// 		return 2019 - this.age;
// 	}
// };

// let val;
// val = person;
// // Get specific value
// val = person.firstName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies[0];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();
// console.log(val);

// Lesson 14: Dates & Times
// let val;

// const today = new Date();
// const birthday = new Date('7-8-1994 07:08:00');
// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getTime();
// console.log(val);

// Lesson 15: If else statments & Comparison operator
const id = 100;

// Equal to
if (id == 100) {
	console.log('Correct');
} else {
	console.log('Incorrect');
}

// Not equal to
if (id != 100) {
	console.log('Correct');
} else {
	console.log('Incorrect');
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');
