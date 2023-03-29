//IfElse()
IfElseExample();
function IfElseExample() {
    debugger;

    // Declare a variable "condition" and set its value to true
    var condition = true;

    // Check if the "condition" variable is true
    if (condition) {
        // If it is true, log "do this" to the console
        console.log('do this');
    }
    else {
        // If it is false, log "do this instead" to the console
        console.log('do this instead');
    }
}

//IfElseIf()
IfElseIfExample();
function IfElseIfExample() {
    debugger

    var age = 25;
    var isCitizen = true;

    if (age >= 18 && isCitizen) {
        console.log("You are eligible to vote.");
    }
    else if (age >= 16 && !isCitizen) {
        console.log("You are not eligible to vote, but you can register when you become a citizen.");
    }
    else {
        console.log("You are not eligible to vote.");
    }
}


//Switch()
SwitchExample();
function SwitchExample() {
    debugger

    // Using else if statements
    var day = "Wednesday";

    if (day === "Monday") {
        console.log("It's Monday!");
    } else if (day === "Tuesday") {
        console.log("It's Tuesday!");
    } else if (day === "Wednesday") {
        console.log("It's Wednesday!");
    } else if (day === "Thursday") {
        console.log("It's Thursday!");
    } else if (day === "Friday") {
        console.log("It's Friday!");
    } else if (day === "Saturday") {
        console.log("It's Saturday!");
    } else if (day === "Sunday") {
        console.log("It's Sunday!");
    } else {
        console.log("Invalid day of the week.");
    }

}

//LookUpExample()
LookUpExample();
function LookUpExample() {
    debugger;

    // Declare a variable "day" and set its value to "Monday"
    var day = "Monday";

    // Declare an object "messages" that maps day names to messages
    var messages = {
        "Monday": "It's Monday!",
        "Tuesday": "It's Tuesday!",
        "Wednesday": "It's Wednesday!",
        "Thursday": "It's Thursday!",
        "Friday": "It's Friday!",
        "Saturday": "It's Saturday!",
        "Sunday": "It's Sunday!"
    };

    // Get the message corresponding to the day in the "messages" object
    var message = messages[day];

    // Check if the message exists
    if (message) {
        // If the message exists, log it to the console
        console.log(message);
    }
    else {
        // If the message does not exist, log "Invalid day of the week." to the console
        console.log("Invalid day of the week.");
    }

    // Alternatively, log the message or "Invalid day of the week." to the console using the OR operator
    console.log(message || "Invalid day of the week.");
}


