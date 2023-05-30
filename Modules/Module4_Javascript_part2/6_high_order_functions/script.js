debugger

const numbers1 = [1, 2, 3, 4, 5];
const squaredNumbers1 = [];
for (let i = 0; i < numbers1.length; i++) {
    squaredNumbers1.push(numbers1[i] * numbers1[i]);
}
console.log(squaredNumbers1); // Output: [1, 4, 9, 16, 25

debugger
// good but could be better
// lets use a higher order function called map
const numbers2 = [1, 2, 3, 4, 5];
const squaredNumbers2 = numbers2.map((n) => n * n);
console.log(squaredNumbers2); // Output: [1, 4, 9, 16, 25]

debugger


//



const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]