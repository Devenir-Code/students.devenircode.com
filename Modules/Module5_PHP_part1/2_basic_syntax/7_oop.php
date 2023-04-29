<?php


// Array

$car = [
    "make" => "Ford",
    "model" => "Mustang",
    "color" => "red",
    "sound" => "Vroom!"
];

$car = [
    "make" => "Ford",
    "model" => "Fiesta",
    "color" => "blue",
    "sound" => "Beep!"
];

$car = [
    "make" => "Tesla",
    "model" => "Model S",
    "color" => "black",
    "sound" => "Silence!"
];

// echo the car's make
echo "My car is a " . $car["make"] . " " . $car["model"] . " that is " . $car["color"] . " and I go: " . $car["sound"] . "<br>";





echo '<hr>';


/* OOP is a way of writing code that uses objects to 
group related data and behavior, making it 
easier to write, read, and maintain.*/

// OBJECT ORIENTED PROGRAMMING
class Car
{
    public $make;
    public $model;
    public $color;
    public $doors;

    public function __construct($make, $model, $color = "black", $doors = 4)
    {
        $this->make = $make;
        $this->model = $model;
        $this->color = $color;
        $this->doors = $doors;
    }

    public function getMake()
    {
        return $this->make;
    }

    public function getModel()
    {
        return $this->model;
    }

    public function getColor()
    {
        return $this->color;
    }

    // make car sound
    public function makeSound()
    {

        if ($this->make == "Ford" && $this->model == "Mustang") {
            return "Vroom!";
        } else if ($this->make == "Tesla") {
            return "Silence!";
        } else {
            return "Beep!";
        }
    }

    //status
    public function status()
    {
        return "My car is a " . $this->make . " " . $this->model . " that is " . $this->color . " and I go: " . $this->makeSound() . '<br>';
    }
}

$myCar1 = new Car("Ford", "Mustang", "red");
$myCar2 = new Car("Ford", "Fiesta", "blue");
$myCar3 = new Car("Tesla", "Model S", "black");

$cars = [$myCar1, $myCar2, $myCar3];

// echo "My car is a " . $myCar1->getMake() . " " . $myCar1->getModel() . " that is " . $myCar1->getColor() . "And I go: " . $myCar1->makeSound() . "<br>";
// echo "My car is a " . $myCar1->getMake() . " " . $myCar1->getModel() . " that is " . $myCar1->getColor() . "And I go: " . $myCar1->makeSound() . "<br>";
// echo "My car is a " . $myCar1->getMake() . " " . $myCar1->getModel() . " that is " . $myCar1->getColor() . "And I go: " . $myCar1->makeSound() . "<br>";

// echo out status
foreach ($cars as $car) {
    echo $car->status();
}



// In PHP, you can use inheritance to create a class that 
// inherits properties and methods from another class. 
// Here's an example of how to create a three-level inheritance 
// hierarchy with a PHP class starting from `Animal` down to `Elephant`:



class Animal
{
    public $name;
    public function __construct($name)
    {
        $this->name = $name;
    }
    public function getName()
    {
        return $this->name;
    }
}

class Mammal extends Animal
{
    public $furColor;
    public function __construct($name, $furColor)
    {
        parent::__construct($name);
        $this->furColor = $furColor;
    }
    public function getFurColor()
    {
        return $this->furColor;
    }
}

// ElephantClass.php
class Elephant extends Mammal
{

    public $trunkLength;
    public $canFly;

    public function __construct($name, $furColor, $trunkLength, $canFly = false)
    {
        parent::__construct($name, $furColor);
        $this->trunkLength = $trunkLength;
        $this->canFly = $canFly;
    }

    public function getTrunkLength()
    {
        // convert trunk length to feet to yard
        $this->trunkLength = $this->trunkLength * 3;
        return $this->trunkLength . " feet";
    }

    // write a method about elephants flying
    public function fly()
    {
        return "my name is " . $this->name . " and I can fly!";
    }
}

$elephant = new Elephant("Dumbo", "Gray", 1, true);

echo '<hr>';

echo "Name: " . $elephant->getName() . "<br>";
echo "Fur Color: " . $elephant->getFurColor() . "<br>";
echo "Trunk Length: " . $elephant->getTrunkLength() . "<br>";
echo "Can Fly: " . ($elephant->canFly ? "Yes" : "No") . "<br>";
