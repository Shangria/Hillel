// Напишите скрипт, который запрашивает у пользователя логин и пароль и работает по следующей логике.

const userObj = {
    login: 'Alona',
    password: '1111'
}
const userLogin = prompt('Введите логин');

if (userLogin === userObj.login) {

    let userPassword = prompt('Введите пароль');

    if (checkPassword(userPassword)) {
        alert('Hi!');
    }
} else if (checkPassword(userPassword)) {
    alert(`${userPassword} неверный!!`)
    userPassword = prompt('Введите пароль');
    checkPassword(userPassword);
}

function checkPassword(password) {
    if (password === userObj.password) {
    }
}
