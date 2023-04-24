<?php
// OOP class
class Person {
    public $name;
    public $age;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    //Function
    public function greet() {
        echo "Hello, my name is " . $this->name . " and I am " . $this->age . " years old.<br>";
    }
}

// Array
$people = array(
    new Person("Alice", 25),
    new Person("Bob", 30),
    new Person("Charlie", 35),
    new Person("David", 40)
);

// Loop and Conditional Statement
foreach ($people as $person) {
    if ($person->age > 27) {
        echo $person->greet();
    }
}
?>
