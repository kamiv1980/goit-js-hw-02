'use strict'
console.log('Задание 5')

const checkForSpam = (message) => {
  const tempMessage = message.toLowerCase()
  return tempMessage.includes('spam') || tempMessage.includes('sale')
}

console.log(checkForSpam('Latest technology news'))
console.log(checkForSpam('JavaScript weekly newsletter'))
console.log(checkForSpam('Get best sale offers now!'))
console.log(checkForSpam('[SPAM] How to earn fast money?'))
