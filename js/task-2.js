'use strict'
console.log('Задание 2')

const calculateEngravingPrice = function (message, pricePerWord) {
  const a = message.split(' ')
  return a.length * pricePerWord
}
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
)
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
)
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40))
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20))
