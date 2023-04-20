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




// In PHP, you can use inheritance to create a class that inherits properties and methods from another class. Here's an example of how to create a three-level inheritance hierarchy with a PHP class starting from `Animal` down to `Elephant`:


 
  class Animal {
    public $name;
    public function __construct($name) {
      $this->name = $name;
    }
    public function getName() {
      return $this->name;
    }
  }

  class Mammal extends Animal {
    public $furColor;
    public function __construct($name, $furColor) {
      parent::__construct($name);
      $this->furColor = $furColor;
    }
    public function getFurColor() {
      return $this->furColor;
    }
  }

  class Elephant extends Mammal {
    public $trunkLength;
    public function __construct($name, $furColor, $trunkLength) {
      parent::__construct($name, $furColor);
      $this->trunkLength = $trunkLength;
    }
    public function getTrunkLength() {
      return $this->trunkLength;
    }
  }

  $elephant = new Elephant("Dumbo", "Gray", 2);
  echo "Name: " . $elephant->getName() . "\n";
  echo "Fur Color: " . $elephant->getFurColor() . "\n";
  echo "Trunk Length: " . $elephant->getTrunkLength() . "\n";
 

// In this example, we have created three classes: `Animal`, `Mammal`, and `Elephant`. The `Mammal` class extends the `Animal` class and inherits its properties and methods. The `Elephant` class extends the `Mammal` class and inherits its properties and methods.

// We have also created an instance of the `Elephant` class named `$elephant` and assigned it the values `"Dumbo"`, `"Gray"`, and `2`. We can then use the inherited methods to access the properties of the `$elephant` object.

// Is there anything else you would like to know about inheritance in PHP?