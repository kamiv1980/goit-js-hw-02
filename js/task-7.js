"use strict";
console.log("Задание 7");

const logins=['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid=function (login) {
    let resultOfCheck=false;
    const length=login.length;
    if (length>=4 && length<=16) {
        resultOfCheck=true;
    }
    return resultOfCheck;
}

const isLoginUnique=function (allLogins, login) {
    const resultOfCheck=allLogins.includes(login);
    return resultOfCheck;    
}

const addLogin=function (allLogins, login) {
    if (isLoginValid(login)===false) {
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    } else  if (isLoginUnique(allLogins,login)===true) {
        console.log('Такой логин уже используется!');
    } else {
        allLogins.push(login);
        console.log('Логин успешно добавлен!');
    }
}
addLogin(logins, 'Ajax');
addLogin(logins, 'robotGoogles');
addLogin(logins, 'Zod');
addLogin(logins, 'jqueryisextremelyfast');