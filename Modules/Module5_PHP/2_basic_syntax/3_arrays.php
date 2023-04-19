<?php

// Indexed array
$fruits = array("apple", "banana", "orange");
echo "My favorite fruit is " . $fruits[0] . ".<br>"; // Output: My favorite fruit is apple.

// Associative array
$person = array("name" => "Bob", "age" => 30, "city" => "New York");
echo $person["name"] . " is " . $person["age"] . " years old and lives in " . $person["city"] . ".<br>"; // Output: Bob is 30 years old and lives in New York.

// Multidimensional array
$employees = array(
    array("name" => "Alice", "position" => "Manager", "salary" => 50000),
    array("name" => "Bob", "position" => "Developer", "salary" => 40000),
    array("name" => "Charlie", "position" => "Designer", "salary" => 30000)
);
echo $employees[0]["name"] . " is a " . $employees[0]["position"] . " with a salary of $" . $employees[0]["salary"] . ".<br>"; // Output: Alice is a Manager with a salary of $50000.
