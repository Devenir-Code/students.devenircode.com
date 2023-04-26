<?php


/* A function is a block of code that does something specific, 
which can be used or reused whenever that task 
needs to be done. */
// Functions
function add($num1, $num2) {
    $result = $num1 + $num2;
    return $result;
}
$sum = add(3, 5); // Call the add function with arguments 3 and 5
echo "The sum is " . $sum . "<br>"; // Output: The sum is 8




//Another Function Example
function countTracks($album) {
    $albums = array(
        "Please Please Me" => 14,
        "With The Beatles" => 14,
        "A Hard Day's Night" => 13,
        "Beatles for Sale" => 14,
        "Help!" => 14,
        "Rubber Soul" => 14,
        "Revolver" => 14,
        "Sgt. Pepper's Lonely Hearts Club Band" => 13,
        "Magical Mystery Tour" => 11,
        "The Beatles (White Album)" => 30,
        "Yellow Submarine" => 13,
        "Abbey Road" => 17,
        "Let It Be" => 12
    );

    if (array_key_exists($album, $albums)) {
        return $albums[$album];
    } else {
        return 0;
    }
}
$album = "Rubber Soul";
$tracks = countTracks($album);
echo "The Beatles album " . $album . " has " . $tracks . " tracks.<br>"; // Output: The album Rubber Soul has 14 tracks.
