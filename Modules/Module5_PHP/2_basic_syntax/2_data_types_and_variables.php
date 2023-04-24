<?php

/* A PHP string is a sequence of characters that represents 
text or data in a program. */
// String
$name = "Alice";
echo "My name is " . $name . ".<br>"; // Output: My name is Alice.


/*An integer is a numeric data type 
that represents whole numbers in a program. */
// Integer
$age = 25;
echo "I am " . $age . " years old.<br>"; // Output: I am 25 years old.


/* A float, or floating-point number, 
is a numeric data type that represents real numbers 
(i.e., numbers with decimal places) in a program. */
// Float
$price = 9.99;
echo "The price of this item is $" . number_format($price, 2) . ".<br>"; // Output: The price of this item is $9.99.


/* A boolean is a data type that represents a 
binary value of true or false, often used for 
logical comparisons and decision-making in a program. */
// Boolean
$isStudent = true;
echo "Am I a student? " . ($isStudent ? "Yes" : "No") . ".<br>"; // Output: Am I a student? Yes.


/* Null is a special data type in PHP that represents 
a variable with no value or a variable that has been 
explicitly set to null. */
// Null
$var = null;
echo "The value of var is " . (is_null($var) ? "null" : "not null") . ".<br>"; // Output: The value of var is null.


/* An Array is a collection of values that can be accessed 
and manipulated using a single variable name. */
// Array
$colors = array("red", "green", "blue", "yellow");
echo "The colors are " . implode(", ", $colors) . ".<br>"; // Output: The colors are red, green, blue, yellow.


// Constants
define("PI", 3.14);
echo PI; // Output: 3.14

/* An Object is a data type that represents a complex data 
structure made up of properties and methods, allowing for 
more advanced programming techniques such as 
object-oriented programming. */
// Object
class Person
{
    public $name;
    public $age;
    public function __construct($name, $age)
    {
        $this->name = $name;
        $this->age = $age;
    }
}
$person = new Person("Bob", 30);
echo "The person's name is " . $person->name . " and age is " . $person->age . ".<br>"; // Output: The person's name is Bob and age is 30.
