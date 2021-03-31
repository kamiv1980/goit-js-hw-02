'use strict'
console.log('Задание 4')

const formatString = (string) => {
  let newString
  if (string.length > 40) {
    newString = string.slice(0, 40) + '...'
  } else {
    newString = string
  }
  console.log(newString)
  return newString
}
formatString('Curabitur ligula sapien, tincidunt non.')
formatString('Vestibulum facilisis, purus nec pulvinar iaculis.')
formatString('Curabitur ligula sapien.')
formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.')
