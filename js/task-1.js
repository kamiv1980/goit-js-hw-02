"use strict";
console.log("Задание 1");

const logItems=function (array) {
    for (const logItem of array) {
        const positionItem=array.indexOf(logItem)+1;
        console.log(`${positionItem} - ${logItem}`);
    } 
}
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);