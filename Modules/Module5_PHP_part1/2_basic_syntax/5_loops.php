<?php


/* FOR Loops execute a block of code a fixed number of times */
// FOR LOOPS
for ($i = 1; $i <= 5; $i++) {
    echo $i . "<br>";
}




/* WHILE Loops execute a block of code 
while a certain condition is true */
//WHILE
$targetNumber = rand(1, 10); // Generate random number between 1 and 10
$guesses = 0; // Initialize guesses counter to 0

while (true) {
    $guesses++; // Increment guesses counter on each iteration
    $guess = rand(1, 10); // Generate a new random guess
    
    echo "Guess #" . $guesses . ": " . $guess . "<br>"; // Output current guess
    
    if ($guess == $targetNumber) {
        echo "Congratulations! You guessed the number " . $targetNumber . " in " . $guesses . " tries.<br>"; // Output success message and number of tries
        break; // End loop
    }
}




/* FOREACH Loops are used to iterate over each element 
in an array or collection. */
//FOREACH LOOP
$grades = array(
    "Alice" => 85,
    "Bob" => 72,
    "Charlie" => 93,
    "David" => 68,
    "Eve" => 91
);

$total = 0; // Initialize total to 0
$count = 0; // Initialize count to 0

foreach ($grades as $name => $grade) {
    echo $name . " - " . $grade . "<br>"; // Output student name and grade
    $total += $grade; // Add grade to total
    $count++; // Increment count
}

$average = $total / $count; // Calculate average grade
echo "Average grade: " . $average . "<br>"; // Output average grade

