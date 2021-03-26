"use strict";
console.log("Задание 5");

let resultOfCheck=false;
const checkForSpam=function (message) {
    const words=message.split(' ');
    for (const word of words) {
        const tempWord=word.toLowerCase();
        if (tempWord ==='spam' || tempWord ==='sale') {
            resultOfCheck=true;
            return resultOfCheck;
        };
    }
}

checkForSpam('Latest technology news');
console.log(resultOfCheck);

checkForSpam('JavaScript weekly newsletter');
console.log(resultOfCheck);

checkForSpam('Get best sale offers now!');
console.log(resultOfCheck);

checkForSpam('[SPAM] How to earn fast money?');
console.log(resultOfCheck);