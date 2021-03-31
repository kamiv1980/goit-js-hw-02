'use strict'
console.log('Задание 7')

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123']

const isLoginValid = (login) => {
  return login.length >= 4 && login.length <= 16
}

const isLoginUnique = (allLogins, login) => {
  return allLogins.includes(login)
}

const addLogin = (allLogins, login) => {
  if (isLoginValid(login) === false) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов')
  } else if (isLoginUnique(allLogins, login) === true) {
    console.log('Такой логин уже используется!')
  } else {
    allLogins.push(login)
    console.log('Логин успешно добавлен!')
  }
}
addLogin(logins, 'Ajax')
addLogin(logins, 'robotGoogles')
addLogin(logins, 'Zod')
addLogin(logins, 'jqueryisextremelyfast')
