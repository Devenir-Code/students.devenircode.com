<?php

/* An indexed array is a type of array in PHP where each 
value is assigned an index number, starting with 0. */
// Indexed array
$fruits = array("apple", "banana", "orange");
echo "My favorite fruit is " . $fruits[0] . ".<br>"; // Output: My favorite fruit is apple.


/* An Associative array is a type of array in PHP where 
each value is assigned a unique key that can be used to 
access the value instead of an index number. */
// Associative array
$person = array("name" => "Bob", "age" => 30, "city" => "New York");
echo $person["name"] . " is " . $person["age"] . " years old and lives in " . $person["city"] . ".<br>"; // Output: Bob is 30 years old and lives in New York.


/* A Multidimensional array is a type of array in PHP 
where each element is itself an array, allowing for the 
creation of arrays with multiple levels of data hierarchy.*/
// Multidimensional array
$employees = array(
    array("name" => "Alice", "position" => "Manager", "salary" => 50000),
    array("name" => "Bob", "position" => "Developer", "salary" => 40000),
    array("name" => "Charlie", "position" => "Designer", "salary" => 30000)
);
echo $employees[0]["name"] . " is a " . $employees[0]["position"] . " with a salary of $" . $employees[0]["salary"] . ".<br>"; // Output: Alice is a Manager with a salary of $50000.


// Create an array of fun activities
$activities = array(
    "Playing video games",
    "Going to the beach",
    "Watching movies",
    "Eating pizza",
    "Playing board games"
);

// Shuffle the array
shuffle($activities);

// Output a random activity
echo "Let's do something fun! How about " . $activities[0] . "?";
