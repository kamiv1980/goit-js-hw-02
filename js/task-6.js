'use strict'
console.log('Задание 6')

let input
let total = 0
const numbers = []

for (;;) {
  input = prompt('Please, input some number!')
  if (input !== null) {
    const inputNumber = Number(input)
    if (Number.isNaN(inputNumber) === true) {
      alert('This is not a number, please try again!')
    } else {
      numbers.push(inputNumber)
    }
  } else {
    break
  }
}
for (const number of numbers) {
  total = total + number
}
console.log(`The total sum of the numbers is ${total}`)
