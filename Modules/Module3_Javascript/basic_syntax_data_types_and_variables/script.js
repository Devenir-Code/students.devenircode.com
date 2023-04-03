debugger

//Primitive Data Types:

/*
data types that are built into the language and cannot be broken down into simpler types
*/

// String
let name = "John Doe";
let message = 'Hello, world!';

// Numbers
let age = 30; // integer (whole number)
let price = 9.99; // Float 

//careful with floats - they can behave funny
let float = 0.1 + 0.2; // Output: 0.30000000000000004
let fixedFloat = (0.1 + 0.2).toFixed(2); // Output: 0.30
let precisionFloat = (0.1 + 0.2).toPrecision(2) //Output: '0.30'

console.log(float + fixedFloat) // so weird? but they are strings at this point

console.log((0.1 + 0.2).toFixed(20)) // again careful

// thats odd? not what i might have suspected
fixedFloat + precisionFloat //strings 
parseFloat(fixedFloat) + parseFloat(precisionFloat) // Numbers

// Boolean
let isTrue = true;
let isFalse = false;

// Null and undefined
let myNull = null; // a variable has been intentionally assigned no value
let myUndefined; // a variable has been declared but has not been assigned a value
// both cases they are absence of a value

// BigInt
let bigInt1 = 9007199254740991n;
let bigInt2 = BigInt("9007199254740991");



//Non-Primitive Data Types:

/*
more complex data types that are created by the programmer using combinations of primitive data types and other non-primitive data types.
*/

// Object
let person1 = {
  name: "Bob",
  age: 30,
};

let person2 = {
  name: "Charlie",
  age: 30,
};

let person3 = {
  name: "Ellen",
  age: 30,
};

// Array
const people = [
  person1, 
  person2,
  person3,
  {
    name: "Jill",
    age: 30,
  }
 
]; 

// Function
function getPerson(name, people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].name === name) {
      return people[i];
    }
  }
  return null;
}

getPerson('Danielle', people)

