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

    for (let i = 0; i < names.length; i++) {
        console.log(`Hello, ${names[i]}!`);
    }

}

//Object have an forEach method that can be used to iterate over the properties of an object.

//forEachExample();
forEachExample();
function forEachExample() {
    debugger

    const names = ["Alice", "Bob", "Charlie", "David"];

    // For each name in the array, print "Hello, <name>!"
    names.forEach(name => console.log(`Hello, ${name}!`));

}


// whileExample();
whileExample();
function whileExample() {
    debugger

    let i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }


}

// doWhileExample();
doWhileExample();
function doWhileExample() {
    debugger

    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 5);

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



