<?php


/* OOP is a way of writing code that uses objects to 
group related data and behavior, making it 
easier to write, read, and maintain.*/

// OBJECT ORIENTED PROGRAMMING
class Car {
    public $make;
    public $model;
    public $color;

    public function __construct($make, $model, $color) {
        $this->make = $make;
        $this->model = $model;
        $this->color = $color;
    }

    public function getMake() {
        return $this->make;
    }

    public function getModel() {
        return $this->model;
    }

    public function getColor() {
        return $this->color;
    }
}

$myCar = new Car("Ford", "Mustang", "red");
echo "My car is a " . $myCar->getMake() . " " . $myCar->getModel() . " that is " . $myCar->getColor() . ".<br><br><br>"; // Output: My car is a Ford Mustang that is red.

