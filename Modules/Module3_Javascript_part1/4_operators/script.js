// Arithmetic operators:
ArithmeticOperators();
function ArithmeticOperators() {
    debugger
    let x = 10;
    let y = 5;
    
    console.log(x + y); // Output: 15
    console.log(x - y); // Output: 5
    console.log(x * y); // Output: 50
    console.log(x / y); // Output: 2
    console.log(x % y); // Output: 0 (because 10 is evenly divisible by 5)    
}

// Increment and decrement operators:
IncrementAndDecrementOperators()
function IncrementAndDecrementOperators() {
    debugger
    let x = 1;

    x= 1+x; 
    x = x+1;

    ++x; //(pre-increment)
    x++; //(post-increment)

    console.log(x);   

    --x; // (pre-decrement)
    x--; // (post-decrement)

    x= 1-x; 
    x = x-1;

    console.log(x); 
}
  
// Assignment operators
AssignmentOperators()
function AssignmentOperators() {
    debugger


    let x = 10;
    
    x += 5;
    console.log(x); // Output: 15
    
    x -= 3;
    console.log(x); // Output: 12
    
    x *= 2;
    console.log(x); // Output: 24
    
    x /= 3;
    console.log(x); // Output: 8
    
    x %= 5;
    console.log(x); // Output: 3
     
}


// Comparison operators:
comparisonOperators()
function comparisonOperators() {
    debugger 

    // 10 vs 5
    // 'a' vs 'A'
    // '5' vs 5
    // 10 vs 10

    let x = 10;
    let y = 5;

    // Comparison operators
    let looseEquality = x == y;
    let strictEquality = x === y;

    let looseInequality = x != y;
    let strictInequality = x !== y;

    let lessThan = x < y;
    let lessThanOrEqualTo = x <= y;

    let greaterThan = x > y;
    let greaterThanOrEqualTo = x >= y;
}




// Logical operators:
logicalOperators()
function logicalOperators(params) {
    debugger

    let x = 10;
    let y = 5;
    
    console.log(x > 5 && y < 10);  
    console.log(x < 5 || y > 10);  
    console.log(!(x == y));   
}
     



// Ternary Operator:
ternaryOperator()
function ternaryOperator() {
    debugger

    let x = 10;
    let y = 5;

    // Which one is greater?
    let result = (x > y) ? "x is greater than y" : "y is greater than or equal to x";
    console.log(result); // Output: "x is greater than y"

    //Is Even?
    let isEven = x % 2 === 0 ? "Even" : "Odd";
    console.log(isEven); // Output: "Odd"

    // Can Vote?
    let age = 18;
    let canVote = age >= 18 ? "Yes" : "No";
    console.log("Can vote? " + canVote); // Output: "Can vote? Yes"
}





// Comma operator:
commaOperator()
function commaOperator(params) {
    debugger


    let x = 10, y = 5;
    
    console.log(x, y); // Output: 10 5    
}


