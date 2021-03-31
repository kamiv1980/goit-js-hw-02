'use strict'
console.log('Задание 5')

let resultOfCheck = false
const checkForSpam = (message) => {
  const words = message.split(' ')
  for (const word of words) {
    if (word.toLowerCase() === 'spam' || word.toLowerCase() === 'sale') {
      resultOfCheck = true
      console.log(resultOfCheck)
      return resultOfCheck
    }
  }
}

checkForSpam('Latest technology news')
checkForSpam('JavaScript weekly newsletter')
checkForSpam('Get best sale offers now!')
сheckForSpam('[SPAM] How to earn fast money?')
