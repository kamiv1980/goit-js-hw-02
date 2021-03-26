"use strict";
console.log("Задание 2");

const calculateEngravingPrice=function (message, pricePerWord) {
    const a=message.split(' ');
    const numberWords=a.length;
    const totalPrice=numberWords*pricePerWord;
    console.log(totalPrice);
}
calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',10);
calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',20);
calculateEngravingPrice(
    'Donec orci lectus aliquam est magnis',40);
calculateEngravingPrice(
    'Donec orci lectus aliquam est magnis',20);