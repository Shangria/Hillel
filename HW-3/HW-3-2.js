// Напишите скрипт, который запрашивает у пользователя логин и пароль и работает по следующей логике.

let repeatPassword = true;
const userObj = {
    login: 'Alona',
    password: '1111'
}
const userLogin = prompt('Введите логин');
let userPassword = prompt('Введите пароль');
checkLogin(userLogin);


function checkPassword(password) {

    debugger
    if (password === userObj.password) {
        console.log('Hi!');
    } else if (password !== userObj.password) {
        let confirmPassword = confirm('Хотите ввести пароль еще раз');
        while (confirmPassword) {
            password = prompt('Введите пароль еще раз');
            if (password !== userObj.password) {
                confirmPassword = confirm('Хотите ввести пароль еще раз');
            } else {
                confirmPassword = false;
            }
        }
        if (password !== userObj.password) {
            console.log('пароль неверный');
        } else {
            console.log('Hi!');
        }
    }
    // if (userPassword === userObj.password) {
    //     console.log('Hi!');
    //     break
    // } else if (userPassword !== userObj.password) {
    //     const userChange = confirm('Введите пароль еще раз');
    //     if (userChange) {
    //         userPassword = prompt('Введите пароль');
    //     } else {
    //         console.log('пароль неверный');
    //         break
    //     }
    // }
}


function checkLogin(loginD) {
    switch (loginD) {
        case 'Alona':
            checkPassword(userPassword);
            return;
        default:
            console.log(`Логин ${loginD} неверный`);
            return;
    }
}

