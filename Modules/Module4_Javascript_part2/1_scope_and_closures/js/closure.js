/*
Example 1: Closure 
Each time the closure is called, the counter is incremented.
the counter variable is not reset to 0, 
because it is not declared in the inner function.
*/
debugger
function outerFunction1() {
    let counter = 0;

    function innerFunction() {
        counter++;
        console.log(counter);
    }

    return innerFunction;
}

const closure1 = outerFunction1();

closure1(); // 1
closure1(); // 2
closure1(); // 3


/*
Example 2: Closure
Each time the closure is called, the counter is reset to 0.
because the counter variable is declared in the inner function.
*/


debugger
function outerFunction2() {
    function innerFunction() {
        let counter = 0;
        counter++;
        console.log(counter);
    }

    return innerFunction;
}

const closure2 = outerFunction2();

closure2(); // 1
closure2(); // 1
closure2(); // 1

