<?php

// Comments
// single line comment

# single line comment

/*
    This is a multi-line comment block
    that spans over multiple
    lines
*/


// Output and Functions
$name = "Jill";
//single quotes
echo 'Single, ' . $name . '!<br>';

/*
In this example, the variable name is not evaluated,
because the variable is enclosed in single quotes
*/
echo 'Hello, $name!<br>';

//double quotes
echo "Hello, $name!<br>";
echo "Hello, " . $name . "!<br>"; // Works the same as above


/* 
multiline strings
*/
echo "Hello, $name!!!!
How are you?
I hope everything is going well. <br>";

echo '<pre>';

// echo "Hello, $name!!!!

// How are you?

// I hope everything is going well. <br>";

// echo '<hr>';



// print
print "Hello, " . $name . "!";

// print_r
$colors = ["red", "green", "blue", "yellow"];
// print_r($colors);

echo '<hr>';

// var_dump
$person = [
    "name" => "Bob",
    "age" => 30,
    "city" => "New York"
];


// var_dump($person);
// var_dump("Hello, World!");

echo gettype($person);

echo '</pre>';
