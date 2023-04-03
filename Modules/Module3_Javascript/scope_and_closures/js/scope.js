debugger;

// Global Scope
var aGlobalVariable = "I'm in the global scope";

function levelOne() {
    // Local Scope for levelOne
    let levelOneVariable = "I'm in level 1";
    let level = 1;


    function levelTwo() {
        // Local Scope for levelTwo
        let levelTwoVariable = "I'm in level 2";
        let level = 2;


        function levelThree() {
            // Local Scope for levelThree
            let levelThreeVariable = "I'm in level 3";
            let level = 3;
            console.log(level); // "3"
            console.log(levelThreeVariable); // "I'm in level 3"
            console.log(levelTwoVariable); // "I'm in level 2"
            console.log(levelOneVariable); // "I'm in level 1"
            console.log(aGlobalVariable); // "I'm in the global scope"
        }
        levelThree();
    }
    levelTwo();
}
levelOne();


debugger;
