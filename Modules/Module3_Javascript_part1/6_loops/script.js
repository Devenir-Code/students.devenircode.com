//forExample();
forExample();
function forExample() {
    debugger

    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}

//forNameExample();
forNameExample();
function forNameExample() {
    debugger

    const names = ["Alice", "Bob", "Charlie", "David"];

    //Allows for a more flexible way of iterating over an array
    for (let i = 0; i < names.length; i++) {
        console.log(`Hello, ${names[i]}!`);
    }

}

// Object have an forEach method that can be used to iterate over 
// the properties of an object.

//forEachExample();
forEachExample();
function forEachExample() {
    debugger

    const names = ["Alice", "Bob", "Charlie", "David"];

    // no index is needed
    names.forEach(name => console.log(`Hello, ${name}!`));

}


// whileExample();
whileExample();
function whileExample() {
    debugger
    // a great example of a while loop is 
    // when you don't know how many times you need to loop

    // The best way to use a while loop is when you need to loop
    // until a certain condition is met.

    while (true) {
        const input = prompt("Enter a number greater than 10 to exit");
        if (input > 10) {
            break;
        } else {
            console.log("That number is too small");
        }
    }
}

// doWhileExample();
doWhileExample();
function doWhileExample() {

    /*
    A do while loop is a type of loop in JavaScript that executes a 
    block of code at least once, and then continues to execute the 
    same block of code repeatedly as long as a specified condition 
    is true.

    A good use case for a do while loop in JavaScript is when you need
    to perform a task at least once, regardless of whether the 
    condition is initially true or false, and then continue to perform
    the task as long as the condition remains true.

    For example, let's say you have a program that asks the user to 
    enter a number between 1 and 10. If the user enters a number 
    outside this range, the program should keep asking the user for 
    a valid number. You could use a do while loop to achieve this as 
    follows:
    */

    debugger

    let userInput;

    do {
        userInput = prompt("Please enter a number between 1 and 10:");
    } while (userInput < 1 || userInput > 10);

    console.log("You entered: " + userInput);

    /* 
    In this example, the do while loop will continue to prompt the
    user for a valid number as long as the user enters a number 
    outside the range of 1 to 10. Once the user enters a valid number,
    the loop will exit, and the program will print the user's input 
    to the console.
    */


}

//forInExample();
forInExample();
function forInExample() {
    debugger

    const person = {
        firstName: "Alice",
        lastName: "Smith",
        age: 25
    };

    for (let property in person) {
        console.log(`${property}: ${person[property]}`);
    }

}

//forOfExample();
forOfExample();
function forOfExample() {
    debugger

    const names = ["Alice", "Bob", "Charlie", "David"];

    for (let name of names) {
        console.log(`Hello, ${name}!`);
    }

}


//storytime();
storytime();
function storytime() {
    debugger
    // Once upon a time, there was a young wizard named Harry who was tasked with counting all the magical creatures in the Forbidden Forest.

    // First, he created an array of all the creatures he knew existed in the forest.
    let creatures = ["unicorns", "dragons", "centaurs", "hippogriffs", "griffins", "werewolves"];

    // Then, he created a variable to keep track of how many creatures he had counted so far.
    let count = 0;

    // Next, he used a for loop to count each creature in the array.
    for (let i = 0; i < creatures.length; i++) {
        count += 1;
    }

    // Harry thought he had counted all the creatures, but the Headmaster warned him that there might be some magical creatures hiding in the forest that he hadn't seen yet.

    // So, Harry decided to use a while loop to search the forest for any additional creatures.

    // First, he created a variable to declare he was now exploring the forest.
    let exploringForest = true

    // Then, he created a while loop that would continue searching the forest until he didn't find any new creatures.

    while (exploringForest) {
        // Harry searched the forest and found a troll!
        creatures.push("troll");

        // He increased the count of the total creatures found.
        count += 1;

        // He's all done exploring, and runs away from the troll. Harry sets the exploring variable to false to break the while loop.
        exploringForest = false;
    }

    // After finding the troll, Harry decided to leave the forest and return to Hogwarts.

    // Finally, Harry reported his findings to the Headmaster, saying "I have counted " + count + " magical creatures in the Forbidden Forest."
    console.log("I have counted " + count + " magical creatures in the Forbidden Forest.")

    // The Headmaster was impressed with Harry's hard work and attention to detail, and praised him for a job well done.

    // Later that day, Harry decided to use a forEach loop to display all the creatures that he had counted in the forest.
    console.log("Here are all the magical creatures that I counted in the Forbidden Forest:");

    creatures.forEach(function (creature) {
        console.log("- " + creature);
    });

}
