<?php

// String
$name = "Alice";
echo "My name is " . $name . ".<br>"; // Output: My name is Alice.







// Integer
$age = 25;
echo "I am " . $age . " years old.<br>"; // Output: I am 25 years old.

// Float
$price = 9.99;
echo "The price of this item is $" . number_format($price, 2) . ".<br>"; // Output: The price of this item is $9.99.

// Boolean
$isStudent = true;
echo "Am I a student? " . ($isStudent ? "Yes" : "No") . ".<br>"; // Output: Am I a student? Yes.

// Null
$var = null;
echo "The value of var is " . (is_null($var) ? "null" : "not null") . ".<br>"; // Output: The value of var is null.

// Array
$colors = array("red", "green", "blue", "yellow");
echo "The colors are " . implode(", ", $colors) . ".<br>"; // Output: The colors are red, green, blue, yellow.

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
