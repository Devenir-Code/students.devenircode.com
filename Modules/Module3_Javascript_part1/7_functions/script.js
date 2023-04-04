debugger
let people = ["John", "Mary", "Bob"];

console.log("Hello, " + people[0] + "!");
console.log("Hello, " + people[1] + "!");
console.log("Hello, " + people[2] + "!");

debugger

function greetUser(name) {
    console.log("Hello, " + name + "!");
}

people.forEach(greetUser);

debugger

function cleanRoom() {
    console.log("Pick up your toys and put them in the toy box");
    console.log("Make your bed");
    console.log("Put your dirty clothes in the hamper");
}

cleanRoom();
// Output:
// Pick up your toys and put them in the toy box
// Make your bed
// Put your dirty clothes in the hamper

cleanRoom();
// Output:
// Pick up your toys and put them in the toy box
// Make your bed
// Put your dirty clothes in the hamper

debugger


function cleanRoom() {
    debugger
    console.log("Pick up your toys and put them in the toy box");
    console.log("Make your bed");
    console.log("Put your dirty clothes in the hamper");
    doLaundry();
    doVacuuming();
    doPlayGames;
}

function doLaundry() {
    console.log("Gather your dirty clothes");
    console.log("Sort your clothes by color");
    console.log("Wash and dry your clothes");
    console.log("Fold and put away your clothes");
}

function doVacuuming() {
    console.log("Get the vacuum out of the closet");
    console.log("Turn on the vacuum");
    console.log("Vacuum the floor");
    console.log("Put away the vacuum");
}

function doPlayGames() {
    console.log("Get the game console out of the closet");
    console.log("Turn on the game console");
    console.log("Play your favorite game");
    console.log("Put away the game console");
}

cleanRoom();


