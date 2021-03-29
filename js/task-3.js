'use strict'
console.log('Задание 3')

const findLongestWord = function (string) {
  const words = string.split(' ')
  let longestWord = ''
  for (const word of words) {
    if (longestWord.length < word.length) {
      longestWord = word
    }
  }
  console.log(longestWord)
  return longestWord
}
findLongestWord('The quick brown fox jumped over the lazy dog')
findLongestWord('Google do a roll')
findLongestWord('May the force be with you')
