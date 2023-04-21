<?php


/* A conditional statement allows for different 
lines of code to be executed depending on whether a 
certain condition is true or false. */
// Conditional Statements
$age = 25;
if ($age < 18) {
    echo "You are a minor.<br>"; // Output: You are a minor.
} else if ($age >= 18 && $age < 60) {
    echo "You are an adult.<br>"; // Output: You are an adult.
} else {
    echo "You are a senior citizen.<br>"; // Output: You are a senior citizen.
}



/* A Ternary operator is a shorthand way of writing a 
simple if-else statement in a single line of code, 
allowing for more concise and readable code. */
// Ternary Operator
$age = 25;
echo "You are " . ($age < 18 ? "a minor" : "an adult") . ".<br>"; // Output: You are an adult.



/* A Switch statement is a programming construct in PHP 
that allows for multiple cases to be evaluated against a 
single value, executing the code block associated with the 
first matching case. */
// Switch Statements
$age = 20;
switch ($age) {
    case 18:
        echo "You are 18 years old.<br>"; // Output: You are 18 years old.
        break;
    case 25:
        echo "You are 25 years old.<br>"; // Output: You are 25 years old.
        break;
    case 30:
        echo "You are 30 years old.<br>"; // Output: You are 30 years old.
        break;
    default:
        echo "Your age is not listed.<br>"; // Output: Your age is not listed.
}
