"use strict";
console.log("Задание 6");

let input;
let total=0;
const numbers=[];
do {
    input=prompt('Please, input some number!');
    const inputNumber = Number(input);
    if (Number.isNaN(inputNumber) === true) {
      alert("This is not a number, please try again!");
    } else {
      numbers.push(inputNumber);
    }
  } while (input !== null);
for (const number of numbers) {
    total=total+number;
}
console.log(`The total sum of the numbers is ${total}`);